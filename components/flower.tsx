import { tokenIdentifier } from "../lib/extjs";
import React, { useEffect, useState } from "react";

export default function Flower() {
    function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const [index,setIndex] = useState(randomIntFromInterval(0,2008));
    return (
        <div className="h-108">
            <a
                href={`https://entrepot.app/marketplace/asset/${tokenIdentifier(
                    "pk6rk-6aaaa-aaaae-qaazq-cai",
                    index
                )}`}
                target="_blank"
                rel="noreferrer"
            >
                <object
                    data={`https://pk6rk-6aaaa-aaaae-qaazq-cai.raw.ic0.app/?tokenid=${tokenIdentifier(
                        "pk6rk-6aaaa-aaaae-qaazq-cai",
                        index
                    )}&type=thumbnail`}
                    width="100%"
                    height="100%"
                    style={{ pointerEvents: "none" }}
                ></object>
            </a>
        </div>
    );
}
