import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface CentralizedContainerProps {
  children: React.ReactNode;
  className?: string;
}

const CentralizedContainer: React.FC<CentralizedContainerProps> = ({
  children,
  className,
}) => {
  return (
    <main className="flex items-center justify-center h-screen bg-background">
      <Card
        className={cn(
          'max-w-md w-full p-6 shadow-lg',
          // Default Card component from Shadcn UI includes:
          // rounded-lg, border, bg-card, text-card-foreground, shadow-sm.
          // We are overriding shadow-sm with shadow-lg and adding padding (p-6),
          // max-width, and full-width responsiveness.
          // bg-card will use hsl(var(--card)) which is #FFFFFF in light mode (surface)
          // text-card-foreground will use hsl(var(--card-foreground)) which is #000000 in light mode
          className
        )}
      >
        {children}
      </Card>
    </main>
  );
};

export default CentralizedContainer;
