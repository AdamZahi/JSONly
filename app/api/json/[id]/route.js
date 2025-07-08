import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    
    const { id } = await params;
    if (!id) {
    return new Response(JSON.stringify({ error: 'Missing id' }), { status: 400 });
        }

    try {
        const json = await prisma.jsonData.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            content: true,
            createdAt: true
        }
        });

        if (!json) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
        }

        return NextResponse.json(json);
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        return NextResponse.json({ error: 'Error fetching JSON data' }, { status: 500 });
    }
}