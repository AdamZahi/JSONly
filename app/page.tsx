import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div className='space-y-2 mt-10 flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold sm:text-5xl mb-10'>Share Your Data</h1>
      <p className='max-w-[600px] text-muted-foreground md:text-lg text-center'>
        Our app makes essay to share your JSON data with others. Simply
        authenticate and upload your data
      </p>
      <SignedOut>
        <div className="mt-16 flex flex-row gap-4">
                    <Button className='cursor-pointer bg-gray-300 hover:bg-gray-400 text-black font-semibold'>
                        <SignUpButton mode='modal'/>
                    </Button>
                    <Button className='cursor-pointer font-semibold'>
                        <SignInButton mode='modal'/>
                    </Button>
        </div>
      </SignedOut>
    </div>
  );
}
