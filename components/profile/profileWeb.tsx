import NextButton from "@components/upload/nextButton";
import React, { useState } from "react";

interface ProfileWebProps {
  name: string;
  logo: string;
}

export default function ProfileWeb({ name, logo }: ProfileWebProps) {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-between border-b">
      <div className="flex items-center py-4 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-6 h-5 w-5 cursor-grab"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d={logo} />
        </svg>
        <span className="ml-2 text-sm font-semibold text-gray-800">{name}</span>
      </div>
      {isOpen ? (
        <div className="flex items-center space-x-4">
          <input
            className="rounded-sm border border-gray-400 px-2 py-1 text-sm placeholder:text-sm hover:border-gray-800 focus:border-blue-600 focus:outline-none"
            type="text"
            placeholder="사용자 이름 입력"
          ></input>
          <span className="cursor-pointer text-xs text-blue-600">제출</span>
          <svg
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      ) : (
        <div className="w-14">
          <NextButton
            onClick={onClick}
            size="xs"
            color="blue"
            label="링크"
          ></NextButton>
        </div>
      )}
    </div>
  );
}
