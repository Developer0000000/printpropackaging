import BlogCard from "@/components/BlogComponent/BlogCard";
import BlogCardData from "@/config/BlogCardData";

// Function to generate metadata dynamically
export async function generateMetadata({ params }) {
    const { slug } = params;

    const blog = BlogCardData.find(item => item.id == slug);

    return {
        title: blog.title,
    };
}

export default async function Page({ params }) {
    const { slug } = params;

    const blog = BlogCardData.filter(item => item.id == slug);

    return (
        <>
            {blog.map((blog) => <BlogCard key={blog.id} {...blog} />)}
        </>
    );
}
