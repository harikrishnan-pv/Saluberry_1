import React from 'react'
import Card from '../components/Card'

export default function Story() {
    return (
        <div>
            <div className="story hidden md:block">
            </div>
            <div className="md:hidden storym">

            </div>
            <div className="back">
                <div className="max-w-6xl mx-auto text-2xl pb-10 mb-10">
                    <Card >
                        <div className="p-10 pt-1 pb-3 text-justify">
                            Started as a 1 man company back in 2014, where we couldn’t find a
                            Solution driven service in the marketing and sales aspect, to a
                            company of 70+ team currently serving ASIA, UAE, EUROPE regions
                            with expertise and experience in domains like SAAS Products
                            ( Software as a service ) , Ed Tech, Technological solutions,
                            AI ML Driven solutions, Web & app, Retail, FMCG, Distribution,
                            Logistics, Automotive, Food & Beverages, Health and Wellness,
                            Manufacturing
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
