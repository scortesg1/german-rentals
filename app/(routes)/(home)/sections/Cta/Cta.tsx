import Reveal from "@/components/shared/Reveal/Reveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Cta() {
  return (
    <div className="p-6 lg:px-20 my-6 lg:my-12 2xl:my-32 max-w-7xl mx-auto">
      <div className="bg-[url('/images/backgroundImage.svg')] bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-20 lg:pb-40 2xl:p-32 relative">
        <div className="lg:flex gap-x-6">
          <div>
            <h3 className="text-3xl md:text-5xl text-teal-500 font-bold">Drive your dream car Today</h3>
            <p className="text-white text-sm lg:text-xl my-5">
              Register and explore the world of premium cars
            </p>
            <Link href="/sign-in">
              <Button variant="default" size="lg">
                Sign up here
              </Button>
            </Link>
          </div>
          <Reveal className="lg:absolute lg:-right-10 self-center pt-10 lg:pt-0 lg:bottom-10" position="bottom">
            <Image
              src="/images/porsche.avif"
              alt="Car Drive"
              width={550}
              height={250}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}