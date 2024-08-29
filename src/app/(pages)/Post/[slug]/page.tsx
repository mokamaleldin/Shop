import Post from "@/app/components/Blog/Post"
import TagsAndShare from "@/app/components/Blog/TagsAndShare"


const page = ({ params }: { params: { slug: string } }) => {
    return (
        <div className="mx-20">
            <Post postSlug={params.slug} />
            <TagsAndShare />
        </div>
    )
}
export default page