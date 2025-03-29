'use client';

import { useState } from 'react';
import { Download, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function DownloaderSection() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!url) {
      toast.error('Please enter an Instagram URL');
      return;
    }

    setLoading(true);
    try {
      toast.success('Download started!');
    } catch (error) {
      toast.error('Failed to download content');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Input
              placeholder="Paste Instagram URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="pl-10"  // Add padding to avoid overlap with icon
            />
            <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <Button
            onClick={handleDownload}
            disabled={loading}
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}
