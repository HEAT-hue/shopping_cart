// jshint esversion:6
import "../card/card.css"
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils"

import { GrFormAdd } from "react-icons/gr"
import { AiOutlinePlus } from "react-icons/ai";

interface CardProps {
    imgUrl: string,
    title: string,
    amount: number
}

function Card({ imgUrl, title, amount }: CardProps) {

    const [imageLoaded, setImageLoaded] = useState<boolean>(false)
    const [img, setImg] = useState<string>();

    const fetchImage = async () => {
        console.log("image url");
        console.log(imgUrl);

        const res = await fetch(imgUrl);
        const imageBlob = await res.blob();
        console.log("Image Blob");
        console.log(imageBlob);

        const imageObjectURL = URL.createObjectURL(imageBlob);
        console.log("image Object Url")
        console.log(imageObjectURL);
        setImg(imageObjectURL);
        setImageLoaded(true);
    };

    useEffect(() => {
        fetchImage();
    }, []);

    return (
        <div className="max-w-[300px] min-w-[250px] shadow-sm flex-1">
            <div className="h-[200px]">
                {imageLoaded ? <img className="w-full h-full object-cover" src={img} alt={"An image"} /> : <div className="animated-bg w-full h-full"></div>}
            </div>
            <div className="h-auto p-3.5 bg-white flex flex-col gap-4">
                <div className="flex justify-between">
                    <p className="font-bold">{title}</p>
                    <p className=" text-gray-700">{formatCurrency(amount)}</p>
                </div>
                <button className="w-full bg-primary rounded-sm shadow-sm text-white py-1.5 px-7 flex justify-center items-center  gap-3"><span className="font-bold">Add to cart</span> <AiOutlinePlus size={20} color="white" /></button>
                {/* <div className="flex flex-col gap-2">
                    <div className="flex justify-center items-center gap-3 ">
                        <button className="px-3 py-0.5 bg-primary text-white font-bold rounded-sm shadow-sm">-</button>
                        <span>1 in cart</span>
                        <button className="px-3 py-0.5 bg-primary text-white font-bold rounded-sm shadow-sm">+</button>
                    </div>
                    <button className="max-w-max mx-auto px-3 py-0.5 bg-danger text-white font-bold rounded-sm shadow-sm">Remove</button>
                </div> */}
            </div>
        </div>
    );
}

export { Card };