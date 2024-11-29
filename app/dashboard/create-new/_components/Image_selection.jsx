"use client";
import Image from "next/image";
import React, { useState } from "react";

const Image_selection = ({selectedImage}) => {
  const [savedfile, setSavedfile] = useState(null);

  const onFileSelection = (e) => {
    console.log(e.target.files[0]);
    setSavedfile(e.target.files[0]);
    selectedImage(e.target.files[0])
  };
  return (
    <div>
      <label>Select Image of your room</label>
      <div className="mt-3 ">
        <label htmlFor="upload-image">
          <div className={`${savedfile?'p-0':'p-28'} border rounded-xl border-dotted flex justify-center cursor-pointer hover:shadow-lg border-primary ${savedfile?'bg-white':'bg-slate-200'} `}>
            {savedfile ? (
              <Image
                src={URL.createObjectURL(savedfile)}
                width={600}
                height={600}
                alt="Logo"
                className="h-[300px] w-[300px] object-cover"
              />
            ) : (
              <Image src="/upload2.png" width={70} height={70} alt="Logo" />
            )}
          </div>
        </label>
        <input
          type="file"
          accept="image/*"
          id="upload-image"
          style={{ display: "none" }}
          onChange={onFileSelection}
        />
      </div>
    </div>
  );
};

export default Image_selection;
