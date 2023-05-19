"use client";

import { useSelector } from "react-redux";

import NavItem from "./NavItem";

export default function SideNav() {
  const user = useSelector((state) => state.users);

  return (
    <nav className="user-view__menu">
      {user.name && (
        <>
          <ul className="side-nav">
            <NavItem link="#" text="Settings" icon="settings" active={true} />
            <NavItem link="#" text="My bookings" icon="briefcase" />
            <NavItem link="#" text="My Reviews" icon="star" />
            <NavItem link="#" text="Billing" icon="credit-card" />
          </ul>
          {user.role === "admin" && (
            <div className="admin-nav">
              <h5 className="admin-nav__heading">Admin</h5>
              <ul className="side-nav">
                <NavItem link="#" text="Manage tours" icon="map" />
                <NavItem link="#" text="Manage users" icon="users" />
                <NavItem link="#" text="Manage reviews" icon="star" />
                <NavItem link="#" text="Manage bookings" icon="briefcase" />
              </ul>
            </div>
          )}
        </>
      )}
    </nav>
  );
}
