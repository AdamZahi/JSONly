import JsonEditor from '@/components/json-editor';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function DashboardPage() {
    const user = await currentUser();
    if (!user) {
        return redirect('/');
    }
    return (
        <div>
            <div className='my-8'>
                <h1 className='text-3xl font-bold'>Dashboard</h1>
                <p className='text-muted-foreground'>
                    manage your data and share it with others.
                </p>
            </div>
            <JsonEditor />
        </div>
    );
} 