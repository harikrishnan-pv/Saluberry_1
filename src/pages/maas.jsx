import React from 'react'
import Card from '../components/Card'

export default function Maas() {
    return (
        <div>
            <div className="maas hidden md:flex">
                <div class='ripple-background'>
                    <div class='circle xxlarge shade1'></div>
                    <div class='circle xlarge shade2'></div>
                    <div class='circle large shade3'></div>
                    <div class='circle mediun shade4'></div>
                    <div class='circle small shade5'></div>
                </div>
            </div>
            <div className=" md:hidden maasm">
                
            </div>
            <div className="w-100 back">
                <section className="p-10 grid xl:grid-cols-2 grid-cols-1 px-10 max-w-7xl mx-auto items-center gap-10">
                    <Card className="mb-10">
                        <div className="grid grid-cols-1 px-5 items-center gap-10">
                            <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="imgs/maas1.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="text-center px-10">
                                <p className="text-4xl text-yellow-600 py-5 mb-5">
                                    Digital Reputation Management

                                </p>

                                Maintaining Online reputation by creating relative content and keeping all the
                                social media handles populated with relevant creatives, videos and blogs at par with industry standards and ensuring organic awareness of the product/service
                                <br />
                                <br />

                            </div>
                        </div>
                    </Card>
                    <Card className="mb-10">
                        <div className="grid grid-cols-1 px-5 py-5 items-center gap-10">
                            <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="imgs/maas2.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="text-center px-10">
                                <p className="text-4xl text-yellow-600 py-5 mb-5">
                                    Email & Blog Solutions

                                </p>

                                Creating Blog Content on the latest updates and emailer content to engage the subscribers in a healthy and organic way would drive
                                organic inquiries. It’s one of the most cost-effective digital marketing techniques to reach, engage, and retain customers.
                                <br />
                                <br />

                            </div>
                        </div>
                    </Card>
                    <Card className="mb-10">
                        <div className="grid grid-cols-1 px-5 py-3 items-center gap-10">
                            <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="imgs/maas3.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="text-center px-10">
                                <p className="text-4xl text-yellow-600 py-5 mb-5">
                                    Product & Service awareness
                                </p>
                                Digitally Promoting the Company’s product / services using organic and paid media channels to create awareness.
                                <br />
                                <br />

                            </div>
                        </div>
                    </Card>
                    <Card className="mb-10">
                        <div className="grid grid-cols-1 px-5 items-center gap-10">
                            <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="imgs/maas4.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="text-center px-10">
                                <p className="text-4xl text-yellow-600 py-5 mb-5">
                                    Brand Awareness

                                </p>

                                Creating Brand Awareness through various activities and making the consumer aware of the brand, its value and product & service offerings.
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
