'use client' 

import { toast } from 'sonner';
import { Button } from '../ui/button'
import { FileText } from 'lucide-react'

const DownloadApplication = () => {

    const handleDownloadApplicationForm = async () => {
        const fileUrl = '/application.docx';
        
        try {
          const response = await fetch(fileUrl);
          const blob = await response.blob();
          
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'Application_Form.docx';
          
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error) {
          console.error('Download failed:', error);
          toast.error('Failed to download the application form. Please try again.');
        }
      };

  return (
    <Button
        onClick={handleDownloadApplicationForm}
        className="bg-[#002244] hover:bg-[#0a2351] text-white px-6 py-2 rounded-md"
      >
        <FileText className="mr-2 h-5 w-5" />
        Download Application Form
      </Button>
  )
}

export default DownloadApplication