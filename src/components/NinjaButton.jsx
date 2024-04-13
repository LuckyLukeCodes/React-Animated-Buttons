const NinjaButton = () => {
  return (
    <a
      href="#"
      className="group relative overflow-hidden rounded-lg border-2 border-slate-500 px-10 py-5 text-[0.68rem] font-semibold tracking-[0.3rem]"
    >
      <div className="relative top-0 h-[7px] overflow-hidden group-hover:-top-[5px]">
        <span className="uppercase">Hover Over Me</span>
      </div>
      <div className="absolute top-4 -z-10 flex w-12 -translate-x-16 items-center transition duration-700 ease-linear group-hover:translate-x-[9.75rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 animate-spin text-transparent group-hover:text-slate-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      </div>
      <div className="relative bottom-0 h-[7px] overflow-hidden group-hover:-bottom-[5px]">
        <div className="before:absolute before:-left-12 before:top-0 before:h-1 before:w-full before:origin-right before:scale-x-0 before:bg-transparent before:transition-transform before:duration-1000 group-hover:before:origin-left group-hover:before:scale-x-150 group-hover:before:bg-red-600"></div>
        <span className="absolute -top-[6px] left-0 uppercase">
          Hover Over Me
        </span>
      </div>
    </a>
  );
};

export default NinjaButton;
