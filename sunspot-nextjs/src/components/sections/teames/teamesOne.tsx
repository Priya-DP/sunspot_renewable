'use client';

import React, { useState, useEffect } from 'react';
import { teamMembersOneData, TeamMemberDataType } from "@/db/teamMembersOneData";
import SectionTitle from '@/components/ui/sectionTitle';
import Link from 'next/link';
import { fetchTeamContent } from '@/lib/api';

const TeamesOne = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMemberDataType[]>(teamMembersOneData);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const loadTeam = () => {
        fetchTeamContent().then((data) => {
            if (data && data.length > 0) {
                const formatted = data.map((m: {
                  id: number;
                  name: string;
                  role: string;
                  description: string;
                  image: string;
                  facebookLink?: string;
                  instagramLink?: string;
                  linkedinLink?: string;
                  delay?: string;
                }) => ({
                  id: m.id,
                  name: m.name,
                  role: m.role,
                  description: m.description,
                  image: m.image || '/img/team/hover-1.png',
                  socialLinks: [
                    { icon: 'fab fa-facebook-f', link: m.facebookLink || '#' },
                    { icon: 'fab fa-instagram', link: m.instagramLink || '#' },
                    { icon: 'fab fa-linkedin-in', link: m.linkedinLink || '#' },
                  ],
                  delay: m.delay || '.3',
                }));
                setTeamMembers(formatted);
            }
        });
    };

    useEffect(() => {
        loadTeam();
        const interval = setInterval(loadTeam, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleMouseMove = (event: React.MouseEvent, index: number) => {
        setHoveredIndex(index);
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <section id="team" className="team-section fix section-padding">
            <div className="left-shape">
                <img src="/img/team/left-shape.png" alt="shape-img" />
            </div>
            <div className="right-shape">
                <img src="/img/team/right-shape.png" alt="shape-img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle>Team Members</SectionTitle.SubTitle>
                        <SectionTitle.Title>
                            Our Dedicated Team <br /> Members
                        </SectionTitle.Title>
                    </SectionTitle>
                    <Link href="/team" className="theme-btn wow slideUp" data-delay=".5">
                        <span>
                            All Member
                            <i className="fa-solid fa-arrow-right-long" />
                        </span>
                    </Link>
                </div>

                <div className="team-wrapper">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className="team-items"
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="team-title">
                                <h4>
                                    <Link href="/team">{member.name}</Link>
                                </h4>
                                <p>{member.role}</p>
                            </div>

                            <p>{member.description}</p>

                            <div className="social-profile">
                                <ul>
                                    {member.socialLinks.map((social, i) => (
                                        <li key={i}>
                                            <a href={social.link}>
                                                <i className={social.icon} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <span className="plus-btn">
                                    <i className="fa-solid fa-plus" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hover Image Tracking Cursor */}
            {hoveredIndex !== null && (
                <div
                    className="hover-image"
                    style={{
                        left: `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`,
                        position: 'fixed',
                        pointerEvents: 'none',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 9999,
                    }}
                >
                    <img
                        src={teamMembers[hoveredIndex].image}
                        alt={teamMembers[hoveredIndex].name}
                        style={{ width: '150px', borderRadius: '10px' }}
                    />
                </div>
            )}
        </section>
    );
};

export default TeamesOne;