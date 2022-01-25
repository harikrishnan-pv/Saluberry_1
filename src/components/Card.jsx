import React from 'react'

export default function Card({ children }) {
    return (
        <div>
            <div className="bg-gray-100 text-gray-700 shadow-2xl flex  justify-center items-center py-10">
                {children}
            </div>
        </div>
    )
}
