'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ErrorPageProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ErrorPage({ error, resetErrorBoundary }: ErrorPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
        <p className="text-muted-foreground mb-8">{error.message}</p>
        <div className="space-x-4">
          <Button onClick={resetErrorBoundary}>Try Again</Button>
          <Button variant="outline" asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
