import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { selectGlobalLoading } from "@/redux/features/globalLoadingSlice";
import pemulinkLogo from "../../../public/pemulink-logo.png";

export default function GlobalLoading() {
  const { globalLoading } = useSelector(selectGlobalLoading);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (globalLoading) {
      setIsLoading(true);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [globalLoading]);

  return (
    <div
      className={`min-h-screen absolute flex justify-center items-center bg-sky-50 z-[999] transition-all duration-300 ease-in-out ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image src={pemulinkLogo} alt="Pemulink Logo" className="w-1/2" />
    </div>
  );
}
