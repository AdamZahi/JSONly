import {useEffect, useState} from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from 'next/link';
import { format } from 'date-fns';
import { ShareIcon } from 'lucide-react';

export default function JsonTable() {
    // const [jsonDataList, setJsonDataList] = useState<JsonData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const jsonDataList = [
    {
        id: "45",
        name: 'test',
        createdAt: '2025-07-05T04:12:22.297Z',
    },
    {
        id: "46",
        name: 'movies',
        createdAt: '2025-07-05T07:12:38.297Z',
    },
]
    return (
        <Table>
        <TableHeader>
            <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>
                <span className='sr-only'>Share</span>
            </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
        {jsonDataList.map((data) => (
            <TableRow key={data.id}>
                <TableCell>{data.name}</TableCell>
                <TableCell>
                    {format(new Date(data.createdAt), 'dd MMMM yyyy')}
                </TableCell>
                <TableCell>
                    <Link href={`/${data.id}`}>
                        <ShareIcon className='h-4 w-4' />
                    </Link>
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
    </Table>
    )
}

