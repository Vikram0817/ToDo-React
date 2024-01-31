import React from "react";

export default function TaskDone() {
    return (
        <div className="mb-5 flex items-center bg-green-200 p-4 w-3/5 max-w-96 font-outfit justify-between rounded-xl">
            <div className="flex items-center">
                <p className="bg-white p-1 rounded-lg mr-3">🏋️</p>
                <p className="text-xl font-semibold">Task Completed</p>
            </div>
            <svg className="w-6 h-6 bg-green-500 p-1 rounded-lg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="7.5" fill="#bbf7d0" fill-opacity="0.25"/>
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>

            </svg>
        </div>
    )
}