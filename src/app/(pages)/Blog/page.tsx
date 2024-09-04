"use client";
import BlogNavbar from "@/app/components/Blog/BlogNavbar"
import GetPosts from "@/app/components/Blog/GetPosts"

const page = () => {
    return (
        <div className="md:mx-20 mx-5">
            <div className="my-8">
                <h2 className="md:text-4xl text-2xl font-medium">Blog</h2>
            </div>
            <div className="flex justify-between items-start">
                <BlogNavbar />
                <GetPosts />
            </div>
        </div>
    )
}
export default page