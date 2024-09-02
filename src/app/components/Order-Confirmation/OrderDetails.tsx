const OrderDetails = () => {
    return (
        <div>
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h6>ORDER NUMBER</h6>
                    <p className="text-DarkGray mt-2">1879605573994</p>
                </div>
                <div>
                    <h6>DELIVERY OPTIONS</h6>
                    <p className="text-DarkGray mt-2">Standard delivery</p>
                </div>
            </div>

            <div className="flex justify-between items-start mb-8">
                <div>
                    <div>
                        <h6>EMAIL</h6>
                        <p className="text-DarkGray mt-2">Vitathemes@gmail.com</p>
                    </div>
                    <div>
                        <h6 className="mt-8">PAYMENT METHOD</h6>
                        <p className="text-DarkGray mt-2">Mastercard*************7865</p>
                    </div>
                </div>

                <div>
                    <h6 >DELIVERY ADDRESS</h6>
                    <p className="text-DarkGray mt-2">Kristian holst 34</p>
                    <p className="text-DarkGray mt-2">Postcode / ZIP</p>
                    <p className="text-DarkGray mt-2">london </p>
                    <p className="text-DarkGray mt-2">United Kingdom</p>
                </div>
            </div>


            <div className="flex justify-between items-start mb-8">
                <div>
                    <h6>ORDER DATE</h6>
                    <p className="text-DarkGray mt-2">October 8,2020</p>
                </div>
                <div>
                    <h6>CONTACT NUMBER</h6>
                    <p className="text-DarkGray mt-2">+44 8749790988</p>
                </div>
            </div>
        </div>
    )
}
export default OrderDetails