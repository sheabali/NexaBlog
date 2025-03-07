import React from 'react';
import BlogDetailsCard from '@/components/ui/BlogDetailsCard';
import { Blog } from '@/types';

export const genarisStaticParams = async () => {
  const res = await fetch('http://localhost:5000/blogs');

  const blogs = await res.json();

  return blogs.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
};

// or Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { blog } = await params;
  const res = await fetch(`http://localhost:5000/blogs/${blog}`);

  const blogs = await res.json();

  return {
    title: blogs.title,
    decsrciption: blogs.decsrciption,
  };
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blog: string }>;
}) => {
  const { blog } = await params;

  console.log(await params);

  const res = await fetch(`http://localhost:5000/blogs/${blog}`);

  const blogs = await res.json();

  return (
    <div className="my-10">
      <BlogDetailsCard blog={blogs} />
    </div>
  );
};

export default BlogDetailsPage;
