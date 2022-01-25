import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

export default function About() {
    return (
        <div>
            <section className="">
                <div className="bout mt-2 hidden md:flex">

                </div>
                <div className="boutm md:hidden">

                </div>
            </section>
            <div className="back">
                <section className="p-10 grid text-gray-700 xl:grid-cols-2 grid-cols-1 px-10 items-center gap-10">
                    <Card className="mb-10">
                        <div className="grid lg:grid-cols-2 md:h-96  grid-cols-1 px-5 items-center gap-10">
                            <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="imgs/maas.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="text-center  ">
                                <p className="text-4xl  py-5">
                                    <div className="text-yellow-600">
                                        MAAS</div>
                                    Marketing as a Service
                                </p>

                                1. Digital Reputation Management
                                <br />
                                2. Email & Blog Solutions
                                <br />
                                3. Product & Service awareness
                                <br />
                                4. Brand Awareness
                                <br />
                                <br />
                                <Link to="/maas" className="bg-yellow-600  text-white hover:bg-yellow-500 rounded px-5 my-3 py-3">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </Card>

                    <Card className="mb-10">
                        <div className="grid lg:grid-cols-2 md:h-96 grid-cols-1 px-5 items-center gap-10">
                            <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="imgs/baas.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="text-center ">
                                <p className="text-4xl  py-5">
                                    <div className="text-yellow-600">
                                        BAAS

                                    </div>
                                    Branding as a service
                                </p>

                                1. Logo Designs
                                <br />
                                2. Company Profile & Presentation
                                <br />
                                3. Flyers, Brochures & visiting card designs
                                <br />
                                4. Posters, Creatives, Story based videos
                                <br />
                                <br />
                                <Link to="/baas" className="bg-yellow-600 text-white hover:bg-yellow-500 rounded px-5 my-3 py-3">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-10">
                        <div className="grid lg:grid-cols-2 md:h-96 grid-cols-1 px-5 items-center gap-10">
                            <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="imgs/saas.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="text-center  px-10">
                                <p className="text-4xl  py-5">
                                    <div className="text-yellow-600">
                                        SAAS
                                    </div>
                                    Sales as a service
                                </p>

                                1. Customer Acquisition
                                <br />
                                2. Presales & Qualifying
                                <br />
                                <br />
                                <Link to="/saas" className="bg-yellow-600 hover:bg-yellow-500 text-white rounded px-5 my-3 py-3">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </Card>

                    <Card className="mb-10">
                        <div className="grid  lg:grid-cols-2 md:h-96 h-58 grid-cols-1 px-5 items-center gap-10">
                            <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="imgs/taas.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="text-center  ">
                                <p className="text-4xl  ">
                                    <div className="text-yellow-600">
                                        TAAS

                                    </div>
                                    Technology as a service
                                </p>
                                <br />
                                1. CRM Solutions
                                <br />
                                2. ERP Solutions
                                <br />
                                3. Web Development Solutions
                                <br />
                                4. Chat Bot Solutions
                                <br />
                                5. Mobile App development Solutions
                                <br />
                                6. SEO
                                <br />
                                <br />
                                <Link to="/taas" className="bg-yellow-600 hover:bg-yellow-500 text-white rounded px-5 my-3 py-3">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </Card>

                </section>
            </div>
        </div>
    )
}
