import Image from "next/image"

const PaymentImg = () => {
    return (
        <div className="flex  items-center md:gap-8 gap-4">
            <Image loading="eager" width={50} height={50} className=" h-8 w-25 md:w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg" alt="" />
            <Image loading="eager" width={50} height={50} className=" h-8 w-25 md:w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" alt="" />
            <Image loading="eager" width={50} height={50} className=" h-8 w-10 md:w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg" alt="" />
        </div>
    )
}
export default PaymentImg