'use client';

import { achievementOneData } from "@/db/achievementOneData";

const AchievementOne = () => {
    return (
        <section className="achievement-section fix section-padding bg-cover" style={{ backgroundImage: 'url("/img/achievement-bg.jpg")' }}>
            <div className="container">
                <div className="achievement-wrapper">
                    <div className="row g-4">
                        {achievementOneData.map((item, index) => (
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

export default AchievementOne;