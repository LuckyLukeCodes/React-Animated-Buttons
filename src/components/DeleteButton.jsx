import { MdDelete } from "react-icons/md";

const DeleteButton = () => {
  return (
    <a
      href="#"
      className="group flex h-16 w-48 items-center justify-center overflow-hidden rounded-xl bg-red-600 shadow-xl"
    >
      <div className="flex h-full w-3/4 items-center justify-center bg-red-600 text-white transition-all duration-700 ease-in-out group-hover:w-0">
        <span className="text-lg tracking-wide">Delete</span>
      </div>
      <div
        className="flex h-3/4 w-1/4 items-center justify-center border-l-2 border-slate-950/10 bg-red-600 text-xl 
      text-white transition-all duration-700 ease-in-out group-hover:w-full group-hover:border-none group-hover:text-3xl"
      >
        <MdDelete />
      </div>
    </a>
  );
};

export default DeleteButton;
