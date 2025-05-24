import Link from "next/link";

const NotFound = () => {
  return (
    <div style={{ minHeight: "90vh", padding: "5rem" }}>
      <h2>Sorry, Path error. </h2>
      <h4>Go back?</h4>
      <Link href="/">Home</Link>
    </div>
  );
};

export default NotFound;
