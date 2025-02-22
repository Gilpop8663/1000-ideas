import React from 'react';
import Image from 'next/image';
import { makeImageURL } from '@libs/client/utils';
import TextArea from '@components/textArea';

interface CommentInputProps {
  avatar: string;
}

export default function PreviewCommentInput({ avatar }: CommentInputProps) {
  return (
    <>
      <div className="grid grid-cols-10">
        <div className="col-span-1 mr-4 mt-4 cursor-pointer">
          <Image
            src={makeImageURL(avatar)}
            alt="profile"
            width={50}
            height={50}
            className="rounded-full"
          ></Image>
        </div>
        <div className="col-span-9 w-full select-none">
          <TextArea placeholder="이 프로젝트에 대해 어떻게 생각하십니까?"></TextArea>
        </div>
      </div>
    </>
  );
}
