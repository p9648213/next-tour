import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Image
          src="/img/logo-main.png"
          alt="logo"
          width={734}
          height={734}
          style={{ height: "5rem", width: "100%" }}
        />
      </div>
      <ul className="footer__nav">
        <li>
          <Link href="#">About Us</Link>
        </li>
        <li>
          <Link href="#">Download apps</Link>
        </li>
        <li>
          <Link href="#">Become a guide</Link>
        </li>
        <li>
          <Link href="#">Careers</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
      <p className="footer__copyright">
        &copy; by Jonas Schmedtmann. Feel free to use this project for your own
        purposes, EXCEPT producing your owm course or tutorials!
      </p>
    </footer>
  );
}
