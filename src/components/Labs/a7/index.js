import React from "react";
import ReduxExamples from "../redux-examples/index"
import {Link} from "react-router-dom";
const Assignment7 = () => {
 return(
   <>
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
     <h1>Assignment 7</h1>

    <ReduxExamples/>
   </>
 );
};
export default Assignment7;