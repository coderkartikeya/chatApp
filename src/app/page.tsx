import Image from "next/image";
import Login from "./component/Login";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// z-10 text-white text-8xl
export default function Home() {
  return (    
    <main className="flex relative h-screen justify-center items-center flex-col gap-10">
    <div className="z-10 text-white text-8xl">
      <h1>Dost</h1>

    </div>
    <Login/>
    <Link href="/signin" className="border-2 z-10 text-white">
      <Button>Sign In</Button>
    </Link>
    <Image
      src="/bg_login.jpg" // Path to your image
      alt="Background Image" // Alt text for accessibility
      layout="fill" // Fill the container
      objectFit="cover" // Cover the container
      objectPosition="center" // Center the image
    />
    
    
  </main>

    
  );
}
