import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/Website/PageBanner";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import banner from "../assets/blogs-banner.webp";
import CallToAction from "../components/CallToAction";
import { blogs } from "../data/blogs";
import { getBlogs } from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await getBlogs();
      return response.data.blogs;
    },
  });

  const blogs = data || [];
  return (
    <div className="bg-secondary/5">
      <Header />
      <PageBanner title="Blogs" banner={banner} />
      <div className="py-[5rem] relative text-primary_text">
        {isLoading && (
          <div className="mt-[2rem] w-full text-center">
            <div
              className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
            <p className="mt-4 text-lg">Loading blogs...</p>
          </div>
        )}

        {error && (
          <div className="mt-[2rem] w-full text-center">
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline">
                {" "}
                Failed to load blogs. Please try again later.
              </span>
            </div>
          </div>
        )}

        {!isLoading && !error && blogs.length === 0 && (
          <div className="mt-[2rem] w-full text-center">
            <p className="text-lg">
              No blogs found. Check back later for new content!
            </p>
          </div>
        )}
        {!isLoading && !error && blogs.length > 0 && (
          <div className="flex flex-col gap-5 items-center wrapper">
            <h4
              data-aos="fade-up"
              className="heading text-center max-w-6xl mx-auto"
            >
              Exploring the Edge of Digital Transformation
            </h4>

            <div className="mt-[2rem] grid sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-7">
              {blogs.map((blog) => (
                <BlogItem key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mb-[5rem]">
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;

// blog item
export const BlogItem = ({ blog }) => {
  const formattedDate = new Date(
    blog.publishDate || blog.createdAt
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div
      data-aos="fade-up"
      className="bg-white w-full rounded-xl p-5 relative z-10 group border"
    >
      <Link to={`/blog-detail/${blog.id}`} target="_blank">
        <img
          src={blog.imageUrl}
          alt={blog.imageAlt || blog.title}
          width="600"
          height="400"
          className="bg-cover aspect-video w-full rounded-xl group-hover:opacity-85 transition-all duration-200"
        />
      </Link>
      <div className="flex justify-between items-center font-light mt-[0.8rem]">
        <div className="rounded-2xl bg-primary text-white font-medium px-3 py-1 text-sm w-fit">
          {blog.categoryId?.name || blog.category?.name || "Uncategorized"}
        </div>
        <p className="text-gray-800 text-[.8rem]">{formattedDate}</p>
      </div>
      <div className="flex flex-col gap-2 mt-[1rem]">
        <Link
          to={`/blogs/${blog.slug}`}
          className="text-xl hyphen-auto font-medium leading-tight line-clamp-2 text-ellipsis hover:text-primary transition-all duration-200"
        >
          {blog.title}
        </Link>
        <p className="desc leading-tight text-gray-800 line-clamp-3 text-ellipsis hyphen-auto">
          {blog.excerpt || blog.metaDescription || "No description available"}
        </p>
      </div>

      <div className="mt-6 w-full flex justify-center">
        <Link to={`/blogs/${blog.slug}`} className="secondary-btn w-full">
          Read More
        </Link>
      </div>
    </div>
  );
};
