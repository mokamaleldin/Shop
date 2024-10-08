import Link from "next/link"


const HeaderItems = ({ ShowAll }: { ShowAll: boolean }) => {
    return (
        <div className="flex justify-between items-center my-8">
            <h2 className="md:md:text-4xl text-2xl font-medium">Shop The Latest</h2>
            {ShowAll ? <Link rel="preload" href={"/Shop"} className="text-accent">View All</Link> : ''}
        </div>
    )
}
export default HeaderItems 