import RootLayout from "@/layout/root";
import Error from "@/pages/404";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import BlogDetails from "@/pages/blog-details";
import BlogStandard from "@/pages/blog-standard";
import Contact from "@/pages/contact";
import AdminLoginRedirect from "@/pages/login";
import Faq from "@/pages/faq";
import Home from "@/pages/home";
import HomeOneSingle from "@/pages/home-one-single";
import Pricing from "@/pages/pricing";
import Project from "@/pages/project";
import ProjectCarousel from "@/pages/project-carousel";
import ProjectDetails from "@/pages/project-details";
import Service from "@/pages/service";
import ServiceCarousel from "@/pages/service-carousel";
import ServiceDetails from "@/pages/service-details";
import Team from "@/pages/team";
import TeamCarousel from "@/pages/team-carousel";
import TeamDetails from "@/pages/team-details";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home-one-single",
        element: <HomeOneSingle />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/service-carousel",
        element: <ServiceCarousel />,
      },
      {
        path: "/service-details",
        element: <ServiceDetails />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/project-carousel",
        element: <ProjectCarousel />,
      },
      {
        path: "/project-details",
        element: <ProjectDetails />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/team-carousel",
        element: <TeamCarousel />,
      },
      {
        path: "/team-details",
        element: <TeamDetails />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/404",
        element: <Error />,
      },
      {
        path: "/news",
        element: <Blog />,
      },
      {
        path: "/news-standard",
        element: <BlogStandard />,
      },
      {
        path: "/news-details",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <AdminLoginRedirect />,
      },
      {
        path: "/admin",
        element: <AdminLoginRedirect />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
