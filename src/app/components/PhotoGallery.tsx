import { Play, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
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

  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-7 h-0.5 bg-amber-500"></div>
              <span className="text-[10px] font-mono text-amber-600 uppercase tracking-[0.2em]">
                {subtitle || "Gallery"}
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900">{title}</h2>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="group relative aspect-video bg-slate-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1.5 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <img
                  src={logoImg}
                  alt="OOO JSC SUEK Energy Facilitation"
                  className="h-6 w-auto"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm">{item.description}</p>
                  <p className="text-slate-400 text-xs mt-1">
                    © OOO JSC SUEK Energy Facilitation
                  </p>
                </div>
              </div>

              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                    <Play className="w-8 h-8 text-slate-950 ml-1" />
                  </div>
                </div>
              )}

              <div className="absolute top-3 right-3">
                <div className="bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
                  {item.type === "video" ? (
                    <Play className="w-3 h-3 text-white" />
                  ) : (
                    <ImageIcon className="w-3 h-3 text-white" />
                  )}
                  <span className="text-white text-xs font-mono uppercase">
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="max-w-6xl w-full"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                {selectedItem.type === "video" ? (
                  <div className="aspect-video bg-slate-900 relative">
                    <img
                      src={selectedItem.thumbnail}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8 bg-slate-900/80 backdrop-blur-sm rounded-2xl">
                        <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Play className="w-10 h-10 text-slate-950 ml-1" />
                        </div>
                        <p className="text-white text-lg font-semibold mb-2">
                          {selectedItem.title}
                        </p>
                        <p className="text-slate-300 text-sm mb-4">
                          Professional OOO JSC SUEK Energy Facilitation media
                          content
                        </p>
                        <p className="text-amber-400 text-xs font-mono">
                          Official company media preview
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="w-full"
                  />
                )}

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {selectedItem.title}
                  </h3>
                  <p className="text-slate-600">
                    {selectedItem.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="mt-6 mx-auto block bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                {t("common.close")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}