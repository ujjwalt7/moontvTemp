import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import SmBottomNav from "./Navbar/SmBottomNav";
// import TopNav from "./Navbar/TopNav";


export default function RootLayout({ children }) {
  const pathname =  usePathname();
  useEffect(()=>{
    window.scrollTo({top:0,left:0})
  },[pathname])
  return (
        <div className="w-screen h-screen relative flex overflow-x-hidden  bg-bl text-white t">
          {(!pathname?.includes('watch')&&!pathname?.includes('trailer'))&&(
          <>
          <Navbar />
          <SmBottomNav />
          </>
          )}
          <div className={`w-full h-screen overflow-x-hidden overflow-y-auto`}>
            {/* <div className="w-full">
              <TopNav />
            </div> */}
            {children}
          </div>
        </div>
  );
}
