import NoImage from "@/components/no-Image/noImage.jsx";
import styles from "./singlePage.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/PostUser.jsx";
import { Suspense } from "react";

const Post = async ({ params }) => {
  // if the link is /blog/2
  console.log(params); //{slug:"2"}
  const { slug } = params;
  console.log(slug); //2

  // fetching data=================
  const fetchingData = async () => {
    const api = "https://jsonplaceholder.typicode.com";
    const apiCategory = "posts";
    const finalURL = api + "/" + apiCategory + "/" + slug;

    const res = await fetch(finalURL);
    if (!res.ok) {
      throw new Error("Please check the internet the fetch didn't work");
    }
    const data = res.json();
    return data;
  };
  const myPost = await fetchingData();
  console.log(myPost);

  // fetching userId==================

  // BIG NOTE: It's better to fetch once every server component. If you fetch twice the performance decreases
  // in this situation it's better to fetch userId in another server component

  // NOTE ALSO <Suspense></Suspense>  this component comes from react. why this?
  // because we did another server component to fetch. So this current compoent will fetch first then <PostUser/>
  //So if <PostUser/> will be late we have a fallback
  return (
    <div className={`container ${styles.container}`}>
      <NoImage />
      <div className={styles.textContainer}>
        <h1 className={styles.title}> {myPost.title}</h1>
        <Suspense fallback={<div>Loading....</div>}>
          <PostUser userId={myPost.userId} />{" "}
        </Suspense>
        {/*This server componenet has another fetch to increase performance */}
        <article className={styles.article}>{myPost.body}</article>
      </div>
    </div>
  );
};

export default Post;
