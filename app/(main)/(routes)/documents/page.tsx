"use client"

import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react"; // Assuming PlusCircle is from this package
import Image from "next/image"; // If you're using Next.js
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";  

const DocumentsPage = () => {
    const { user } = useUser();
    const create = useMutation(api.documents.create);
    const firstName = user?.firstName || 'Guest';

   
    const onCreate = () => {
        const promise = create({ title: "Untitled"});

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "Note created",
            error: "Failed to create a note. Please try again." 
        })
    }

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
            
            <h2 className="text-lg font-medium">
                Welcome to {firstName}&apos;s Meet2share
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create a note
            </Button>
        </div>
    );
}
 
export default DocumentsPage;
