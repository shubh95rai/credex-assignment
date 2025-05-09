import Image from "next/image";
import { ModeToggle } from "../ModeToggle";

export default function Navbar() {
  return (
    <nav className="h-16 border-b shadow-md flex items-center justify-between px-6 fixed top-0 z-50 w-full backdrop-blur-lg">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <p className="text-2xl font-bold tracking-tight">Credex</p>
      </div>

      {/* <ModeToggle /> */}
    </nav>
  );
}
