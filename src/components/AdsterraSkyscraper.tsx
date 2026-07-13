import React from "react";

interface AdsterraSkyscraperProps {
  className?: string;
}

export default function AdsterraSkyscraper({ className = "" }: AdsterraSkyscraperProps) {
  const adHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { 
            margin: 0; 
            padding: 0; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            background: transparent; 
            overflow: hidden;
          }
        </style>
      </head>
      <body>
        <script type="text/javascript">
          atOptions = {
            'key' : '9a1ee3e3716471a1d4d22ce21642d878',
            'format' : 'iframe',
            'height' : 600,
            'width' : 160,
            'params' : {}
          };
        </script>
        <script type="text/javascript" src="https://www.highperformanceformat.com/9a1ee3e3716471a1d4d22ce21642d878/invoke.js"></script>
      </body>
    </html>
  `;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="text-[9px] font-mono tracking-widest text-[#1a237e]/50 uppercase font-bold mb-1">
        Patrocinado
      </span>
      <iframe
        srcDoc={adHtml}
        width="160"
        height="600"
        scrolling="no"
        frameBorder="0"
        className="w-[160px] h-[600px] border-0 overflow-hidden rounded-xl shadow-lg bg-white"
        title="Adsterra Skyscraper Banner"
      />
    </div>
  );
}
