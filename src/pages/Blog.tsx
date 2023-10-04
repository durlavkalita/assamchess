import logo from "/assets/aaca_logo.jpg";
import { Link } from "react-router-dom";
import { posts_list } from "../data";
import { createSlug } from "../utility";

export default function Blog() {
  posts_list.map((post) => {
    const slug = createSlug(post.title);
    post["slug"] = slug;
  });

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
            News and blogs
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Latest news and blogs from Assam Chess.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-1 lg:max-w-2xl">
          {posts_list.map((post) => (
            <div
              key={post.id}
              className="flex flex rounded-lg overflow-hidden py-6"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={logo}
                  alt="Loading..."
                />
              </div>
              <div className="flex-1  p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Link
                    to={`/blog/${post.slug}`}
                    state={{ id: post.id }}
                    className="block mt-2"
                  >
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.content.slice(0, 100)} ...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
