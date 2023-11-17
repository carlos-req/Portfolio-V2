import React from "react";
import Layout from "../Layout";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import ProjectPage from "../components/ProjectPage";
import { Route, createRoutesFromElements } from "react-router-dom";

export const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/:id" element={<ProjectPage />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
    {/*<Route path="*" element={} /> */}
  </Route>
);
