"use client";
import axios from "axios";
import StoryCard from "../component/StoryCard";
import StoryView from "../component/storyView";
import { useEffect, useState } from "react";

interface StoriesInterface {
  id: number;
  image: string;
  text: string;
}

export default function Home() {
  const [stories, setStories] = useState<StoriesInterface[]>([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(0);
  const [openStory, setOpenStory] = useState<Boolean>(false);

  const apiCall = async () => {
    const res = await axios.get("/api");
    const data = await res.data;
    setStories(data);
  };

  useEffect(() => {
    apiCall();
  }, []);

  const prevStory = () => {
    if (currentStoryIndex === 0) {
      return;
    }
    setCurrentStoryIndex((prev: number) => prev - 1);
  };

  const nextStory = () => {
    if (currentStoryIndex === stories.length - 1) {
      setOpenStory(false);
      return;
    }
    setCurrentStoryIndex((prev: number) => prev + 1);
  };

  return (
    <div className="relative bg-white h-screen max-w-[400px] w-full mx-auto">
      {openStory && (
        <StoryView
          stories={stories}
          setOpenStory={setOpenStory}
          nextStory={nextStory}
          prevStory={prevStory}
          currentStoryIndex={currentStoryIndex}
        />
      )}

      <div className="overflow-x-scroll no-scrollbar flex gap-2 px-2 py-2">
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            index={index}
            setCurrentStoryIndex={setCurrentStoryIndex}
            setOpenStory={setOpenStory}
            image={story.image}
            text={story.text}
          />
        ))}
      </div>
    </div>
  );
}
