'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchTeamContent } from '@/lib/api';

const TeamesThree = () => {
    const [team, setTeam] = useState<any[]>([]);

    useEffect(() => {
        fetchTeamContent().then((data) => {
            if (data) setTeam(data);
        });
    }, []);

    return (
        <section className="team-section-3 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    {team.map((member) => (
                        <div key={member.id} className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-team-items">
                                <div className="team-image">
                                    <img src={member.image || '/img/team/01.jpg'} alt={member.name} />
                                    <div className="social-profile">
                                        <ul>
                                            <li><a href={member.facebookLink || '#'}><i className="fab fa-facebook-f" /></a></li>
                                            <li><a href={member.instagramLink || '#'}><i className="fab fa-instagram" /></a></li>
                                            <li><a href={member.linkedinLink || '#'}><i className="fab fa-linkedin-in" /></a></li>
                                        </ul>
                                        <span className="plus-btn">
                                            <i className="fa-solid fa-plus" />
                                        </span>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link href="/team">{member.name}</Link>
                                    </h3>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamesThree;
