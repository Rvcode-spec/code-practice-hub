import { parseBody } from 'next-sanity/webhook';
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug: {
        current: string;
      };
    }>(req, process.env.NEXT_PUBLIC_SANITY_WEBHOOK_SECRET);

    if (!isValidSignature) {
      return new Response('Invalid Signature', { status: 401 });
    }

    if (!body?._type) {
      return new Response('Bad Request', { status: 400 });
    }

    if (body._type === 'blog') {
      revalidatePath('/blog');
      revalidatePath(`/blog/${body.slug.current}`);
      revalidatePath('/sitemap.xml');
    } else {
      revalidateTag(body._type);
      revalidatePath('/sitemap.xml');
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (error: any) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
