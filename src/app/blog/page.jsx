"use client";
import BlogContainer from "@/components/blogContainer/blogContainer";
import styles from "./blog.module.css";
import { user } from "../../../lib/data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

async function gettingData() {
  const api = "https://jsonplaceholder.typicode.com";
  const apiCategory = "posts";
  const finalURL = api + "/" + apiCategory;

  const res = await fetch(finalURL, { cache: "force-cache" }); //you can delte cache: "force-cache" cuz, It's the default
  if (!res.ok) {
    throw new Error("something wrong");
  }
  const data = await res.json();
  return data;
}

//component start here ==========================
const Blog = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    myData();
    // redirection();
  }, []);

  const myData = async () => {
    const data = await gettingData();
    setBlogs(data);
  };

  const redirection = () => {
    if (!user) {
      router.replace("/register");
      return null;
    }
  };

  const puttingArticles = blogs?.map((post, ind) => {
    return <BlogContainer key={ind} post={post} />;
  });

  return (
    <div className={`${styles.container}`}>
      <h2 className={styles.head}>Recently from the Blog</h2>
      <div className={`${styles.content} container`}>{puttingArticles}</div>
    </div>
  );
};

export default Blog;
