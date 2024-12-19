import { Link, useParams } from "react-router-dom";

const Blogs = () => {
  const params = useParams();
  const blogList = params.id;

  // if you want to use just numbers
  const isNumber = !isNaN(blogList);

  //   Or with Destructuring
  //  const { id } = useParams();
  // const isNumber = !isNaN(id)
  return (
    <div>
      {/* <h2>Blog Page {blogList}</h2> */}
      {isNumber ? <h2>Blog Page {blogList}</h2> : <p>Not Found</p>}
      <Link to="/blog">Back to Blog</Link>
    </div>
  );
};

export default Blogs;
