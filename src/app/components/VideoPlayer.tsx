import { Play, Volume2, VolumeX, Maximize, Clock } from "lucide-react";
import { useState } from "react";
import logoImg from "../../imports/c5803775-2a71-4c22-8c68-844632b07152-1.jpeg";

interface VideoPlayerProps {
  thumbnail: string;
  title: string;
  duration?: string;
  className?: string;
}

export function VideoPlayer({ thumbnail, title, duration = "3:45", className = "" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className={`relative bg-slate-950 rounded-xl overflow-hidden group ${className}`}>
      {!isPlaying ? (
        <div className="relative cursor-pointer" onClick={() => setIsPlaying(true)}>
          <div className="aspect-video relative">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

            {/* OOO JSC SUEK Watermark */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
              <img src={logoImg} alt="OOO JSC SUEK" className="h-8 w-auto" />
            </div>

            {/* Duration Badge */}
            <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-white" />
                <span className="text-white text-sm font-mono font-semibold">{duration}</span>
              </div>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all shadow-2xl">
                <Play className="w-10 h-10 text-slate-950 ml-1.5" />
              </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-bold text-lg">{title}</h3>
              <p className="text-slate-300 text-sm mt-1">Official OOO JSC SUEK Video</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="aspect-video bg-slate-950 relative">
          {/* Video Player Interface */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white text-lg font-semibold mb-2">Loading Video...</p>
              <p className="text-slate-400 text-sm">OOO JSC SUEK Official Content</p>
            </div>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/95 to-transparent p-4">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex-1 h-1 bg-slate-700 rounded-full">
                <div className="h-full w-1/3 bg-amber-500 rounded-full"></div>
              </div>
              <span className="text-white text-sm font-mono">1:15 / {duration}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="text-white hover:text-amber-500 transition-colors">
                  <Play className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:text-amber-500 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <span className="text-white text-sm">{title}</span>
              </div>
              <button className="text-white hover:text-amber-500 transition-colors">
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Branding Watermark */}
          <div className="absolute top-4 left-4 opacity-80 bg-white/95 backdrop-blur-sm px-2 py-1 rounded">
            <img src={logoImg} alt="OOO JSC SUEK" className="h-6 w-auto" />
          </div>
        </div>
      )}
    </div>
  );
}
