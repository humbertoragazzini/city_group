"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useBeforeUnload = (callback: () => Promise<void>) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("useEffect triggered");

    if (typeof window === "undefined") {
      console.log("Server-side rendering");
      return;
    }

    const handleRouteChangeStart = async (url: string) => {
      console.log("Route change start", url);
      setLoading(true);
      await callback();
      setLoading(false);
    };

    console.log("Adding event listener");
    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      console.log("Removing event listener");
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router, callback]);

  return loading;
};

export default useBeforeUnload;
