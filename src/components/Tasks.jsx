import React from "react";
import TaskInProgress from "./TaskInProgress";
import TaskDone from "./TaskDone";
import InProgress from "./InProgress";
import TaskTodO from "./TaskTodO";
import AddTask from "./AddTask";

export default function Tasks(){
    return(
        <div className=" h-fit flex flex-col items-center">
        <TaskInProgress></TaskInProgress>
        <TaskDone></TaskDone>
        <InProgress></InProgress>
        <TaskTodO></TaskTodO>
        <AddTask></AddTask>
        </div>
    )
}