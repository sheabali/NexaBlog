'use client';
import BlogCard from '@/components/ui/BlogCard';
import Spinner from '@/components/ui/Spinner';
import { useGetBlogsQuery } from '@/redux/apis/blogs.slice';
import { Blog } from '@/types';
import React from 'react';

const BlogPage = () => {
  const { data: blogs, isLoading } = useGetBlogsQuery({});

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Explore <span className="text-teal-600">Blogs</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-6 my-5">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
