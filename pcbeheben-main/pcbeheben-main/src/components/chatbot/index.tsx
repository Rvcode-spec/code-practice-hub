"use client"
import { RefreshCcw } from "lucide-react";
import ChatBot, { Settings, Styles } from "react-chatbotify";
import React from "react";
import { z } from 'zod'
import axios from "axios";

const ChatbotCustom = () => {
    const [form, setForm] = React.useState({});

    async function onSubmit(phone: any) {
        try {
            await axios.post('/api/submit', {
                ...form,
                phone,
                sourceUrl: window.location.href,
                referrerUrl: document.referrer
            })
        } catch (error) { }
    }

    const flow = {
        start: {
            message: "",
            transition: { duration: 1000 },
            chatDisabled: true,
            path: "ask_problem",
        },
        ask_problem: {
            message: "Bitte identifizieren Sie das Problem oder wählen Sie ein anderes Problem",
            checkboxes: { items: ["DRUCKER-WLAN", "DRUCKER OFFLINE", "FEHLERBEHEBUNG BEIM DRUCKER", "TREIBERPROBLEM", "TINTENPROBLEM", "PAPIERSTAU", "ANDERES PROBLEM"], min: 1 },
            function: (params: { userInput: any; }) => setForm({ ...form, problemTitle: params.userInput }),
            chatDisabled: true,
            path: "second"
        },
        second: {
            message: "Ab wann sind Sie mit diesem Problem konfrontiert?",
            function: (params: { userInput: any; }) => setForm({ ...form, message: params.userInput }),
            chatDisabled: false,
            path: "third"
        },
        third: {
            message: "Bitte Geben Sie weitere Informationen zum Drucker Modell oder zur Marke an",
            function: (params: { userInput: any; }) => setForm({ ...form, printermodal: params.userInput }),
            chatDisabled: false,
            path: "fourth"
        },
        fourth: {
            message: "Vielen Dank für die Weitergabe Ihrer Druckerinformationen! Können Sie uns bitte Ihren Namen nennen, bevor wir mit der Fehlerbehebung beginnen? ",
            function: (params: { userInput: any; }) => setForm({ ...form, name: params.userInput }),
            chatDisabled: false,
            path: "fifth"
        },
        fifth: {
            message: "Um fortzufahren, bestätigen Sie bitte Ihre Identität, indem Sie Ihre Telefonnummer angeben",
            function: (params: { userInput: any; }) => setForm({ ...form, phone: params.userInput }),
            path: async (params: { userInput: string | any[]; injectMessage: (arg0: string) => any; }) => {
                onSubmit(params.userInput)

                if (isNaN(Number(params.userInput)) || params.userInput.length < 7) {
                    await params.injectMessage("Bitte geben Sie eine gültige Nummer ein");
                    return;
                }
                return "thank_you";
            }
        },
        thank_you: {
            message: `Wir haben Ihre Anfrage erhalten. Einer unserer Teammitglieder wird sich mit Ihnen in Verbindung setzen`,
            chatDisabled: true,
            path: ""
        },
    }

    const settings: Settings = {
        general: {
            primaryColor: '#5b21b6',
            secondaryColor: '#5b21b6',
            fontFamily: 'Arial, sans-serif',
        },
        audio: {
            disabled: true,
        },
        chatHistory: {
            disabled: true
        },
        footer: {
            text: " ",
        },
        header: {
            avatar: "images/Sandra.png",
            title: "Sandra",
            buttons: [
                <button key={1} onClick={() => window.location.reload()} className="text-white !pr-3 " ><RefreshCcw /></button>,
                "close-chat-button"
            ]
        },
        emoji: {
            disabled: true
        },
        notification: {
            disabled: true
        },
        botBubble: {
            simStream: true,
            showAvatar: true,
            avatar: "images/Sandra.png"
        },
        userBubble: {
            avatar: "images/Sandra.png",
            showAvatar: true,
            dangerouslySetInnerHtml: false
        },
        tooltip: {
            mode: "CLOSE",
            text: "Willkommen beim Druckersupport. Ich kann Ihnen bei der Lösung Ihres Druckerproblems helfen"
        },
        chatButton: {
            icon: "images/Sandra.png"
        },
    };
    const styles: Styles = {
        headerStyle: {
            background: '#5b21b6',
            color: '#fff',
            padding: '10px',
        },
        chatWindowStyle: {
            backgroundColor: '#f5f5f5',
        },
        tooltipStyle: {
            width: "200px",
            textWrap: "wrap",
            fontSize: "14px"
        },
        chatButtonStyle: {
            background: "#5b21b6",
        },
        botCheckboxRowStyle: {
            maxHeight: "100px",
        }
    };
    return (
        <ChatBot settings={settings} styles={styles} flow={flow} />
    );
};
export default ChatbotCustom