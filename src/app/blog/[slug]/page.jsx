import styles from "./singlePage.module.css";

const Post = async ({ params }) => {
  console.log(params); //{slug:"2"}
  const { slug } = params;
  console.log(slug); //2

  const fetchingData = async () => {
    const api = "https://jsonplaceholder.typicode.com";
    const apiCategory = "posts";
    const postNumber = slug;
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

  return (
    <div className={`container ${styles.container}`}>
      <div>
        <h1>Post Title is: {myPost.title}</h1>
        <span>Athor ID is {myPost.userId}</span>
      </div>
      <article className={styles.article}>{myPost.body}</article>
    </div>
  );
};

export default Post;
