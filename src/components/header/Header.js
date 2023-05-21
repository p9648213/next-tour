import { cookies } from "next/headers";
import Title from "./Title";
import Image from "next/image";
import UserBox from "./UserBox";
import { getUserInfo } from "@/utils/user-helper";

async function Header() {
  const cookieStore = cookies();
  const jwt = cookieStore.get("jwt");

  let user = undefined;

  if (jwt) {
    const res = await getUserInfo(jwt.value);

    if (res.status === "success") {
      user = res.data.data;
    }
  }

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Title title="All Tours" />
      </nav>
      <div className="header__logo">
        <Image
          src="/img/logo-main.png"
          alt="logo"
          width={734}
          height={734}
          style={{ height: "4.5rem", width: "100%" }}
        />
      </div>
      <nav className="nav nav--user">
        <UserBox user={user} />
      </nav>
    </header>
  );
}

export default Header;
