"use client"
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react"; // Assuming PlusCircle is from this package
import Image from "next/image"; // If you're using Next.js

const DocumentsPage = () => {
    const { user } = useUser();
    const firstName = user?.firstName || 'Guest';

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image 
                src="/empty_dark.png"
                height={300}
                width={300}
                alt="Empty"
                className="hidden dark:block"
            />
            <Image 
                src="/empty_lig.png"
                height={300}
                width={300}
                alt="Empty"
                className="dark:hidden"
            />
            
            <h2>
                Welcome to {firstName}&apos;s Meet2share
            </h2>
            <Button>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create a note
            </Button>
        </div>
    );
}
 
export default DocumentsPage;
