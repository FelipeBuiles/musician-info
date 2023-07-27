import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import TwitterLogo from "@/public/twitter.svg";
import InstagramLogo from "@/public/instagram.svg";
import FacebookLogo from "@/public/facebook.svg";

export default function Footer() {
  return (
    <footer className="dark flex flex-col-reverse content-center items-center justify-between p-4 align-middle md:flex-row">
      <span>© Juan Builes 2023</span>
      <div>
        <Button variant="ghost" asChild>
          <Link target="_blank" href="https://twitter.com/Tool">
            <Image src={TwitterLogo} alt="Twitter Logo" />
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link target="_blank" href="https://www.instagram.com/toolmusic/">
            <Image src={InstagramLogo} alt="Instagram Logo" />
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link target="_blank" href="https://www.facebook.com/ToolMusic/">
            <Image src={FacebookLogo} alt="Facebook Logo" />
          </Link>
        </Button>
      </div>
    </footer>
  );
}
