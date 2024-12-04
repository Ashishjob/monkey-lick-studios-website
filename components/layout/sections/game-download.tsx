import React from 'react';
import { Download } from 'lucide-react';

const GameDownload = () => {
    return (
        <div className="flex justify-center items-center p-4">
            <a
                href="/stasis.zip"
                download
                className="group relative inline-flex items-center gap-3 bg-[#FED009] hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
                <span className="relative z-10 flex items-center gap-2">
                    <Download className="w-6 h-6 animate-bounce" />
                    Download Game
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
        </div>
    );
};

export default GameDownload;