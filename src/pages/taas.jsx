import React from 'react'
import Card from '../components/Card'


export default function Taas() {
    return (
        <div>
            <div className="taas  hidden md:flex">
                <div class='ripple-background'>
                    <div class='circle xxlarge shade1'></div>
                    <div class='circle xlarge shade2'></div>
                    <div class='circle large shade3'></div>
                    <div class='circle mediun shade4'></div>
                    <div class='circle small shade5'></div>
                </div>
            </div>
            <div className=" md:hidden taasm">

            </div>
            <div className="back">
                <section className="p-10 grid xl:grid-cols-2 max-w-7xl mx-auto grid-cols-1 px-10 items-center gap-10">
                    <Card className="mb-10 ">
                        <div className="grid grid-cols-1 py-3 px-5 items-center gap-10">
                            <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="imgs/taas1.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="text-center px-10">
                                <p className="text-4xl text-yellow-600 py-5 mb-5">
                                    CRM Solutions
                                </p>
                                An Agile web and app based platform for all your customer relationship management, including sales, service, HR, Payroll, accounting and much more modules, integration in hours.
                                <br />
                                <br />

                            </div>
                        </div>
                    </Card>
                    <Card className="mb-10">
                        <div className="grid grid-cols-1 px-5 items-center gap-10">
                            <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="imgs/taas2.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="text-center px-10">
                                <p className="text-4xl text-yellow-600 py-5 mb-5">
                                    ERP Solutions

                                </p>

                                A Complete Backbone for Enterprise Resource planning, with various modules covering sales, operations, inventory, organisational hierarchy , logistics, ecommerce solutions and much more, and in few hours of implementation.
                                <br />
                                <br />

                            </div>
                        </div>
                    </Card>
                    <Card className="mb-10">
                        <div className="grid py-6 grid-cols-1 px-5 items-center gap-10">
                            <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="imgs/taas3.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="text-center px-10">
                                <p className="text-4xl text-yellow-600 py-5 mb-5">
                                    Web Development Solutions
                                </p>
                                Developing websites, static or dynamic based on requirement
                                <br />
                                <br />

                            </div>
                        </div>
                    </Card>
                    <Card className="mb-10">
                        <div className="grid grid-cols-1 px-5 items-center gap-10">
                            <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="imgs/taas4.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="text-center px-10">
                                <p className="text-4xl text-yellow-600 py-5 mb-5">
                                    Chat Bot Solutions
                                </p>
                                From a Simple Lead Generation Chat bot , to Menu Driven, to completely AI Based Solutioning Chat bot, we have every solution at a click.
                                <br />
                                <br />

                            </div>
                        </div>
                    </Card>

                    <Card className="mb-10 ">
                        <div className="grid grid-cols-1 px-5 items-center gap-10">
                            <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="imgs/taas5.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="text-center px-10">
                                <p className="text-4xl text-yellow-600 py-5 mb-5">
                                    Mobile App development Solutions
                                </p>
                                IOS or Android, Informative or Ecommerce app, we have everything under one roof.
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
