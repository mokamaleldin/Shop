import Post from "@/app/components/Post/Post"
import TagsAndShare from "@/app/components/Post/TagsAndShare"


const page = ({ params }: { params: { slug: string } }) => {
    return (
        <div className="mx-20">
            <Post postSlug={params.slug} />
            <TagsAndShare />
        </div>
    )
}
export default page