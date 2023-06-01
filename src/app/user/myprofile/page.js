import dynamic from "next/dynamic";

const SideNav = dynamic(() => import("@/components/user-info/SideNav"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const UserInfo = dynamic(() => import("@/components/user-info/UserInfo"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function UserPage() {
  return (
    <main className="main">
      <div className="user-view">
        <SideNav />
        <UserInfo />
      </div>
    </main>
  );
}
