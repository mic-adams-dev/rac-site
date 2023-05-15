import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="max-w-5xl mx-5 lg:mx-auto py-10">
      <h1 className="text-white text-5xl font-extrabold font-sans">About</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="text-red-500 text-3xl font-bold font-sans">
            Who we are
          </h1>
        </div>
        <div>
          <p className="text-white font-fancy text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            maiores consequatur enim numquam voluptate est eius hic cupiditate
            veritatis laboriosam maxime quia distinctio ullam, iste dolor ipsa
            dicta vero neque!
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-red-500 text-3xl font-bold font-sans">
            What we do
          </h1>
        </div>
        <div className="mt-5">
          <p className="text-white font-fancy text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            maiores consequatur enim numquam voluptate est eius hic cupiditate
            veritatis laboriosam maxime quia distinctio ullam, iste dolor ipsa
            dicta vero neque!
          </p>
        </div>
      </div>
    </div>
  );
}
