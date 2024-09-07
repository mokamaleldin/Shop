import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from "@/app/lib/store";
import { additionalCost, driveFreeThreshold } from '@/app/lib/config/config';

const PDFContent = ({ ref }: any) => {
    const { cardNumber, email, streetAddress, postcode, city, country, phone } = useSelector((state: RootState) => state.checkout);
    const { discount } = useSelector((state: RootState) => state.coupon);
    const cart = useSelector((state: RootState) => state.card.items);

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingStatus = totalPrice < driveFreeThreshold ? "Shipping is not free" : "Free shipping";
    const subtotal = totalPrice < driveFreeThreshold ? totalPrice + additionalCost : totalPrice;
    const finalPrice = subtotal * (1 - discount);

    return (
        <div ref={ref} className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-500">Order Confirmation</h2>

            <div className="mb-4">
                <p><strong>Card Number:</strong> {cardNumber}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Address:</strong> {streetAddress}, {postcode}, {city}, {country}</p>
                <p><strong>Phone:</strong> {phone}</p>
            </div>

            <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
            <ul className="mb-4">
                {cart.map((item, index) => (
                    <li key={index} className="flex justify-between">
                        <span>{item.name} - {item.quantity} x ${item.price.toFixed(2)}</span>
                    </li>
                ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2">Pricing Summary</h3>
            <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>
            <p><strong>Shipping:</strong> {shippingStatus}</p>
            <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
            <p><strong>Discount:</strong> {discount * 100}%</p>
            <p><strong>Final Price:</strong> ${finalPrice.toFixed(2)}</p>
        </div>
    );
}

export default PDFContent;
