import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ItemProps {
  title: string;
  id: number;
  likes: number;
  views: number;
  owner: string;
  avatar: string;
  userId: number;
  onClick: () => void;
}

export default function ProjectItem({
  title,
  id,
  likes,
  views,
  owner,
  avatar,
  userId,
  onClick,
}: ItemProps) {
  const [isTouch, setIsTouch] = useState(false);
  const onTouch = () => {
    setIsTouch((prev) => !prev);
  };
  return (
    <div>
      <div
        onClick={onClick}
        onMouseOver={onTouch}
        onMouseOut={onTouch}
        className="relative flex cursor-pointer flex-col"
      >
        <div className="h-64 w-full rounded-md bg-orange-400 hover:visible"></div>
        {isTouch && (
          <div className="absolute bottom-0 flex h-16 w-full items-center rounded-md bg-gradient-to-t from-black/30 to-gray-600/0 px-4">
            <span className="relative top-2 font-semibold text-white hover:underline">
              {title}
            </span>
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <div className="mt-2 flex items-center text-sm font-semibold text-gray-700">
          <Link href={`/profile/${userId}`}>
            <a className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-orange-500">
                <Image
                  className="rounded-full"
                  src={avatar}
                  height={50}
                  width={50}
                  alt="avatar"
                ></Image>
              </div>
              <span className="ml-1 hover:underline">{owner}</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            <span className="ml-1 text-xs font-semibold text-gray-500">
              {likes}
            </span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-1 text-xs font-semibold text-gray-500">
              {views}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
