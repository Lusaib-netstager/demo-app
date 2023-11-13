import Image from "next/image";
import Link from "next/link";

export default function MoreDetails() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/"} className="text-blue-600 underline mb-10">Click Here to Go back</Link>
      <Image
        src="/alone.jpg"
        alt="Lone Guy"
        className="object-fill dark:invert"
        width={400}
        height={400}
        priority
      />
    </div>
  );
}
