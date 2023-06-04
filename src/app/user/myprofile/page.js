import dynamic from "next/dynamic";

const UserPanel = dynamic(() => import("@/components/user-info/UserPanel"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function UserPage() {
  return (
    <main className="main">
      <div className="user-view">
        <UserPanel />
      </div>
    </main>
  );
}
