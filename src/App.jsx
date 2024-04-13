import BounceButton from "./components/BounceButton";
import DeleteButton from "./components/DeleteButton";
import IconButton from "./components/IconButton";
import NinjaButton from "./components/NinjaButton";
import { IoBulbSharp } from "react-icons/io5";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      <NinjaButton />
      <BounceButton />
      <IconButton icon={<IoBulbSharp />} />
      <DeleteButton />
    </div>
  );
}

export default App;
