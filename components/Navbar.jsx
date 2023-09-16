import Link from "next/link";

function Navbar() {
  return (
    <header className="flex justify-between font-bold py-2 bg-slate-500 px-20">
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Link href="/">Users</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
