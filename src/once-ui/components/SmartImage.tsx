"use client";

import React, { CSSProperties, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom"; // Portal eklendi
import Image from "next/image";

import { Flex, IconButton, Skeleton } from ".";

export interface SmartImageProps extends React.ComponentProps<typeof Flex> {
  aspectRatio?: string;
  height?: number;
  alt?: string;
  isLoading?: boolean;
  objectFit?: CSSProperties["objectFit"];
  enlarge?: boolean;
  src: string;
  unoptimized?: boolean;
  sizes?: string;
  priority?: boolean;
}

const SmartImage: React.FC<SmartImageProps> = ({
  aspectRatio,
  height,
  alt = "",
  isLoading = false,
  objectFit = "cover",
  enlarge = false,
  src,
  unoptimized = false,
  priority,
  sizes = "100vw",
  ...rest
}) => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [mounted, setMounted] = useState(false); // Portal için mount kontrolü
  const imageRef = useRef<HTMLDivElement>(null);

  // Hydration hatasını önlemek için mount kontrolü
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    if (enlarge) {
      setIsEnlarged(!isEnlarged);
    }
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isEnlarged) {
        setIsEnlarged(false);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (isEnlarged) {
        setIsEnlarged(false);
      }
    };

    if (isEnlarged) {
      document.addEventListener("keydown", handleEscape);
      window.addEventListener("wheel", handleWheel, { passive: true });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "auto";
    };
  }, [isEnlarged]);

  // Thumbnail animasyonu (Bulanıklaşsa da sorun değil, çünkü Portal üstünü örtecek)
  const calculateTransform = () => {
    if (!imageRef.current) return {};

    const rect = imageRef.current.getBoundingClientRect();
    const scaleX = window.innerWidth / rect.width;
    const scaleY = window.innerHeight / rect.height;
    const scale = Math.min(scaleX, scaleY) * 0.9;

    const translateX = (window.innerWidth - rect.width) / 2 - rect.left;
    const translateY = (window.innerHeight - rect.height) / 2 - rect.top;

    return {
      transform: isEnlarged
        ? `translate(${translateX}px, ${translateY}px) scale(${scale})`
        : "translate(0, 0) scale(1)",
      transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)", // Animasyon süresi
      zIndex: isEnlarged ? 1 : 0, // Düşük Z-index, Portal en üste gelecek
      opacity: isEnlarged ? 0 : 1, // Büyüyünce alttaki bulanık olanı gizle
    };
  };

  const isYouTubeVideo = (url: string) => {
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    return youtubeRegex.test(url);
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match
      ? `https://www.youtube.com/embed/${match[1]}?controls=0&rel=0&modestbranding=1`
      : "";
  };

  const isVideo = src?.endsWith(".mp4");
  const isYouTube = isYouTubeVideo(src);

  // Portal İçeriği: Sayfanın en tepesine render edilen yüksek çözünürlüklü katman
  const overlayContent = (
    <Flex
      horizontal="center"
      vertical="center"
      position="fixed"
      background="overlay"
      onClick={handleClick}
      top="0"
      left="0"
      zIndex={9999} // Grid'den bağımsız en üst katman
      opacity={isEnlarged ? 100 : 0}
      cursor="interactive"
      transition="macro-medium"
      style={{
        backdropFilter: "blur(10px)", // Arka planı hafif flu yap
        width: "100vw",
        height: "100vh",
        pointerEvents: isEnlarged ? "all" : "none",
        visibility: isEnlarged ? "visible" : "hidden",
      }}
    >
      <Flex
        style={{
          width: "90vw",
          height: "90vh",
          position: "relative",
        }}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {isVideo ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            quality={100} // Maksimum kalite
            priority={true} // Hemen yükle
            unoptimized={true} // Next.js sıkıştırmasını tamamen kapat (Test için)
            style={{
              objectFit: "contain",
            }}
          />
        )}
      </Flex>
    </Flex>
  );

  return (
    <>
      {/* Sayfa içindeki normal Thumbnail */}
      <Flex
        ref={imageRef}
        fillWidth
        overflow="hidden"
        zIndex={0}
        cursor={enlarge ? "interactive" : ""}
        style={{
          outline: "none",
          isolation: "isolate",
          height: aspectRatio ? "" : height ? `${height}rem` : "100%",
          aspectRatio,
          borderRadius: isEnlarged ? "0" : undefined,
          ...calculateTransform(),
        }}
        onClick={handleClick}
        {...rest}
      >
        {isLoading && <Skeleton shape="block" />}
        {!isLoading && isVideo && (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: objectFit,
            }}
          />
        )}
        {!isLoading && isYouTube && (
          <iframe
            width="100%"
            height="100%"
            src={getYouTubeEmbedUrl(src)}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              objectFit: objectFit,
            }}
          />
        )}
        {!isLoading && !isVideo && !isYouTube && (
          <Image
            src={src}
            alt={alt}
            priority={priority}
            sizes={sizes}
            unoptimized={unoptimized}
            fill
            style={{
              objectFit: objectFit,
            }}
          />
        )}
      </Flex>

      {/* Portal ile body'ye taşınan Yüksek Kaliteli Overlay */}
      {mounted && enlarge && createPortal(overlayContent, document.body)}
    </>
  );
};

SmartImage.displayName = "SmartImage";

export { SmartImage };
