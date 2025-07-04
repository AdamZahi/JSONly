import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image'
import Link from "next/link";
import { Button } from './ui/button';

export default function Navbar() {
    return (
    <div className="className='sticky top-0 z-30 border-b bg-background px-4 sm:px-6">
        <div className='flex items-center justify-between mx-auto max-w-4xl h-16'>
            <div className="flex gap-4">
                <Link href={"/"} className='flex items-center gap-1'>
                    <Image src='/json.png' width={32} height={32} alt='Logo JSONly'/>
                    <span className='font-bold'>JSONly.</span>
                </Link>
            </div>
            <div className='flex gap-4 justify-center items-center'>
                <SignedOut>
                    <Button className='cursor-pointer bg-gray-300 hover:bg-gray-400 text-black font-semibold'>
                        <SignUpButton mode='modal'/>
                    </Button>
                    <Button className='cursor-pointer font-semibold'>
                        <SignInButton mode='modal'/>
                    </Button>
                </SignedOut>
                <SignedIn>
                    <Link href={"/dashboard"} className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'>
                        Dashboard
                    </Link>
                    <UserButton />
                </SignedIn>
                
            </div>
            
        </div>
    </div>
)
}

