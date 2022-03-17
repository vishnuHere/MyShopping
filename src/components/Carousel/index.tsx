import React from "react";
import { Carousel } from "react-responsive-carousel";

export type PropType = {
    images: Array<any>;
};

const MyCarousel = (props: PropType) => (
    <Carousel autoPlay>
        {props.images.map((image, index) => (
            <div>
                <img alt="" src={image} />
                {/* <p className="legend">Legend 1</p> */}
            </div>
        ))}
    </Carousel>
);

export default MyCarousel;
