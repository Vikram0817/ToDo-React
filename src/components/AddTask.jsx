import React from "react";

export default function AddTask() {
    return (
        <div className="mb-5 flex items-center bg-gray-200 p-4 w-3/5 max-w-96 font-outfit justify-between rounded-xl">
            <div className="flex">
                <div>
                    <p className="bg-white p-0.5 rounded-lg mr-3">📚</p>
                    <div></div>
                </div>
                <div>
                <p className="text-xl font-semibold">Add new task</p>
                <p className="text-sm">Make projects using TypeScript</p>
                </div>
            </div>

        </div>
    )
}