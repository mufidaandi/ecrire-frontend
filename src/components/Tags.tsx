type TagsProps = {
  tag: string;
};

const Tags = (props: TagsProps) => {
  return (
    <div className="tags text-xs flex flex-row items-center" role="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"  
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
        />
      </svg>
        <div className="tag-name">
            {props.tag}
        </div>
      
    </div>
  );
};

export default Tags;
