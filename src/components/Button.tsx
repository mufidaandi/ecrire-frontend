type ButtonProps = {
  name: string
  className: string
};

const Button = (props: ButtonProps) => {
  return (
    <button
      type="submit"
      className= {`${props.className} text-white flex flex-row justify-evenly mr-0 bg-dark-brown hover:bg-brown-secondary focus:ring-2 focus:ring-dark-brown font-medium rounded-xl text-sm px-4 py-2 dark:bg-dark-brown dark:hover:bg-brown-secondary dark:focus:ring-dark-brown`}
    >
      {props.name}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 ml-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
};

export default Button;
