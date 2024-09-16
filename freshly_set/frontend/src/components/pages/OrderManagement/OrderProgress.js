import React from "react";
import OrderItemCard from "./OrderItemCard";

function OrderProgress() {
    return (
        <div className="OrderProgress">
            <div className="OrderProgressWrapper">
                <OrderItemCard />
            </div> {/*Order Progress Wrapper */}
        </div> // Order Progess Ends Here
    )
}

export default OrderProgress