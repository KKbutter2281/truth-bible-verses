import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div className="max-h-screen">
        <main className="w-full px-16 py-16 md:pt-32 md:pb-28 transition-all bg-gradient-to-b from-yellow-100 to-orange-200">
          <h1 className="text-black text-3xl sm:text-4xl md:text-6xl font-bold max-w-md md:max-w-xl">
            Let&apos;s do great things together
          </h1>
          <p className="text-xl mt-2 max-w-md md:max-w-2xl">
            Reliable cloud that won&apos;t break the bank.
          </p>
          <div className="flex mt-4 gap-2">
            <Button>Sign up</Button>
            <Button>Pricing</Button>
            <Button>Docs</Button>
          </div>
        </main>
      </div>
      <div className="h-4 bg-gradient-to-b from-orange-50"></div>
      <section className="pt-8 pb-12 px-16 min-h-96">
        <h2 className="text-3xl font-bold max-w-sm md:max-w-2xl">
          <span className="text-orange-500 text-5xl">&ge;50%</span> cheaper than
          other cloud providers
        </h2>
        <p className="max-w-lg leading-snug">
          The less you spend on cloud, the more you can focus on making your app
          good.
        </p>
        <Table className="max-w-lg mx-auto mt-6">
          <TableCaption className="text-xs">
            Data from the DigitalOcean website, GCP, and AWS pricing
            calculators. Settings: on-demand/regular pricing, shared vCPUs and
            the following instance types: n1-standard-1 and n1-standard-2 for
            GCP, t4g.medium and r6g.medium for AWS, 4GiB and 8GiB Basic Droplets
            for DigitalOcean. Taken on 2024-12-9.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>4GB VPS</TableHead>
              <TableHead>8GB VPS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Image
                  src="/digitalocean.svg"
                  alt="DigitalOcean"
                  width="144"
                  height="25"
                  className="w-36"
                />
              </TableCell>
              <TableCell>
                <span className="font-semibold text-2xl">$24</span>
                /mo
                <p className="italic text-red-600">300% more</p>
              </TableCell>
              <TableCell>
                <span className="font-semibold text-2xl">$48</span>
                /mo
                <p className="italic text-red-600">300% more</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Image
                  src="/gcp.svg"
                  alt="Google Cloud"
                  width="144"
                  height="25"
                  className="w-36"
                />
              </TableCell>
              <TableCell>
                <span className="font-semibold text-2xl">$35.67</span>
                /mo
                <p className="italic text-red-600">495% more</p>
              </TableCell>
              <TableCell>
                <span className="font-semibold text-2xl">$70.35</span>
                /mo
                <p className="italic text-red-600">486% more</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Image
                  src="/aws.svg"
                  alt="AWS"
                  width="144"
                  height="28"
                  className="w-12 mt-1"
                />
              </TableCell>
              <TableCell>
                <span className="font-semibold text-2xl ">$24.53</span>
                /mo
                <p className="italic text-red-600">309% more</p>
              </TableCell>
              <TableCell>
                <span className="font-semibold text-2xl">$36.79</span>
                /mo
                <p className="italic text-red-600">206% more</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Image
                  src="/sahara.png"
                  alt="Sahara"
                  width="144"
                  height="50"
                  className="w-36 -m-2"
                />
              </TableCell>
              <TableCell>
                <span className="font-semibold text-4xl text-green-500">
                  $6
                </span>
                /mo
                <p className="italic text-green-500">Perfect.</p>
              </TableCell>
              <TableCell>
                <span className="font-semibold text-4xl text-green-500">
                  $12
                </span>
                /mo
                <p className="italic text-green-500">Perfect.</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section className="p-16 border-t">
        <h2 className="text-4xl font-semibold">Pricing</h2>
        <p>Always affordable.</p>
      </section>
    </div>
  );
}
