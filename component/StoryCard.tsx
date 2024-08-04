type Props = {
  image: string;
  text: string;
  index: number;
  setCurrentStoryIndex: Function;
  setOpenStory: Function;
};

const StoryCard = ({
  image,
  text,
  index,
  setCurrentStoryIndex,
  setOpenStory,
}: Props) => {
  return (
    <div
      onClick={() => {
        setCurrentStoryIndex(index);
        setOpenStory(true);
      }}
      className="flex flex-col text-black items-center"
    >
      <div className="min-w-24 w-24 h-24 relative rounded-full overflow-hidden cursor-pointer ">
        <div className="w-full h-full p-[3px] borderColor rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover border-4 border-white rounded-full"
            src={image}
            alt={text}
          />
        </div>
      </div>
      <div className="text-sm font-light">{text}</div>
    </div>
  );
};

export default StoryCard;
