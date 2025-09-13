'use client';
import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  startVolume?: number;
  loop?: boolean;
};

export default function AudioPlayer({ src, startVolume = 0.35, loop = true }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = loop;
    audio.volume = startVolume;
    audioRef.current = audio;

    // Try to autoplay
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log("Autoplay prevented: ", error);
        // We'll need user interaction to play
        const handleUserInteraction = async () => {
          try {
            await audio.play();
            setIsPlaying(true);
            // Remove the event listeners once we've successfully started playing
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
          } catch (e) {
            console.log("Play failed: ", e);
          }
        };

        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('touchstart', handleUserInteraction);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      audioRef.current = null;
    };
  }, [src, loop, startVolume]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMute}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-colors"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {/* Sound icon when not muted */}
        {!isMuted && isPlaying && (
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 8v8l-4-4H6a1 1 0 01-1-1v-2a1 1 0 011-1h2l4-4z" />
          </svg>
        )}
        {/* Muted icon */}
        {isMuted && isPlaying && (
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        )}
      </button>
    </div>
  );
}