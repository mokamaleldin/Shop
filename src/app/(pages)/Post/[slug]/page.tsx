import posts from "@/app/static/Post"

const page = ({ params }: { params: { slug: string } }) => {
    return (
        <div className="mx-20">
            {posts.map((post) => {
                if (post.slug === params.slug) {
                    return (
                        <div key={post.slug} className="mb-16">
                            <h2 className="font-medium text-black text-3xl">{post.title}</h2>
                            <div className="flex gap-2 items-center">

                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}
export default page