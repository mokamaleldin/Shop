import posts from "@/app/static/Post"
import Image from "next/image"
import Link from "next/link"

const GetPosts = () => {
    return (
        <div className="grid grid-cols-2 gap-8">
            {posts.map((post, index) => {
                return (
                    <div key={index}>
                        <div>
                            <Image width={500} height={500} src={post.img} alt={post.title} />
                        </div>
                        <div className="text-sm text-DarkGray flex flex-col gap-4 mt-4">
                            <div className="flex gap-1">
                                <p>{post.category}</p>
                                <p>-</p>
                                <p>{post.date}</p>
                            </div>
                            <h3 className="font-medium text-black text-xl">{post.title}</h3>
                            <p className="md:max-w-[500px]">
                                {post.description.length > 200 ? post.description.substring(0, 100) + "..." : post.description}
                            </p>
                            <Link href={`/Post/${post.slug}`} className="text-accent">Read More</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default GetPosts