"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"

// Assuming Button is defined or imported correctly

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Documents, & Plans, Unified. Welcome to <span className="underline">much2share</span>
            </h1>
            <h3>
                meet2share is the connected workspace where <br/> 
                better, faster work happens.
            </h3>
            <Button>
                Enter meet2share
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    );
};
