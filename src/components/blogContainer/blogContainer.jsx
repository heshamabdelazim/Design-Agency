import Link from "next/link";
import styles from "./blogContainer.module.css";
import Image from "next/image";
const BlogContainer = ({ post }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.postImage}>
        {post.image ? (
          <>{/* <Image src={ } fill /> */}</>
        ) : (
          <div className={styles.noImg}>no image</div>
        )}
      </div>
      <article className={styles.text}>
        <h2 className={styles.title}>{post.title}</h2>
        <Link href={`/blog/${post.id}`} className={styles.link}>
          Read More {">"}
        </Link>
      </article>
    </div>
  );
};

export default BlogContainer;
