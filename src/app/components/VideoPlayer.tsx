import { Play, Clock, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import logoImg from "../../imports/c5803775-2a71-4c22-8c68-844632b07152-1.jpeg";

interface VideoPlayerProps {
  thumbnail: string;
  title: string;
  duration?: string;
  className?: string;
}

export function VideoPlayer({
  thumbnail,
  title,
  duration = "3:45",
  className = "",
}: VideoPlayerProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-slate-950 shadow-xl shadow-slate-300/40 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${className}`}
    >
      <button
        type="button"
        onClick={() => setIsPreviewOpen(true)}
        className="relative block w-full text-left"
      >
        <div className="relative aspect-video">
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />

          <div className="absolute left-4 top-4 rounded-xl bg-white/95 p-2 shadow-lg backdrop-blur">
            <img
              src={logoImg}
              alt="OOO JSC SUEK Energy Facilitation"
              loading="lazy"
              decoding="async"
              className="h-8 w-auto"
            />
          </div>

          <div className="absolute right-4 top-4 rounded-full bg-slate-950/80 px-3 py-1.5 backdrop-blur">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-amber-400" />
              <span className="text-xs font-bold text-white">{duration}</span>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 shadow-2xl shadow-amber-500/30 transition group-hover:scale-110">
              <Play className="ml-1.5 h-10 w-10 text-slate-950" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-amber-300 backdrop-blur">
              <ImageIcon className="h-3.5 w-3.5" />
              Media Preview
            </div>
            <h3 className="text-lg font-black text-white">{title}</h3>
            <p className="mt-1 text-sm text-slate-300">
              Official corporate energy operations content
            </p>
          </div>
        </div>
      </button>

      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-3xl bg-slate-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-video">
              <img
                src={thumbnail}
                alt={title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-35"
              />

              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="max-w-md rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-center backdrop-blur">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500">
                    <Play className="ml-1 h-10 w-10 text-slate-950" />
                  </div>

                  <h3 className="mb-3 text-2xl font-black text-white">
                    {title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-300">
                    Video preview placeholder. A real hosted video can be added
                    later using YouTube, Vimeo, or your own backend media
                    storage.
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsPreviewOpen(false)}
                    className="mt-6 rounded-xl bg-amber-500 px-7 py-3 text-sm font-black uppercase tracking-[0.14em] text-slate-950 transition hover:bg-amber-400"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
                OOO JSC SUEK Energy Facilitation
              </p>
              <h4 className="mt-2 text-xl font-black text-white">{title}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}