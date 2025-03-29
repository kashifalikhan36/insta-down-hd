'use client';  // ✅ Add this line at the top

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

    if (!url.includes('instagram.com')) {
      toast.error('Please enter a valid Instagram URL');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'instagram-content.mp4';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);

      toast.success('Download completed successfully!');
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Paste Instagram URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1"
            icon={<LinkIcon className="h-4 w-4 text-gray-400" />}
          />
          <Button
            onClick={handleDownload}
            disabled={loading}
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            {loading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Downloading...
              </span>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Download
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
