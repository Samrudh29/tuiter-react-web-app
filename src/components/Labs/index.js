import React from "react";
import {Link} from "react-router-dom";

const Index = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link> |
            <Link to="/a6">
                         Assignment 6
                        </Link> |
            <Link to="/a7">
                                Assignment 7
                                    </Link>

        </>
    )
};
export default Index;