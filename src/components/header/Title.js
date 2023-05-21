"use client";

import { useRouter } from "next/navigation";

export default function Title({ title }) {
  const router = useRouter();

  function onLogoClick() {
    window.location.replace(process.env.NEXT_PUBLIC_URL_INTERNAL);
  }

  return (
    <div className="nav__el" onClick={onLogoClick}>
      {title}
    </div>
  );
}
