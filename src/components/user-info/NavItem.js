import Link from "next/link";

export default function NavItem({ link, text, icon, active }) {
  return (
    <li className={active ? "side-nav--active" : ""}>
      <Link href={link}>
        <svg>
          <use xlinkHref={`/img/icons.svg#icon-${icon}`}></use>
        </svg>
        {text}
      </Link>
    </li>
  );
}
