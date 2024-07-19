import BlogContainer from "@/components/blogContainer/blogContainer";
import styles from "./blog.module.css";

const Blog = async () => {
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

  // After fetching from API, The default behavior of NEXT is caching responses-data. It increases performance.
  // So, res = await fetch(URL, {cache: "force-cache"})  //THis is the default and will cashe
  // So if you visit another page and come back it will be much faster. Because your data is cached.
  // Also try to disconnect Internet, your cashed data still here, that because you made cache: "force-cache"

  // But If you don't want to cashe your data, You can write {cashe: "no-store"}
  // So when you visit another page and come back, your data will refetch when you come back
  // Also try to disconnect Internet, your page will get error failed fetching.
  // But change cache:"force-cache" It will give your data again
  // no-store is sometimes good. Why? because if you have any data in DB that changes constantly, It's better to use no-store

  // But if you have blog webstite that you write once or weak, IT's better to use revalidation to give a duration
  // the code is res = await fetch(URL, {next:{revalidation: 3600}}) //It will refresh the data every 1 hour or 3600 seconds
  // the best thing to use is timing of the cashe
  // but if you don't want to store anything you will write => fetch(URL, {cache:"no-store"})

  // This each time you will see the component it will refreshed data

  const myData = await gettingData();
  console.log(myData);

  const puttingArticles = myData.map((post, ind) => {
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
