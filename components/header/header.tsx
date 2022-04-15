
import Image from "next/image";
import Link from "next/link";
import Styles from "./header.module.css";
import IconBookMark from "../../public/images/icons/icons-bookmark.svg";

export function Header() {
  return (
    <header>
      <nav className={Styles.nav}>
        <div className={Styles.brand}>
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                width={45}
                height={36}
                alt="OnFood"
              />
              <span>OnFood</span>
            </a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>
                <IconBookMark />
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/favoritos">
              <a>
                <IconBookMark />
                Favoritos
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}