import { Link, Form, redirect } from "react-router-dom";

import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

function NewPost() {
  return (
    <Modal>

      {/* Using <Form></Form> makes the action execute after submitting */}
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="author">Your name</label>
          <input type="text" name="name" id="author" required />
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="description" required rows={3} />
        </p>

        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancle
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;
//Export function to route, form's data is passed in automatically by REACT router
export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // {name: '...', body: '...'}
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect('/');
}
