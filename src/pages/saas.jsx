import React from 'react'
import Card from '../components/Card'

export default function Saas() {
    return (
        <div>
            <div className="saas hidden md:flex">
                <div class='ripple-background'>
                    <div class='circle xxlarge shade1'></div>
                    <div class='circle xlarge shade2'></div>
                    <div class='circle large shade3'></div>
                    <div class='circle mediun shade4'></div>
                    <div class='circle small shade5'></div>
                </div>
            </div>
            <div className=" md:hidden saasm">

            </div>
            <div className="back">
                <section className="p-10 grid xl:grid-cols-2 max-w-7xl mx-auto grid-cols-1 px-10 items-center gap-10">
                    <Card className="mb-10">
                        <div className="grid grid-cols-1 px-5 items-center gap-10">
                            <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="imgs/saas1.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="text-center px-10">
                                <p className="text-4xl text-yellow-600 py-5 mb-5">
                                    Customer Acquisition
                                </p>
                                Social media such as Instagram, Facebook, YouTube, Pinterest, Twitter and LinkedIn have grown to become some of the most popular sites on the web, and are beginning to rival search as major sources of traffic. We drive
                                organic traffic from social networks with an AI based algorithmic approach with behavioral and demographic analysis which will bring in potential customers.
                                <br />
                                <br />

                            </div>
                        </div>
                    </Card>
                    <Card className="mb-10">
                        <div className="grid grid-cols-1 px-5 py-6 items-center gap-10">
                            <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="imgs/saas2.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="text-center px-10">
                                <p className="text-4xl text-yellow-600 py-5 mb-5">
                                    Presales & Qualifying
                                </p>
                                Based on the traffic generation using customer acquisition tools, Our systems qualifies each and every potential customer up to 83 percentile
                                interest levels in the particular product or service and then passed on to the sales teams for final discussion & closures.
                                <br />
                                <br />

                            </div>
                        </div>
                    </Card>

                </section>
            </div>
        </div>
    )
}
