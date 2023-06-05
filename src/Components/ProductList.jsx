import { SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import Data from "../Data/Products";
import Card from "./Card";

export default function () {
    const Mydata = Data
    const [AppendData, setAppendData] = useState(Mydata);
    return (
        <SimpleGrid padding={"20px"} columns={[1, 3, 3, 4]} justifyContent={"space-evenly"} spacing={"40px"}>
           {
            AppendData.map((elem)=>{
             return <Card Props={elem}/>
            })
           }
        </SimpleGrid>
    )
}