import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry, Path error. </h2>
      <h4>Go back?</h4>
      <Link href="/">Home</Link>
    </div>
  );
};

export default NotFound;
