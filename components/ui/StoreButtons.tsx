import Image from "next/image";

interface StoreButtonsProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

// Configuration centralisée des URLs des stores
const STORE_URLS = {
  appStore: "https://apps.apple.com/app/devlup",
  googlePlay: "https://play.google.com/store/apps/details?id=com.devlup",
};

// Mettre à true quand chaque app sera disponible
const APPLE_STORE_ENABLED = false;
const GOOGLE_PLAY_ENABLED = false;

const SIZE_CONFIG = {
  sm: { height: "h-8", width: 100, heightPx: 30 },
  md: { height: "h-9", width: 120, heightPx: 36 },
  lg: { height: "h-10", width: 135, heightPx: 40 },
};

export function StoreButtons({ size = "lg", className = "" }: StoreButtonsProps) {
  const sizeConfig = SIZE_CONFIG[size];

  return (
    <div className={`flex flex-row gap-3 ${className}`}>
      {/* App Store Button */}
      {APPLE_STORE_ENABLED ? (
        <a
          href={STORE_URLS.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/storeButtons/Download_on_the_App_Store_Badge_FR.svg"
            alt="Télécharger sur l'App Store"
            width={sizeConfig.width}
            height={sizeConfig.heightPx}
            className={`${sizeConfig.height} w-auto`}
          />
        </a>
      ) : (
        <span className="opacity-50 cursor-not-allowed" title="Bientôt disponible">
          <Image
            src="/storeButtons/Download_on_the_App_Store_Badge_FR.svg"
            alt="Télécharger sur l'App Store (Bientôt disponible)"
            width={sizeConfig.width}
            height={sizeConfig.heightPx}
            className={`${sizeConfig.height} w-auto`}
          />
        </span>
      )}

      {/* Google Play Button */}
      {GOOGLE_PLAY_ENABLED ? (
        <a
          href={STORE_URLS.googlePlay}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/storeButtons/GetItOnGooglePlay_Badge_Web_color_French.svg"
            alt="Disponible sur Google Play"
            width={sizeConfig.width}
            height={sizeConfig.heightPx}
            className={`${sizeConfig.height} w-auto`}
          />
        </a>
      ) : (
        <span className="opacity-50 cursor-not-allowed" title="Bientôt disponible">
          <Image
            src="/storeButtons/GetItOnGooglePlay_Badge_Web_color_French.svg"
            alt="Disponible sur Google Play (Bientôt disponible)"
            width={sizeConfig.width}
            height={sizeConfig.heightPx}
            className={`${sizeConfig.height} w-auto`}
          />
        </span>
      )}
    </div>
  );
}
