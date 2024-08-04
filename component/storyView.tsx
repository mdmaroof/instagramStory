"use client";

import { MouseEventHandler, useCallback, useEffect } from "react";

type Props = {
  stories: Array<{
    id: number;
    image: string;
    text: string;
  }>;
  setOpenStory: Function;
  prevStory: MouseEventHandler<HTMLDivElement>;
  nextStory: MouseEventHandler<HTMLDivElement>;
  currentStoryIndex: number;
};

const StoryView = ({
  stories,
  setOpenStory,
  prevStory,
  nextStory,
  currentStoryIndex,
}:Props) => {
  useEffect(() => {
    let timer;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(nextStory, 5000);
    return () => clearTimeout(timer);
  }, [currentStoryIndex]);

  const ProgressBar = useCallback(() => {
    return (
      <div className="w-[99%] left-[0.5%] h-[3px] absolute top-1 bg-white/55">
        <div className={`w-[0] bg-white h-[3px] progress`} />
      </div>
    );
  }, [currentStoryIndex]);

  return (
    <div className="z-10 absolute top-0 left-0 w-full h-full">
      <div className="flex items-center text-[16px] z-20 justify-between px-5 py-3 absolute w-full">
        <div>{stories[currentStoryIndex].text || null}</div>
        <div
          onClick={() => setOpenStory(false)}
          className="cursor-pointer text-[24px]"
        >
          X
        </div>
      </div>
      <div className="absolute h-full flex top-0 left-0 w-full">
        <div onClick={prevStory} className="bg-transparent flex-1" />
        <div onClick={nextStory} className="bg-transparent flex-1" />
      </div>
      <img
        src={stories[currentStoryIndex].image || null}
        alt={stories[currentStoryIndex].text || null}
        className="h-full w-full object-cover"
      />
      <ProgressBar />
    </div>
  );
};

export default StoryView;
