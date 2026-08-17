'use client';

import { achievementTwoData } from "@/db/achievementTwoData";

const AchievementTwo = () => {
    return (
        <section className="achievement-section-2 fix section-padding">
            <div className="container">
                <div className="achievement-wrapper-2">
                    <div className="row g-4">
                        {achievementTwoData.map((item, index) => (
                            <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                                <div className="achievement-items">
                                    <div className="icon">
                                        <img src={item.icon} alt="icon" />
                                    </div>
                                    <div className="content">
                                        <h2>
                                            <span className="count">{item.count}</span>+
                                        </h2>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementTwo;