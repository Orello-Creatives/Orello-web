import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import ambientTrack from "../assets/audio/ambient-loop.mp3";

const STORAGE_KEY = "orello-ambient-audio-on";

// Sitewide calming background loop. Browsers block unmuted autoplay anyway,
// and forcing sound on visitors is poor practice regardless, so this starts
// off and only plays once someone opts in via the toggle. The choice is
// remembered per-browser (not critical state, so a failed read/write just
// falls back to "off" silently).
export default function AmbientAudioPlayer() {
  const audioRef = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    try {
      setOn(localStorage.getItem(STORAGE_KEY) === "true");
    } catch {
      // ignore, default stays off
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (on) {
      audio.volume = 0.35;
      audio.play().catch(() => {
        // Autoplay can still be blocked on some browsers until a user
        // gesture occurs elsewhere on the page; the toggle click itself
        // counts as that gesture, so this mainly guards edge cases.
        setOn(false);
      });
    } else {
      audio.pause();
    }
  }, [on]);

  const toggle = () => {
    setOn((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, String(next));
      } catch {
        // per-viewer convenience only, fine to drop
      }
      return next;
    });
  };

  return (
    <>
      <audio ref={audioRef} src={ambientTrack} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-label={on ? "Mute background sound" : "Play calming background sound"}
        aria-pressed={on}
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-[#4b433b] text-[#f7af19] shadow-lg hover:bg-[#3a332c] transition-colors cursor-pointer"
      >
        {on ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
    </>
  );
}
