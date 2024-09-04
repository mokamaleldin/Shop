import Image from "next/image"

const PaymentImg = () => {
    return (
        <div className="flex items-center gap-8">
            <Image loading="eager" width={50} height={50} className="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="" />
            <Image loading="eager" width={50} height={50} className="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg" alt="" />
            <Image loading="eager" width={50} height={50} className="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="" />
            <Image loading="eager" width={50} height={50} className="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" alt="" />
            <Image loading="eager" width={50} height={50} className="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="" />
            <Image loading="eager" width={50} height={50} className="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg" alt="" />
        </div>
    )
}
export default PaymentImg