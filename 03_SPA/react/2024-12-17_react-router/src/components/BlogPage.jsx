import { Link } from "react-router-dom";

const BlogPage = () => {
  const items = [
    { name: "Blog-1", to: "/blog-page/1" },
    { name: "Blog-2", to: "/blog-page/2" },
    { name: "Blog-3", to: "/blog-page/3" },
  ];
  return (
    <div>
      <h2>Blog page</h2>
      {items.map((item) => {
        return (
          <li key={item.to}>
            <Link to={item.to}>{item.name}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default BlogPage;
