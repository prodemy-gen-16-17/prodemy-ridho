import React from "react";

function Headline(props) {
    return (
        <div className="container py-16 justify-center font-sosial text-black uppercase font-bold">
            <div className="flex justify-between pl-80">
                <li>{props.feature1}</li>
                <li>{props.feature2}</li>
                <li>{props.feature3}</li>
            </div>
        </div>

    );
}

export default Headline;