import { NextRequest, NextResponse } from 'next/server';
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { format } from 'date-fns';

// Initialize Google Service Account JWT
const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env?.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Fix for multi-line keys
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const doc = new GoogleSpreadsheet(
    process.env.SPREADSHEET_ID!, // Replace with your sheet ID
    serviceAccountAuth
);

export async function POST(req: any) {
    try {
        const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];
        
        // Use an IP Geolocation API (e.g., ipapi.co)
        let country,region;
        try{
            const r = await fetch(`http://ip-api.com/json/${ip}`);
            const d = (await r.json());
            country = d.country
            region =  d.regionName
        }catch(e){}

        // Load sheet and prepare data
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle['leads'];

        const createdAt = format(
            new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })),
            'dd,LLL yyyy hh:mm aa'
        );


        const data = await req.json()

        // Add row to Google Sheet
        await sheet.addRow({
            Name: data.name,
            Email: data.email,
            Phone: data.phone,
            Service: data.service,
            Message: data.message,
            PrinterModel: data.printermodal,
            Model: data.model,
            Problem: data.problemTitle,
            Location: region+", "+country,
            SourceUrl: data.sourceUrl,
            ReferrerUrl: data.referrerUrl,
            CreatedAt: createdAt,
        });

        // Format the Slack message
        let slackMessageText = `🚨 *New Submission Received!* 🚨\n`;

        if (data.name) slackMessageText += `*Name:* ${data.name}\n`;
        if (data.email) slackMessageText += `*Email:* ${data.email}\n`;
        if (data.phone) slackMessageText += `*Phone:* ${data.phone}\n`;
        if (data.service) slackMessageText += `*Service:* ${data.service}\n`;
        if (data.message) slackMessageText += `*Message:* ${data.message}\n`;
        if (data.printermodel) slackMessageText += `*Printer Model:* ${data.printermodel}\n`;
        if (data.model) slackMessageText += `*Model:* ${data.model}\n`;
        if (data.problemTitle) slackMessageText += `*Problem:* ${data.problemTitle}\n`;

        // Slack Payload
        const slackMessage = {
            text: slackMessageText,
        };

        // Send POST request to Slack Webhook
        const response = await fetch(process.env.SLACK_WEBHOOK_URL!, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(slackMessage),
        });

        return NextResponse.json({});
    } catch (error: any) {
        console.error(error);
        return new Response(error.message, { status: 500 });
    }
}
