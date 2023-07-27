"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Nav() {
  return (
    <nav className="my-10 flex">
      <Button variant="link" asChild>
        <Link href="/">About</Link>
      </Button>
      <Separator orientation="vertical" />
      <Button variant="link" asChild>
        <Link href="/top-tracks">Top Tracks</Link>
      </Button>
      <Separator orientation="vertical" />
      <Button variant="link" asChild>
        <Link href="/fanclub">Fan Club</Link>
      </Button>
      <Separator orientation="vertical" />
      <Button variant="link" asChild>
        <Link href="/merch">Merch</Link>
      </Button>
    </nav>
  );
}
