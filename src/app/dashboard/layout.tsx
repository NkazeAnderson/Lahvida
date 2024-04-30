import Image from "next/image";
import NavItems from "./components/navItems";
import NavSection from "./components/navSection";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-screen h-screen bg-white">
      <div className="flex w-full h-full">
        <div className="w-2/12 bg-background-gray px-[50px] py-[70px] border-r-2 border-border-gray">
          <div className="flex flex-col justify-between h-full">
            <NavSection />
          </div>
        </div>
        <div className="w-10/12">
          <div className=" flex space-x-4 items-center justify-end w-full bg-light-gray-background py-3 px-5">
            <p className="small text-primary">Anderson</p>
            <Image
              className="rounded-full object-cover"
              src={"/profilePic.jpg"}
              alt="Profile Pic"
              width={50}
              height={50}
            />
          </div>
          <div className="h-full w-full">{children}</div>
        </div>
      </div>
    </main>
  );
}
