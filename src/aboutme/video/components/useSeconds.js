import { useVideoConfig } from "remotion";

export function useSeconds() {
  const { fps } = useVideoConfig();
  return (seconds) => {
    return seconds * fps;
  };
}
