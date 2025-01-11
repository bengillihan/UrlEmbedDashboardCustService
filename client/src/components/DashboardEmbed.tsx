import { useState } from 'react';
import { AlertCircle } from 'lucide-react';

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

  return (
    <div className="w-full h-full">
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to load dashboard</h3>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        </div>
      ) : (
        <iframe 
          src={url}
          title={title}
          className="w-full h-full border-0"
          onLoad={handleLoad}
          onError={handleError}
          allow="fullscreen"
        />
      )}
    </div>
  );
}