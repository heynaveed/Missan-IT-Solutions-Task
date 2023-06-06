import { SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import Data from "../Data/Products";
import Card from "./Card";
import Filter from "./Filter";

export default function ProductList() {
    const Mydata = Data
    const [AppendData, setAppendData] = useState(Mydata);

    function HandelClick(category, price) {
        let FilteredData = Mydata.filter(elem => elem.Price == price && elem.category == category);
        setAppendData(FilteredData);
    }
    return (
        <>
            <Filter HandelClick={HandelClick} />
            <SimpleGrid padding={"20px"} columns={[1, 3, 3, 4]} justifyContent={"space-evenly"} spacing={"40px"}>
                {
                    AppendData.map((elem) => {
                        return <Card Props={elem} />
                    })
                }
            </SimpleGrid>
        </>
    )
}