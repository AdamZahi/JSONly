'use client';

// import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import JsonTable from './json-table';
// import AddJsonDialog from './add-json-dialog';

export default function JsonEditor() {
    // const [refreshKey, setRefreshKey] = useState(0);
    return (
        <Card>
            <CardHeader>
                <CardTitle>Saved JSON Data</CardTitle>
                <CardDescription>View and share your saved JSON data.</CardDescription>
            </CardHeader>
            <CardContent>
                <JsonTable/>
            </CardContent>
            <CardFooter>
                {/* <AddJsonDialog/> */}
            </CardFooter>
        </Card>
    )
}

