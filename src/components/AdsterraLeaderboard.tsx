import React from "react";

interface AdsterraLeaderboardProps {
  className?: string;
}

export default function AdsterraLeaderboard({ className = "" }: AdsterraLeaderboardProps) {
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
            'key' : '7003428b1c00ebe4a05c50fd380cb88d',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
          };
        </script>
        <script type="text/javascript" src="https://www.highperformanceformat.com/7003428b1c00ebe4a05c50fd380cb88d/invoke.js"></script>
      </body>
    </html>
  `;

  return (
    <div className={`w-full flex flex-col items-center my-6 px-4 ${className}`}>
      <span className="text-[9px] font-mono tracking-widest text-[#1a237e]/50 uppercase font-bold mb-1">
        Patrocinado
      </span>
      <div className="w-full max-w-[744px] overflow-x-auto overflow-y-hidden flex justify-center rounded-xl shadow-sm border border-slate-200 bg-white p-2">
        <div className="min-w-[728px]">
          <iframe
            srcDoc={adHtml}
            width="728"
            height="90"
            scrolling="no"
            frameBorder="0"
            className="w-[728px] h-[90px] border-0 overflow-hidden"
            title="Adsterra Leaderboard Banner"
          />
        </div>
      </div>
    </div>
  );
}
