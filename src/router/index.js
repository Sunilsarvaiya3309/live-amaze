// src/router/index.js
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/PageHome.vue";
import PageAbout from "@/pages/PageAbout.vue";
import PageCourse from "@/pages/PageCourse.vue";
import PageInstructor from "@/pages/PageInstructor.vue";
import PageTestimonials from "@/pages/PageTestimonials.vue";
import PagePricing from "@/pages/PagePricing.vue";
import PageGallery from "@/pages/PageGallery.vue";
import PageContact from "@/pages/PageContact.vue";
import PageEnroll from "@/pages/PageEnroll.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "Homepage",
    component: Home,
  },
  {
    path: "/about",
    name: "PageAbout",
    component: PageAbout,
  },
  {
    path: "/courses",
    name: "PageCourse",
    component: PageCourse,
  },
  {
    path: "/instructors",
    name: "PageInstructors",
    component: PageInstructor,
  },
  {
    path: "/testimonials",
    name: "Pagetestimonials",
    component: PageTestimonials,
  },
  {
    path: "/pricing",
    name: "PagePricing",
    component: PagePricing,
  },
  {
    path: "/gallery",
    name: "PageGallery",
    component: PageGallery,
  },
  {
    path: "/contact",
    name: "PageContact",
    component: PageContact,
  },
  {
    path: "/enroll",
    name: "PageEnroll",
    component: PageEnroll,
  },
];

const router = createRouter({
  history: createWebHashHistory(), // or createWebHashHistory()
  routes,
});

export default router;
