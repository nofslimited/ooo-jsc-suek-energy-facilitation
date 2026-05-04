import { Play, Image as ImageIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import logoImg from "../../imports/c5803775-2a71-4c22-8c68-844632b07152-1.jpeg";

interface GalleryItem {
  type: "image" | "video";
  src: string;
  thumbnail: string;
  title: string;
  description: string;
}

interface PhotoGalleryProps {
  items: GalleryItem[];
  title?: string;
  subtitle?: string;
}

export function PhotoGallery({ items, title, subtitle }: PhotoGalleryProps) {
  const { t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!selectedItem) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedItem]);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-0.5 w-10 bg-amber-500" />
              <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-600">
                {subtitle || "Gallery"}
              </span>
              <div className="h-0.5 w-10 bg-amber-500" />
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              {title}
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <button
              key={`${item.title}-${idx}`}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-video overflow-hidden rounded-3xl bg-slate-200 text-left shadow-xl shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />

              <div className="absolute left-4 top-4 z-10 rounded-xl bg-white/95 p-2 shadow-lg backdrop-blur">
                <img
                  src={logoImg}
                  alt="OOO JSC SUEK Energy Facilitation"
                  loading="lazy"
                  decoding="async"
                  className="h-7 w-auto"
                />
              </div>

              <div className="absolute right-4 top-4 z-10 rounded-full bg-slate-950/80 px-3 py-1.5 backdrop-blur">
                <div className="flex items-center gap-1.5">
                  {item.type === "video" ? (
                    <Play className="h-3.5 w-3.5 text-amber-400" />
                  ) : (
                    <ImageIcon className="h-3.5 w-3.5 text-amber-400" />
                  )}
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-white">
                    {item.type}
                  </span>
                </div>
              </div>

              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 shadow-2xl shadow-amber-500/30 transition group-hover:scale-110">
                    <Play className="ml-1 h-8 w-8 text-slate-950" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="mb-2 text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="line-clamp-2 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {selectedItem && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute -top-14 right-0 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                <X className="h-4 w-4" />
                {t("common.close")}
              </button>

              <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
                {selectedItem.type === "video" ? (
                  <div className="relative aspect-video bg-slate-950">
                    <img
                      src={selectedItem.thumbnail}
                      alt={selectedItem.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover opacity-35"
                    />

                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="max-w-md rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-center backdrop-blur">
                        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500">
                          <Play className="ml-1 h-10 w-10 text-slate-950" />
                        </div>

                        <p className="mb-3 text-xl font-black text-white">
                          {selectedItem.title}
                        </p>

                        <p className="text-sm leading-6 text-slate-300">
                          Professional OOO JSC SUEK Energy Facilitation media
                          preview.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    loading="lazy"
                    decoding="async"
                    className="max-h-[75vh] w-full object-cover"
                  />
                )}

                <div className="p-7">
                  <h3 className="mb-2 text-2xl font-black text-slate-950">
                    {selectedItem.title}
                  </h3>
                  <p className="leading-7 text-slate-600">
                    {selectedItem.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}