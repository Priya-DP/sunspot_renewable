import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import bcrypt from 'bcryptjs';
import * as schema from './schema';
import { eq } from 'drizzle-orm';

const connectionString =
  process.env.DATABASE_URL ||
  'postgresql://neondb_owner:npg_aZDCO8oPL1vt@ep-silent-leaf-ay9x4u72-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

console.log('Connecting & Seeding Neon PostgreSQL database at console.neon.tech...');
const sql = neon(connectionString);
const db = drizzle(sql, { schema });

async function main() {
  // Create tables using individual SQL queries
  await sql`
    CREATE TABLE IF NOT EXISTS admin_users (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      name TEXT NOT NULL,
      role TEXT DEFAULT 'admin',
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS home_slides (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      heading TEXT NOT NULL,
      description TEXT NOT NULL,
      image TEXT NOT NULL,
      link TEXT DEFAULT '/',
      display_order INTEGER DEFAULT 0,
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS about_content (
      id SERIAL PRIMARY KEY,
      section_subtitle TEXT DEFAULT 'About Us',
      main_heading TEXT NOT NULL,
      description TEXT NOT NULL,
      about_image1 TEXT,
      about_image2 TEXT,
      experience_years TEXT DEFAULT '60+',
      reliability_title TEXT DEFAULT 'Reliability and Performance',
      reliability_desc TEXT DEFAULT 'Proven solar solutions delivering consistent, high-efficiency performance.',
      support_title TEXT DEFAULT 'BrightSun Support',
      support_desc TEXT DEFAULT 'Complete support from installation to after-sales service.',
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS services (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      icon TEXT DEFAULT 'SolarPanelIcon',
      image TEXT,
      category TEXT DEFAULT 'Solar Energy',
      link TEXT DEFAULT '/service-details',
      delay TEXT DEFAULT '.3',
      active INTEGER DEFAULT 0,
      content TEXT,
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS projects (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      image TEXT NOT NULL,
      link TEXT DEFAULT '/project-details',
      delay TEXT DEFAULT '.3',
      location TEXT,
      description TEXT,
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS team_members (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      description TEXT NOT NULL,
      image TEXT NOT NULL,
      facebook_link TEXT DEFAULT '',
      instagram_link TEXT DEFAULT '',
      linkedin_link TEXT DEFAULT '',
      delay TEXT DEFAULT '.3',
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS contact_info (
      id SERIAL PRIMARY KEY,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      address TEXT NOT NULL,
      working_hours TEXT DEFAULT '7/24',
      map_url TEXT DEFAULT '',
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      subject TEXT,
      message TEXT NOT NULL,
      is_read INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  console.log('Tables created or verified in Neon PostgreSQL!');

  // 1. Seed Admin User
  const users = await db.select().from(schema.adminUsers).where(eq(schema.adminUsers.username, 'admin'));
  if (users.length === 0) {
    const hash = bcrypt.hashSync('admin123', 10);
    await db.insert(schema.adminUsers).values({
      username: 'admin',
      passwordHash: hash,
      name: 'Super Admin',
      role: 'admin',
    });
    console.log('Seeded initial admin user into Neon DB: username=admin, password=admin123');
  }

  // 2. Seed Home Slides
  const slides = await db.select().from(schema.homeSlides);
  if (slides.length === 0) {
    await db.insert(schema.homeSlides).values([
      {
        title: 'WELCOME TO THE SUNSPOT RENEWABLE ENERGY',
        heading: 'Power For <br /> A Sustainable Future <br /> with Solar Energy',
        description: 'Harness the power of the sun to create clean, reliable, and cost-effective energy. Our solar solutions help reduce carbon emissions, lower electricity bills, and build a sustainable future for homes and businesses.',
        image: '/img/hero/hero-8.jpg',
        link: '/',
        displayOrder: 1,
      },
      {
        title: 'WELCOME TO THE SUNSPOT RENEWABLE ENERGY',
        heading: 'Powering the Future <br /> with Our Renewable <br /> Solar Energy',
        description: 'We deliver advanced solar energy solutions designed for efficiency and long-term performance. From residential rooftops to large-scale projects, our renewable systems provide dependable power while protecting the environment.',
        image: '/img/hero/hero.jpg',
        link: '/',
        displayOrder: 2,
      },
    ]);
    console.log('Seeded Home slides into Neon DB');
  }

  // 3. Seed About Content
  const about = await db.select().from(schema.aboutContent);
  if (about.length === 0) {
    await db.insert(schema.aboutContent).values({
      sectionSubtitle: 'About Us',
      mainHeading: 'Welcome To Sunspot Renewable Energy System',
      description: 'SUNSPOT Renewable Engineering is backed by a highly qualified team of engineers, designers, and certified project managers. With years of industry experience, our team delivers reliable solar solutions that build trust and long-term value for our clients.',
      aboutImage1: '/img/about/about3.jpeg',
      aboutImage2: '/img/about/about1.jpg',
      experienceYears: '60+',
      reliabilityTitle: 'Reliability and Performance',
      reliabilityDesc: 'Proven solar solutions delivering consistent, high-efficiency performance.',
      supportTitle: 'BrightSun Support',
      supportDesc: 'Complete support from installation to after-sales service.',
    });
    console.log('Seeded About content into Neon DB');
  }

  // 4. Seed Services
  const servs = await db.select().from(schema.services);
  if (servs.length === 0) {
    await db.insert(schema.services).values([
      { title: 'Solar PV Modules', description: 'High efficiency solar modules for reliable power generation', icon: 'SolarPanelIcon', active: 0, delay: '.3' },
      { title: 'Solar Power Plant', description: 'Complete megawatt scale solar power plant solutions', icon: 'SolarPowerPlantIcon', active: 1, delay: '.5' },
      { title: 'Solar RoofTop Plant', description: 'Customized rooftop solar systems for commercial applications', icon: 'RooftopSolarIcon', active: 0, delay: '.7' },
      { title: 'Solar Ground Mounted', description: 'Large scale ground mounted solar installations with efficiency', icon: 'GroundMountedIcon', active: 0, delay: '.9' },
      { title: 'Solar Water Pump', description: 'Energy efficient solar pumping solutions for agriculture needs', icon: 'WaterPumpIcon', active: 0, delay: '.3' },
      { title: 'Solar Water Heater', description: 'Cost effective solar water heating systems for daily use', icon: 'WaterHeaterIcon', active: 0, delay: '.5' },
      { title: 'Solar Street Light', description: 'Standalone solar street lighting systems for public spaces', icon: 'StreetLightIcon', active: 0, delay: '.7' },
      { title: 'Solar Fencing', description: 'Solar powered fencing systems for agricultural land protection', icon: 'SolarFencingIcon', active: 0, delay: '.9' },
      { title: 'Solar Lanterns', description: 'Portable solar lanterns providing reliable off grid lighting', icon: 'SolarLanternIcon', active: 0, delay: '.9' },
    ]);
    console.log('Seeded Services into Neon DB');
  }

  // 5. Seed Projects
  const projs = await db.select().from(schema.projects);
  if (projs.length === 0) {
    await db.insert(schema.projects).values([
      { title: 'Solar Industry in Chennai', category: 'Solar energy', image: '/img/project/01.jpg', delay: '.3' },
      { title: 'Greener Planet', category: 'Solar energy', image: '/img/project/02.jpg', delay: '.5' },
      { title: 'Solar Industry in Tamilnadu', category: 'Solar energy', image: '/img/project/03.jpg', delay: '.7' },
      { title: 'Solar Power in Cbe', category: 'Hybrid energy', image: '/img/project/04.jpg', delay: '.9' },
      { title: 'Clean Energy Systems', category: 'Solar energy', image: '/img/project/02.jpg', delay: '.3' },
    ]);
    console.log('Seeded Projects into Neon DB');
  }

  // 6. Seed Team Members
  const tm = await db.select().from(schema.teamMembers);
  if (tm.length === 0) {
    await db.insert(schema.teamMembers).values([
      {
        name: 'MR.GANESHKUMAR',
        role: 'General Manager',
        description: 'MR.GANESHKUMAR has over 10 years of experience in the solar industry and is a visionary leader known for strategic thinking, strong analytical skills, and excellent problem-solving abilities.',
        image: '/img/team/hover-1.png',
        delay: '.3',
      },
      {
        name: 'MR.PRATHAP',
        role: 'Project Manager',
        description: 'MR.PRATHAP is an electrical engineer with 5+ years of experience in solar projects and solar panel installation',
        image: '/img/team/hover-1.png',
        delay: '.5',
      },
      {
        name: 'MR.CHANDRAN',
        role: 'Purchase Manager',
        description: 'MR.CHANDRAN holds a B.Com degree and has 10+ years of experience in procurement, inventory management, vendor relations, and SAP PP.',
        image: '/img/team/hover-1.png',
        delay: '.7',
      },
      {
        name: 'MR.MATHIVANAN',
        role: 'Finance Head',
        description: 'Mr. Mathivanan manages accounting, auditing, taxation, budgeting, and financial compliance at Sunspot Solar.',
        image: '/img/team/hover-1.png',
        delay: '.9',
      },
      {
        name: 'MR.JAWAHAR',
        role: 'Sales Head',
        description: 'Mr. Jawahar holds a B.Com degree and has 13+ years of experience in sales, leading business development and sales strategy at Sunspot Solar.',
        image: '/img/team/hover-1.png',
        delay: '.11',
      },
    ]);
    console.log('Seeded Team members into Neon DB');
  }

  // 7. Seed Contact Info
  const ci = await db.select().from(schema.contactInfo);
  if (ci.length === 0) {
    await db.insert(schema.contactInfo).values({
      phone: '+91-9094179527/9103',
      email: 'sunspotengineering@gmail.com',
      address: 'S.No 8, Ponneri High Road, Manali New Town, Tamil Nadu-600 103',
      workingHours: 'Call Us 7/24',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.8966952758135!2d80.25268487484496!3d13.169123887164998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526fb4c46faefb%3A0x67ee0a1f0a8e7a0!2sManali%20New%20Town%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    });
    console.log('Seeded Contact Info into Neon DB');
  }

  console.log('Neon PostgreSQL Database seeding complete!');
}

main().catch((err) => {
  console.error('Seed error:', err);
  process.exit(1);
});
