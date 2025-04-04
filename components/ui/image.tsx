import * as React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface ImageProps extends Omit<NextImageProps, 'alt'> {
  alt: string;
  className?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ alt, className, ...props }, ref) => {
    const [isLoading, setIsLoading] = React.useState(true);

    return (
      <div className={cn('overflow-hidden', className)}>
        <NextImage
          ref={ref}
          alt={alt}
          className={cn(
            'duration-700 ease-in-out',
            isLoading ? 'scale-110 blur-2xl' : 'scale-100 blur-0'
          )}
          onLoadingComplete={() => setIsLoading(false)}
          quality={90}
          {...props}
        />
      </div>
    );
  }
);

Image.displayName = 'Image';

export { Image };
