import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
function BlogContent() {
  const { loading, posts } = useContext(AppContext);
  console.log(posts);

  return (
    <div className="w-11/12 max-w-[620px] mt-[100px] py-3 flex flex-col gap-y-7 my-[80px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No post Found</p>
        </div>
      ) : (
        posts.map((post) => {
          return (
            <div key={post.id}>
              <p className="font-bold text-sm ">{post.title}</p>
              <p className="text-[14px] ">
                By <span className="italic">{post.author}</span> or <span className="underline font-bold">{post.category}</span>
              </p>
              <p className="text-[14px] mb-2    ">Posted on {post.date}</p>
              
              <p className="text-[16px] mt-[13px]">{post.content}</p>
              <div className="flex flex-wrap gap-x-2 items-center ">
                {post.tags.map((tag, index) => {
                  return <span className="text-xs font-semibold underline text-blue-700 cursor-pointer " key={index}>#{tag}</span>;
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default BlogContent;
