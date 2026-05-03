import logoImg from "../../imports/c5803775-2a71-4c22-8c68-844632b07152-1.jpeg";

interface BrandedImageProps {
  src: string;
  alt: string;
  className?: string;
  showBranding?: boolean;
  brandPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
}

export function BrandedImage({
  src,
  alt,
  className = "",
  showBranding = true,
  brandPosition = "top-right"
}: BrandedImageProps) {
  const positionClasses = {
    "top-left": "top-3 left-3",
    "top-right": "top-3 right-3",
    "bottom-left": "bottom-3 left-3",
    "bottom-right": "bottom-3 right-3",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div className={`relative ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      {showBranding && (
        <>
          <div className={`absolute ${positionClasses[brandPosition]} bg-white/95 backdrop-blur-sm px-2 py-1.5 rounded-lg shadow-lg z-10`}>
            <img src={logoImg} alt="OOO JSC SUEK" className="h-8 w-auto" />
          </div>
          {/* Bottom branding bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent p-3">
            <img src={logoImg} alt="OOO JSC SUEK" className="h-6 w-auto opacity-90" />
          </div>
        </>
      )}
    </div>
  );
}
