import { RootState } from "@/app/lib/store"
import posts from "@/app/static/Post"
import { TPost } from "@/app/types/Post"
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"

const GetPosts = () => {
    const { filterBlogs, categoryBlog } = useSelector((state: RootState) => state.filter);

    const filterBlog = (post: TPost) => {
        const titleMatch = post.title.toLowerCase().includes(filterBlogs.toLowerCase());
        const categoryMatch = categoryBlog === "All" || post.category === categoryBlog;

        return titleMatch && categoryMatch;
    }

    return (
        <div className="grid md:grid-cols-2 grid-col-span-1 gap-8">
            {posts.filter(filterBlog).map((post, index) => {
                return (
                    <div key={index}>
                        <Link rel="preload" href={`/Post/${post.slug}`} >
                            <Image loading="eager" width={500} height={500} src={post.img} alt={post.title} />
                        </Link>
                        <div className="text-sm text-DarkGray flex flex-col gap-4 mt-4">
                            <div className="flex gap-1">
                                <p>{post.category}</p>
                                <p>-</p>
                                <p>{post.date}</p>
                            </div>
                            <h3 className="font-medium text-black md:text-xl">{post.title}</h3>
                            <p className="md:max-w-[500px]">
                                {post.description.length > 200 ? post.description.substring(0, 100) + "..." : post.description}
                            </p>
                            <Link rel="preload" href={`/Post/${post.slug}`} className="text-accent">Read More</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default GetPosts