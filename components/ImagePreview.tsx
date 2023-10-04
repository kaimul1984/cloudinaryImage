"use client";
import { CldImage } from "next-cloudinary";

export default function ImagePreview() {
  return (
    <div>
      <CldImage
        width="960"
        height="600"
        src="xnszdorut3es2r1fjqaq"
        sizes="100vw"
        alt="Description of my image"
      />
    </div>
  );
}
