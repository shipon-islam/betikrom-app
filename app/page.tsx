import Button from "@/components/Button";
import heroImage from "@/public/supershop.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container pt-8">
      <div className="flex gap-x-14 items-center">
        <aside>
          <h4 className="capitalize text-4xl font-bold leading-snug ">
            shop your needed things,
            <br /> and take discounts!
          </h4>
          <p className="mb-10 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ut
            ullam recusandae, quidem deserunt aperiam dolores corporis
            cupiditate minus? Eaque tenetur dignissimos enim sapiente deserunt
            error voluptas quibusdam pariatur non.
          </p>
          <Button title="start now" />
        </aside>
        <aside>
          <div>
            <Image
              className="border rounded-xl"
              src={heroImage}
              alt="hero image"
              placeholder="blur"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
