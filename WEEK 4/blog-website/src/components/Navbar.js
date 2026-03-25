import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center gap-12 px-4 py-2 text-xl border-b border-b-gray-600">
            <Link href={"/"}>
                Home
            </Link>

            <Link href={"/about"}>
                About
            </Link>
        </nav>
    );

}

export default Navbar;