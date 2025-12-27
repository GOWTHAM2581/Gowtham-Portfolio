import React from 'react';
import './SubmarineAnimation.css';

export default function SubmarineAnimation({ category }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
            <h3 className="text-2xl font-bold text-[#F97316] mb-8 animate-pulse text-center px-4">
                {category} Projects Coming Soon...
            </h3>

            <div className="sea">
                <div className="circle-wrapper">
                    <div className="bubble"></div>
                    <div className="submarine-wrapper">
                        <div className="submarine-body">
                            <div className="window"></div>
                            <div className="engine"></div>
                            <div className="light"></div>
                        </div>
                        <div className="helix"></div>
                        <div className="hat">
                            <div className="leds-wrapper">
                                <div className="periscope"></div>
                                <div className="leds"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
