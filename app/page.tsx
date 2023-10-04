"use client";

//import ImagePreview from "@/components/ImagePreview";
//import ImageUpload from "@/components/ImageUpload";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");
  return (
    <div className="w-full h-screen my-6">
      <div className="border-solid border-2 border-red-600 px-2 py-1 w-max m-auto">
        <CldUploadButton
          onUpload={(result: UploadResult) => {
            setImageId(result.info.public_id);
          }}
          uploadPreset="my-uploads"
        />
      </div>
      {imageId && (
        <CldImage
          width="460"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
          priority
        />
      )}
    </div>
  );
}
