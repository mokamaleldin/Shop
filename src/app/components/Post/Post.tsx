import posts from "@/app/static/Post"
import Image from "next/image"

const Post = ({ postSlug }: { postSlug: string }) => {
    return (
        <>
            {posts.map((post) => {
                if (post.slug === postSlug) {
                    return (
                        <div key={post.slug} className="mb-16 flex items-center justify-center flex-col gap-12 ">
                            <h2 className="font-medium text-black text-3xl">{post.title}</h2>
                            <div className="flex gap-2 justify-center items-center">
                                <div className="text-DarkGray">by : <span className="ml-3 font-normal ">{post.author}</span></div>
                                <div className="text-DarkGray">-</div>
                                <div className="text-DarkGray">{post.date}</div>
                            </div>
                            <Image width={1200} height={1200} src={post.img} alt={post.title} />
                            <p className="text-black text-lg max-w-[700px] ">{post.description}</p>
                        </div>
                    )
                }
            })}
        </>
    )
}
export default Post