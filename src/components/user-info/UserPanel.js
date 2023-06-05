"use client";

import SideNav from "./SideNav";
import UserInfo from "./UserInfo";
import MyBooking from "./MyBooking";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import ManageTour from "./ManageTour";

export default function UserPanel() {
  const [activeItem, setActiveItem] = useState(
    useSearchParams().get("section") === "booking" ? "booking" : "setting"
  );

  function changeActiveItem(item) {
    if (item !== activeItem) {
      setActiveItem(item);
    }
  }

  let content = null;

  if (activeItem === "setting") {
    content = <UserInfo />;
  }

  if (activeItem === "booking") {
    content = <MyBooking />;
  }

  if (activeItem === "manage-tours") {
    content = <ManageTour />;
  }

  return (
    <>
      <SideNav activeItem={activeItem} changeActiveItem={changeActiveItem} />
      {content || (
        <div className="user-view__maintenance">
          <h1>This section is under maintenance</h1>
        </div>
      )}
    </>
  );
}
