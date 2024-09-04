import Post from "@/app/components/Post/Post"
import TagsAndShare from "@/app/components/Post/TagsAndShare"


const page = ({ params }: { params: { slug: string } }) => {
    return (
        <div className="md:mx-20 mx-5">
            <Post postSlug={params.slug} />
            <TagsAndShare />
        </div>
    )
}
export default page