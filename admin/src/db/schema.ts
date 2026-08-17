import { pgTable, text, serial, integer, boolean, timestamp } from 'drizzle-orm/pg-core';

export const adminUsers = pgTable('admin_users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  name: text('name').notNull(),
  role: text('role').default('admin'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const homeSlides = pgTable('home_slides', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  heading: text('heading').notNull(),
  description: text('description').notNull(),
  image: text('image').notNull(),
  link: text('link').default('/'),
  displayOrder: integer('display_order').default(0),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const aboutContent = pgTable('about_content', {
  id: serial('id').primaryKey(),
  sectionSubtitle: text('section_subtitle').default('About Us'),
  mainHeading: text('main_heading').notNull(),
  description: text('description').notNull(),
  aboutImage1: text('about_image1'),
  aboutImage2: text('about_image2'),
  experienceYears: text('experience_years').default('60+'),
  reliabilityTitle: text('reliability_title').default('Reliability and Performance'),
  reliabilityDesc: text('reliability_desc').default('Proven solar solutions delivering consistent, high-efficiency performance.'),
  supportTitle: text('support_title').default('BrightSun Support'),
  supportDesc: text('support_desc').default('Complete support from installation to after-sales service.'),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  icon: text('icon').default('SolarPanelIcon'),
  image: text('image'),
  category: text('category').default('Solar Energy'),
  link: text('link').default('/service-details'),
  delay: text('delay').default('.3'),
  active: integer('active').default(0),
  content: text('content'),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  category: text('category').notNull(),
  image: text('image').notNull(),
  link: text('link').default('/project-details'),
  delay: text('delay').default('.3'),
  location: text('location'),
  description: text('description'),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const teamMembers = pgTable('team_members', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  role: text('role').notNull(),
  description: text('description').notNull(),
  image: text('image').notNull(),
  facebookLink: text('facebook_link').default(''),
  instagramLink: text('instagram_link').default(''),
  linkedinLink: text('linkedin_link').default(''),
  delay: text('delay').default('.3'),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const contactInfo = pgTable('contact_info', {
  id: serial('id').primaryKey(),
  phone: text('phone').notNull(),
  email: text('email').notNull(),
  address: text('address').notNull(),
  workingHours: text('working_hours').default('7/24'),
  mapUrl: text('map_url').default(''),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const contactMessages = pgTable('contact_messages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  subject: text('subject'),
  message: text('message').notNull(),
  isRead: integer('is_read').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});
