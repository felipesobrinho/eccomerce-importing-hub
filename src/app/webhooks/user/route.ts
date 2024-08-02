import prisma from '@/lib/prisma';
import { IncomingHttpHeaders } from 'http';
import {headers} from 'next/headers';
import { NextResponse } from 'next/server';
import { Webhook, WebhookRequiredHeaders } from 'svix';

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || '';
 
type EventType = 'user.created' | 'user.updated' | '*';

type Event = {
    data: EventDataType;
    object: 'event';
    type: EventType;
}

type EventDataType = {
    id: string;
    first_name: string;
    last_name: string;
    email_addres: EmailAddressType[];
    primary_email_addres_id: string;
    attributes: Record<string, string> | number;
}

type EmailAddressType = {
    id: string;
    email_addres: string;
}

async function handler(request: Request) {
    const payload = await request.json();
    const headerList = headers();
    const heads = {
        'svix-id': headerList.get('svix-id'),
        'svix-timestamp': headerList.get('svix-timestamp'),
        'svix-signature': headerList.get('svix-signature'),
    };
    const wh = new Webhook(webhookSecret);
    let evt: Event | null = null;

    try {
        evt = wh.verify(
           JSON.stringify(payload),
           heads as IncomingHttpHeaders & WebhookRequiredHeaders 
        ) as Event;
    } catch (err) {
        console.error((err as Error).message);
        return NextResponse.json({}, { status: 400});
    }

    const eventType: EventType = evt.type
    if (evt.type === 'user.created' || eventType === 'user.updated') {
        const {
            id,
            first_name,
            last_name,
            email_addres,
            primary_email_addres_id,
            ...attributes
        } = evt.data;
        await prisma.user.upsert({
            where: {externalId: id as string},
            create: {
                externalId: id as string,
                attributes
            },
            update: {
                attributes
            },
        });
    }

    
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;