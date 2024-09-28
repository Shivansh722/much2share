"use client"

import {  ReactNode } from "react";
// import { ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";


const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

export const ConvexClientProvider = ( {
    children 
}: {
    children: ReactNode;
}) => {
    return (
        <ClerkProvider>
          <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            {children}
          </ConvexProviderWithClerk>
        </ClerkProvider>
      )
}