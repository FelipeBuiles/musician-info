import Hero from "@/components/hero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getArtistInfo } from "@/lib/api";
import { TOOL_ID } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Unica_One } from "next/font/google";

const unicaOne = Unica_One({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  const { followers, genres, popularity } = await getArtistInfo(TOOL_ID);

  return (
    <>
      <Hero />
      <main className="p-10">
        <h1 className={cn(unicaOne.className, "text-4xl uppercase")}>
          Join the TOOL army
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="m-4">
            <Card className="m-4">
              <CardHeader>
                <h2 className="text-2xl">Followers</h2>
              </CardHeader>
              <CardContent>{followers.total}</CardContent>
            </Card>
            <Card className="m-4">
              <CardHeader>
                <h2 className="text-2xl">Popularity</h2>
              </CardHeader>
              <CardContent>{`# ${popularity}`}</CardContent>
            </Card>
            <Card className="m-4">
              <CardHeader>
                <h2 className="text-2xl">Genres</h2>
              </CardHeader>
              <CardContent>
                {genres.map((genre) => (
                  <Badge variant="secondary" key={genre}>
                    {genre}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col">
            <p className="py-4">
              Tool established themselves as one of America&rsquo;s most
              enduring and unpredictable acts with an ever-evolving brand of
              muscular but mind-altering sonics, a wry sense of humor, and a
              mystical aesthetic that attracted a cult-like following of devoted
              fans with just a handful of albums spread across decades. Their
              greatest breakthrough was to meld dark underground metal with the
              ambition of art rock, crafting multi-sectioned, layered songs as
              if they were classical composers. While embracing the artsy, they
              also paid musical homage to the relentlessly bleak visions of
              grindcore, death metal, and thrash. Even with their post-punk
              influences, they executed their music with the sound and feel of
              prog rock, alternating between long, detailed instrumental
              interludes and lyrical rants in their songs. Debuting in the early
              &rsquo;90s with Undertow, they were initially lumped in with the
              nu-metal contemporaries of the time, which made them a hit on rock
              radio with their sophomore effort, 1996&rsquo;s
              &ldquo;Ænima&rdquo;. However, they soon broke away from those
              associations, evolving beyond the confines of traditional song
              structures and song lengths, crafting epics that often clocked in
              past the ten-minute mark on LP head-trips Lateralus (2001) and
              10,000 Days (2006). After a lengthy 13-year hiatus, they returned
              to the fold in 2019 with their fifth opus, the chart-topping,
              Grammy-nominated Fear Inoculum. In 2022, they celebrated their
              30th anniversary with &ldquo;Opiate&sup2;&rdquo;, a re-recorded
              version of their debut single&rsquo;s.
            </p>
            <p className="py-4">
              Formed in Los Angeles by percussionist Danny Carey, guitarist Adam
              Jones, vocalist Maynard James Keenan, and original bassist , Tool
              had a knack for conveying the strangled, oppressive angst that the
              alternative nation of the early &rsquo;90s claimed as its own,
              which helped them slip into the scene during the post- era.
              Buffered by a prime slot on the third Lollapalooza tour in 1993,
              their debut full-length album, Undertow (&lsquo;), rocketed to
              platinum status. Fervor for the band even resurrected their first
              effort, 1992&rsquo;s Opiate EP, on the Billboard charts. While
              they were in the studio recording a follow-up, amicably parted
              ways with Tool and his spot was filled by Justin Chancellor. By
              the time the fresh quartet delivered their sophomore album,
              &ldquo;&AElig;nima&rdquo;, in late 1996, the alternative rock
              mainstream was ready. The album shot to number two on the
              Billboard charts and was certified multi-platinum in less than a
              decade. Singles &ldquo;Stinkfist&rdquo;, &ldquo;Forty Six &amp;
              2&rdquo;, and the Grammy-winning title track were all Top Ten hits
              on the U.S. Rock chart, boosted by the twisted and often
              disturbing music videos created by Jones. After a co-headlining
              slot with on Lollapalooza &rsquo;97, Tool remained on the road,
              supporting &ldquo;&AElig;nima&rdquo; into the next year.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
