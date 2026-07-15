import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nama, whatsapp, alamat, pesanan, ongkir } = body;

        if (!nama || !whatsapp || !alamat || !pesanan) {
            return NextResponse.json(
                { error: 'Semua field wajib diisi' },
                { status: 400 }
            );
        }

        const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

        if (!SLACK_WEBHOOK_URL) {
            console.warn('SLACK_WEBHOOK_URL not configured, skipping Slack notification');
            return NextResponse.json({ success: true, message: 'Order submitted (Slack not configured)' });
        }

        const slackMessage = {
            text: "🛒 Pesanan Baru dari Website GutJoy",
            blocks: [
                {
                    type: "header",
                    text: {
                        type: "plain_text",
                        text: "🛒 Pesanan Baru - GutJoy Life",
                        emoji: true
                    }
                },
                {
                    type: "section",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: `*Nama:*\n${nama}`
                        },
                        {
                            type: "mrkdwn",
                            text: `*No. WhatsApp:*\n${whatsapp}`
                        }
                    ]
                },
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `*Alamat Pengiriman:*\n${alamat}`
                    }
                },
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `*Pesanan:*\n${pesanan}`
                    }
                },
                {
                    type: "section",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: `*Jasa Pengiriman:*\n${ongkir || '-'}`
                        },
                        {
                            type: "mrkdwn",
                            text: `*Status:*\n🟡 Menunggu Konfirmasi`
                        }
                    ]
                },
                {
                    type: "divider"
                },
                {
                    type: "context",
                    elements: [
                        {
                            type: "mrkdwn",
                            text: `📅 ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })} | 🌐来源: gutjoy.life`
                        }
                    ]
                }
            ]
        };

        const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(slackMessage),
        });

        if (!slackResponse.ok) {
            throw new Error('Failed to send to Slack');
        }

        return NextResponse.json({ success: true, message: 'Order submitted successfully!' });

    } catch (error) {
        console.error('Error submitting order:', error);
        return NextResponse.json(
            { error: 'Terjadi kesalahan saat submit pesanan.' },
            { status: 500 }
        );
    }
}
