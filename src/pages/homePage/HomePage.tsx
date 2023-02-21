// jshint esversion:6
import { Card } from "../../components";

import jsonData from "../../data/items.json";

function HomePage() {
    return (
        <div className="p-5 md:p-10">
            <p className="font-bold">Home Page</p>

            <div className="mt-5 flex justify-center gap-3 flex-wrap">
                {jsonData.map((Item) => {
                    return (
                        <Card key={Item.id} imgUrl={Item.imgUrl} title={Item.title} amount={Item.amount} />
                    );
                })}
            </div>

        </div>
    )
}

export { HomePage };