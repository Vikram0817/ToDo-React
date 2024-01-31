import React from "react";

export default function TaskInProgress() {
    return (
        <div className="mb-5 flex items-center bg-red-200 p-4 w-3/5 max-w-96 font-outfit justify-between rounded-xl">
            <div className="flex items-center">
                <p className="bg-white p-1 rounded-lg mr-3">🍵</p>
                <p className="text-xl font-semibold">Task Won't Do</p>
            </div>
            <svg className="w-6 h-6 bg-red-500 p-1 rounded-lg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7.5" fill="#fecaca" fill-opacity="0.25"/>
                <path d="M7.5 7.5L12.5 12.5" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M12.5 7.5L7.5 12.5" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
        </div>
    )
}