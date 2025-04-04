import { Skeleton } from '@/components/ui/skeleton';

export function BlogLoading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-[400px] w-full" />
      <div className="space-y-4">
        <Skeleton className="h-8 w-[300px]" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}

export function ProjectLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array(6).fill(null).map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-[200px] w-full" />
          <Skeleton className="h-6 w-[200px]" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  );
}
