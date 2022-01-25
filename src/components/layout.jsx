import React from 'react'
import Footer from './footer'
import Navbarr from './navbarr'



export default function Layout({ children }) {

    return (
        <div className="">
            <div className="bakk">
                <Navbarr />
                <div className=" ">
                    <div className="p-2">
                    </div>
                </div>
                <div>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}
