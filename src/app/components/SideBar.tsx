"use client";

import Image from "next/image";
import { useState } from "react";
import UploadImage from "./UploadImage";

export default function SideBar() {
  const [showUploadImage, setShowUploadImage] = useState(false);

  return (
    <>
      <div className="w-[230px] h-screen bg-black border-r border-r-gray-800">
        <ul className="flex items-center flex-col gap-5">
          <li>
            <Image
              src="/images/auth/instagramTitle.png"
              alt="Instagram"
              width={175}
              height={51}
              className="invert my-10"
            />
          </li>
          <a
            href=""
            className="flex flex-row items-center gap-3 p-3 text-white w-[220px] h-[48px] rounded-lg hover:bg-gray-800"
          >
            <svg
              aria-label="Découvrir"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <polygon
                fill="none"
                points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
              <polygon
                fill-rule="evenodd"
                points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
              ></polygon>
              <circle
                cx="12.001"
                cy="12.005"
                fill="none"
                r="10.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
            </svg>
            Découvrir
          </a>
          <li
            className="flex flex-row items-center gap-3 p-3 text-white w-[220px] h-[48px] rounded-lg hover:bg-gray-800 cursor-pointer"
            onClick={() => setShowUploadImage(true)}
          >
            <svg
              aria-label="Nouvelle publication"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="6.545"
                x2="17.455"
                y1="12.001"
                y2="12.001"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="12.003"
                x2="12.003"
                y1="6.545"
                y2="17.455"
              ></line>
            </svg>
            Créer
          </li>
        </ul>
      </div>

      {showUploadImage && (
        <UploadImage
          showUploadImage={showUploadImage}
          setShowUploadImage={setShowUploadImage}
        />
      )}
    </>
  );
}
