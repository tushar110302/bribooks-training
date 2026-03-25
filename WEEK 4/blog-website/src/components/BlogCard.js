import Link from "next/link";

const BlogCard = ({blog}) => {

    return (
      <div
        className="relative w-[350px] h-[400px]  bg-cover bg-center"
        style={{ backgroundImage: `url(${blog.featured_image})` }}
      >
        <div className="absolute inset-0 backdrop-blur-md bg-white/20 text-black py-2 px-3 flex flex-col items-center justify-center text-center">
          <Link href={`/blogs/${blog.id}`} className="space-y-6">
            <h2 className="text-2xl font-extrabold ">{blog.title}</h2>
            <p>{blog.subtitle}</p>
            
          </Link>
        </div>
      </div>
    );
}

export default BlogCard;