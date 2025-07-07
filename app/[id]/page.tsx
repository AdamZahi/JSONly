'use client';

import { use, useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { JsonData } from '@prisma/client';

type PageProps = {
    params: { id: string }
};

export default function Page({ params }: PageProps) {
    const [jsonData, setJsonData] = useState<JsonData | null>(null);
    const [loading, setLoading] = useState(true);
    const { id } = use(params);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`/api/json/${id}`);
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            setJsonData(data);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        } finally {
            setLoading(false);
        }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return <div className="mt-8">loading...</div>;
    }

    if (!jsonData) {
        return <div className="mt-8 text-red-500">No data found for this ID.</div>;
    }

    return (
        <div className="mt-8 space-y-4">
        <h1 className="text-2xl underline font-bold">{jsonData.name}</h1>
        <CodeMirror
            value={jsonData.content || ''}
            height="400px"
            extensions={[json()]}
            editable={false}
            className="border shadow-sm"
        />
        </div>
    );
}