import AllCards from "@/app/components/Card/AllCards"
import HeaderItems from "@/app/components/Card/HeaderItems"
import Sidebar from "@/app/components/ShopPage/Sidebar"

const page = () => {
    return (
        <div className="mx-20 ">
            <HeaderItems ShowAll={false} />
            <div className="flex justify-between items-start gap-8">
                <Sidebar />
                <AllCards />
            </div>
        </div>
    )
}
export default page