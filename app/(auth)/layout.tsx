import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[url('/auth/i8.jpg')] bg-center bg-cover h-screen flex items-center justify-center">
      <div className="flex flex-col gap-6 items-center">
        <a href="/">
          <Image
            src="
              /logo.svg"
            alt="BMW logo"
            height={100}
            width={100}
          />
        </a>
        {children}
      </div>
    </div>
  );
}
