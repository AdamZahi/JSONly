import { NextRequest, NextResponse } from "next/server";
import { currentUser } from '@clerk/nextjs/server';
import prisma from "@/lib/db";


export async function GET() {
  const user = await currentUser();
  const userId  = user?.id;
  if(!userId) {
    return NextResponse.json({ error: 'Unauthorized'}, { status: 401 })
  }

  try {
    const json = await prisma.jsonData.findMany({
      where: { userId},
      orderBy: { createdAt: 'desc'},
      select: {
        id: true,
        name: true,
        createdAt: true
      }
    });
    return NextResponse.json(json);
  } catch(error) {
    console.error('Error fetching JSON list:', error);
    return NextResponse.json({ error: 'Error fetching JSON list'}, { status: 500 })
  }
}

export async function POST(request : NextRequest) {
  const user = await currentUser();
  const userId  = user?.id;
  if(!userId){
    return NextResponse.json({error : 'unauthorized!'}, {status : 401});
  }

  const {name , content} = await request.json();
  try{
    const json = await prisma?.jsonData.create({
      data: {
        name,
        content,
        userId
      }
    })
    return NextResponse.json(json);
  }catch(e){
    console.error(e);
    return NextResponse.json({e :"Error saving data" }, {status: 500});
  }
}