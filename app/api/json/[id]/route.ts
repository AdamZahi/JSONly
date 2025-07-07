import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
    ) {
    const { id } = params;
    const jsonData = await prisma.jsonData.findUnique({
        where: { id }
    });

    if (!jsonData) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(jsonData);
}