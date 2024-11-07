import * as React from 'react';
import {cn} from '@/lib/utils';
import {
    Card as OriginalCard,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from './card'; // Adjust the import path if necessary

const CardNoBorder = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
    <div
        ref={ref}
        className={cn(
            ' bg-card text-card-foreground ', // Removed 'border' class
            className,
        )}
        {...props}
    />
));
CardNoBorder.displayName = 'CardNoBorder';

export {
    CardNoBorder,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
};
