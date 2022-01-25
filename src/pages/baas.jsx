import React from 'react'
import Card from '../components/Card'

export default function Baas() {
    return (
        <div>
            <div className="baas hidden md:flex">
                <div class='ripple-background'>
                    <div class='circle xxlarge shade1'></div>
                    <div class='circle xlarge shade2'></div>
                    <div class='circle large shade3'></div>
                    <div class='circle mediun shade4'></div>
                    <div class='circle small shade5'></div>
                </div>
            </div>
            <div className="baasm md:hidden">
                
            </div>
            <section className="p-10 grid xl:grid-cols-2 max-w-7xl mx-auto grid-cols-1 px-10 items-center gap-10">
                <Card className="mb-10">
                    <div className="grid grid-cols-1 py-4 px-5 items-center gap-10">
                        <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                            <img src="imgs/baas1.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                        </div>
                        <div className="text-center px-10">
                            <p className="text-4xl text-yellow-600 py-5 mb-5">
                                Designs
                            </p>
                            First step towards Digital transformation, creating eye catchy and meaningful logos with deep meaning and which can leave an imprint.
                            <br />
                            <br />

                        </div>
                    </div>
                </Card>
                <Card className="mb-10">
                    <div className="grid grid-cols-1 px-5 items-center gap-10">
                        <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                            <img src="imgs/baas2.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                        </div>
                        <div className="text-center px-10">
                            <p className="text-4xl text-yellow-600 py-5 mb-5">
                                Company Profile & Presentation

                            </p>

                            Having a Company Profile and Presentation covering all the aspects of when it was born to where it is now, along with success stories is a definitive requirement, and we ace at it.
                            <br />
                            <br />

                        </div>
                    </div>
                </Card>
                <Card className="mb-10">
                    <div className="grid grid-cols-1 px-5 items-center gap-10">
                        <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                            <img src="imgs/baas3.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                        </div>
                        <div className="text-center px-10">
                            <p className="text-4xl text-yellow-600 py-5 mb-5">
                                Marketing designs
                            </p>
                            Design an appropriate marketing material covering all aspects, Flyers, Brochures, Visiting Cards, Letterheads, Booklets and Standees
                            <br />
                            <br />

                        </div>
                    </div>
                </Card>
                <Card className="mb-10">
                    <div className="grid grid-cols-1 px-5 items-center gap-10">
                        <div class=" w-full h-100  bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                            <img src="imgs/baas4.svg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
                        </div>
                        <div className="text-center px-10">
                            <p className="text-4xl text-yellow-600 py-5 mb-5">
                                Content Marketing Material

                            </p>

                            Content Creation with premium colour combination and appropriate result via, posters, reels, storyboard videos and short videos, includes a shoot & edit video too.
                            <br />
                            <br />

                        </div>
                    </div>
                </Card>
            </section>
        </div>
    )
}
