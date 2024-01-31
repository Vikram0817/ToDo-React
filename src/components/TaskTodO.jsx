import React from "react";

export default function TaskTodO() {
    return (
        <div className="mb-5 flex items-center bg-orange-200 p-4 w-3/5 max-w-96 font-outfit justify-between rounded-xl">
            <div className="flex">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 bg-orange-500 rounded-lg mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                <div></div>
            </div>
            <div>
                <p className="text-xl font-semibold">Task To Do</p>
                <p className="text-sm">Make projects using TypeScript</p>
                </div>
            </div>

        </div>
    )
}