import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/Design.png"
        alt="Logo"
        // className="dark:invert"
        width={400}
        height={400}
        priority
      />
      <Link href={"/more"} className="text-blue-600 underline">
        Click Here to learn more
      </Link>
      <Link href={"/detailsform"} className="text-blue-600 underline">
        Click Here to enter details
      </Link>
      <div className="flex items-center justify-evenly w-[60%] mt-10">
        <Link href={"/ssg-user"} className="text-blue-600 underline">
          Static Site Generation
        </Link>
        <Link href={"/dsg-user"} className="text-blue-600 underline">
          Dynamic Site Generation
        </Link>
      </div>
    </main>
  );
}
