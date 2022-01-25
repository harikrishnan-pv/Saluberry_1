import React from 'react'
import { Helmet } from 'react-helmet'


export default function Contact() {
    return (
        <div>
            <div className="hidden md:flex contact">
            </div>
            <div className="contactm  md:hidden"></div>
            <div className="back">
                <div className="md:p-10 mx-10">
                    <div class="sm:mt-0">
                        <div class="md:grid md:grid-cols-1 md:max-w-4xl mx-auto md:gap-6">
                            <div>
                                <div className="md:text-5xl text-3xl text-yellow-600 text-center mb-10">
                                    Ready to connect with us? Let's make magic happen!
                                </div>
                                <div className="md:text-2xl  text-justify max-w-4xl mx-auto leading-normal italic mb-10">
                                    Let this be the start of something new. A relationship that adds value and creates opportunities to stand out.

                                    We're here to help you grow your audience.
                                </div>
                            </div>
                            <div class="mt-5 md:mt-0 shadow-xl bg-gray-200 md:col-span-2">
                                <iframe title="contact us" src="https://docs.google.com/forms/d/e/1FAIpQLScTc5_PzkgobvjP5t-XMdD7vtzk8VImh6V2Pbkc3VNCry4BhA/viewform?embedded=true" className="mx-auto" width="640" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                            </div>
                            <div  id="join">
                                <div className="md:text-5xl text-3xl mt-10 text-yellow-600 pt-10 text-center mb-10">
                                    Join Our Team
                                </div>
                                <div className="md:text-2xl  text-center leading-normal max-w-4xl mx-auto italic mb-10">

                                    Playing alone isn't fun and working alone isn't smart!
                                    <br />

                                    All creative minds are welcomed here with open arms. Whether you are a marketeer, professional storyteller, videographer, web developer or writer. We are open to exploring partnership opportunities that promise growth to everyone with who we strike a deal!
                                    <br />
                                    <div className="text-yellow-600">
                                        Get in touch!
                                    </div>
                                </div>
                            </div>
                            <Helmet>
                                <script async defer src="https://formfacade.com/include/114019179945757128335/form/1FAIpQLSdni1tUmDav-O6U9FwflZoWdLJY_-ko3AFy_SnEH74T38ZNtg/bootstrap.js?div=ff-compose"></script>
                            </Helmet>
                            <div class="mt-5 shadow-lg md:mt-0 bg-gray-200 rounded py-10 md:col-span-2">
                                <div class="container px-20" id="ff-compose"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
