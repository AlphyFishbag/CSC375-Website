import Link, { Pages } from "../Link";

export default function About() {
  return (
    <>
      <div>About us</div>
      <Link to={Pages.HOME}>Home</Link>
    </>
  );
}
