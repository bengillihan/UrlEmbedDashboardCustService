import { useState } from 'react';
import { AlertCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardEmbedProps {
  url: string;
  title: string;
}

export function DashboardEmbed({ url, title }: DashboardEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const isSalesFlow = title === 'SalesFlow';

  if (hasError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to load dashboard</h3>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
    );
  }

  if (isSalesFlow) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50">
        <Button 
          size="lg"
          onClick={() => window.open(url, '_blank')}
          className="flex items-center gap-2"
        >
          <ExternalLink className="h-5 w-5" />
          Open SalesFlow Dashboard
        </Button>
      </div>
    );
  }

  return (
    <iframe 
      src={url}
      title={title}
      className="w-full h-full border-0"
      onLoad={handleLoad}
      onError={handleError}
      allow="fullscreen"
    />
  );
}