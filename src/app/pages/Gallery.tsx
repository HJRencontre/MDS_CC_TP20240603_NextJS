import Image from "next/image";
import SideBar from "../components/SideBar";

export default function Gallery() {
  return (
    <div className="min-h-full h-auto w-full bg-black">
      <SideBar />
      <div className="absolute top-0 md:left-[230px] left-14 w-calc2 md:w-calc min-h-full h-auto bg-black">
        <div className="w-auto h-auto flex flex-row flex-wrap justify-center gap-4 mt-4 mx-5 md:mx-0">
          <Image
            src="/makeitmeme_dBRJ1.jpeg"
            alt=""
            width={465}
            height={635}
            className="rounded-xl"
          />
          <Image
            src="/makeitmeme_dBRJ1.jpeg"
            alt=""
            width={465}
            height={635}
            className="rounded-xl"
          />
          <Image
            src="/makeitmeme_dBRJ1.jpeg"
            alt=""
            width={465}
            height={635}
            className="rounded-xl"
          />
          <Image
            src="/makeitmeme_dBRJ1.jpeg"
            alt=""
            width={465}
            height={635}
            className="rounded-xl"
          />
          <Image
            src="/makeitmeme_dBRJ1.jpeg"
            alt=""
            width={465}
            height={635}
            className="rounded-xl"
          />
          <Image
            src="/makeitmeme_dBRJ1.jpeg"
            alt=""
            width={465}
            height={635}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
