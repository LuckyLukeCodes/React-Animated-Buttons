import React from "react";

const IconButton = ({ icon, btnType }) => {
  let styling =
    "shadow-[inset_0_0_0_1px_#f4b60b] hover:shadow-[inset_0_0_0_40px_#f4b60b]";

  switch (btnType) {
    case "profile":
      styling =
        "after:shadow-[inset_0_0_0_1px_#16A085] before:-ml-[100%] hover:shadow-[inset_0_0_0_40px_#16A085] before:hover:ml-0";
      break;
  }

  return (
    <a
      href="#"
      className={`flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400/35 text-3xl text-white transition duration-300 ease-in ${styling} `}
    >
      <div></div>
      {icon}
    </a>
  );
};

export default IconButton;
