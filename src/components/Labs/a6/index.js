import React from "react";
import Classes from "../classes/index.js";
import {Link} from "react-router-dom";
import Styles from "../styles"
import ConditionalOutput from "../conditional-output";
import TodoItem from "../todo/TodoItem"
import TodoList from "../todo/TodoList"


const Assignment6 = () => {
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
     <h1>Assignment 6</h1>

                <TodoList/>
                <TodoItem/>
                <ConditionalOutput/>
                <Styles/>
                <Classes/>
   </>
 );
};
export default Assignment6;