import BlogCard from "@/components/BlogComponent/BlogCard";
import BlogCardData from "@/config/BlogCardData";


export const generateStaticParams = async () => {
    const slugsRoutes = BlogCardData.map(blog => ({
        slug: blog.id,
    }));
    
    return slugsRoutes;
}

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
