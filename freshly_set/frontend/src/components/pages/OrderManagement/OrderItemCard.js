import React from "react";

function OrderItemCard() {
    return (
        <div className="OrderItemCard">
            <div className="OrderItemWrapper grid grid-cols-2">
                {/*Item Picture, Category and Name */}
                <div className="ItemPictureAndName block">
                    OrderProgress
                </div>

                {/*Item Quantity And Order Status */}
                <div className="ItemQttyAndStatus block">

                </div>

            </div> {/*Order ItemsWrapper Ends Here */}

        </div> // Order Item Card Ends Here
    )
}

export default OrderItemCard