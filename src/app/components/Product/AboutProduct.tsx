"use client"
import { TProduct } from "@/app/types/Product"
import { useState } from "react"

const AboutProduct = ({ product }: { product: TProduct }) => {
    const [tab, setTab] = useState("description")
    const handleTab = (tab: string) => {
        setTab(tab)
    }
    const activeTab = "text-black font-medium udnerline underline-black"
    return (
        <div className="my-8">
            <div className="font-medium cursor-pointer text-DarkGray  flex justify-start items-center gap-24 pb-8">
                <div className={tab === "description" ? activeTab : ''} onClick={() => handleTab("description")}>Description</div>
                <div className={tab === "aditional" ? activeTab : ''} onClick={() => handleTab("aditional")}>Aditional information</div>
            </div>
            <hr className="border-t-2 border-gray-300 pb-8" />

            {tab === "description" && <div className="text-DarkGray text-sm">
                {product.description}
            </div>}
            {tab === "aditional" && <div className="flex flex-col gap-2">
                <div>Weight : <span className="ml-3 font-normal text-DarkGray">{product.additionalInfo?.weight}</span></div>
                <div>Dimentions : <span className="ml-3 font-normal text-DarkGray">{product.additionalInfo?.dimensions}</span></div>
                <div>Colours : <span className="ml-3 font-normal text-DarkGray">{product.additionalInfo?.colours}</span></div>
                <div>Material : <span className="ml-3 font-normal text-DarkGray">{product.additionalInfo?.material}</span></div>
            </div>}

        </div>
    )
}
export default AboutProduct