import Image from "next/image";

interface DiagramProps {
  src: string;
  alt: string;
}

export default function Diagram({ src, alt }: DiagramProps) {
  return (
    <div className="glass-card overflow-hidden my-8">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="w-full h-auto"
      />
    </div>
  );
}
