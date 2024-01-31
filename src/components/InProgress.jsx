import React from "react";

export default function InProgress() {
    return (
        <div className="mb-5 flex items-center bg-yellow-200 p-4 w-3/5 max-w-96 font-outfit justify-between rounded-xl">
            <div className="flex items-center">
                <p className="bg-white p-1 rounded-lg mr-3">⏰</p>
                <p className="text-xl font-semibold">Task in Progress</p>
            </div>
            <svg className="w-6 h-6 bg-yellow-500 p-1 rounded-lg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="7.5" fill="##fde68a" fillOpacity="0.25"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
            </svg>
        </div>
    )
}