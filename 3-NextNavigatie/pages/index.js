import Link from "next/link";

const Home = () => (
  <div>
    <h1 id="hello-world">Hello World</h1>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </div>
);

export default Home;
