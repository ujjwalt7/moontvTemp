import Head from "next/head";
import Image from "next/image";

export default function Custom404() {
  return (
    <>
    <Head>
      <title>MoonTv | 404 | Not Found</title>
    </Head>
    <div className="w-full h-full flex justify-center items-center flex-col gap-4">
      <div className="w-1/4 aspect-square">
        <Image priority   className="w-full h-full object-contain "
                width={0}
                height={0}
                sizes="100vw" src={'/assets/img/error404.png'} alt="svg error" />
      </div>
      <div className="text-xl flex items-center gap-4">
        <div className="text-2xl font-medium">404</div>
        <div className="w-[1px] bg-white h-full"></div>
        Page Not Found
      </div>
    </div>
    </>
  );
}
