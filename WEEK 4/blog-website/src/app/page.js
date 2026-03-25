import BlogsContainer from "@/components/BlogsContainer";

export default function Home() {
  return (
    <section className="max-w-11/12 mx-auto">
      <h1 className="text-5xl text-center my-10 font-bold tracking-wider">Blog Website</h1>

      <BlogsContainer />
    </section>
  );
}
