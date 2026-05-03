import { Play } from "lucide-react";

interface VideoShowcaseProps {
  thumbnail: string;
  title: string;
  description: string;
  duration?: string;
}

export function VideoShowcase({ thumbnail, title, description, duration = "3:45" }: VideoShowcaseProps) {
  return (
    <div className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group cursor-pointer">
            <div className="aspect-video rounded-2xl overflow-hidden relative">
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all shadow-2xl">
                  <Play className="w-10 h-10 text-slate-950 ml-1.5" />
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white text-sm font-mono">{duration}</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full"></div>
          </div>

          <div className="text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-amber-500"></div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.2em]">
                Company Overview
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-6">{title}</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">{description}</p>

            <div className="grid grid-cols-3 gap-6 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">28+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center border-l border-r border-white/20">
                <div className="text-3xl font-bold text-amber-400 mb-1">850+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">85</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Regions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
