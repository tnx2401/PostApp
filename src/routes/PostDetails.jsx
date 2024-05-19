import { useLoaderData, Link, Form } from "react-router-dom";

import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.name}</p>
        <p className={classes.text}>{post.description}</p>
          <Form method="POST">
            <button className={classes.close} >Delete this post</button>
          </Form>
      </main>
    </Modal>
  );
}

export default PostDetails;
export async function loader({ params }) {
  const response = await fetch("http://localhost:8080/posts/" + params.postId);
  const resData = await response.json();
  return resData.post;
}

export async function action({ params }) {
  console.log("function is executed");
  await fetch(`http://localhost:8080/posts/${params.postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    // Handle error case (e.g., display an error message to the user)
    console.error("Failed to delete post:", response.statusText);
    return;
  }

  console.log("Post deleted successfully!");

}
