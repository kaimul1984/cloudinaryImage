"use client";
import React from "react";
import { CldUploadButton } from "next-cloudinary";

export default function ImageUpload() {
  return (
    <div className="border-solid border-2 border-red-600 px-2 py-1 w-max m-auto">
      <CldUploadButton uploadPreset="my-uploads" />
    </div>
  );
}
