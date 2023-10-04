"use client";

import React, { useState } from "react";
import { notFound, useRouter } from "next/navigation";

export default function CreatePost() {
  const CLOUD_NAME = "kaimuljewel";
  const UPLOAD_PRESET = "my-uploads";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageUrl = await uploadImage();

    const submitData = { title, description, imageUrl };

    try {
      const res = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "content-type": "application/json",
        },
      });
      //console.log(res);
      if (res.ok) {
        console.log("Yeai!");
      } else {
        console.log("Oops! Something is wrong.");
      }
      router.push("/posts");
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setDescription("");
  };

  const uploadImage = async () => {
    if (!photo) return;

    const formData = new FormData();

    formData.append("file", photo);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      const imageUrl = data["secure_url"];

      return imageUrl;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>create post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="description"
          value={description}
          placeholder="Description..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="image">Upload Image</label>
        <input
          id="image"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => setPhoto(e.target.files[0])}
        />
        <button>Create</button>
      </form>
    </div>
  );
}
