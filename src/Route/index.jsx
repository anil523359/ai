import React from "react";
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { authRoutes } from "./AuthRoutes";
import LandingLayout from "pages/Layout/LandingLayout";
import HomePage from "../pages/LandingPage/Home";
import PresalePage from "pages/LandingPage/PresalePage";
import PersonalPage from "pages/LandingPage/PersonalPage";
import BusinessPage from "pages/LandingPage/BusinessPage";
import PredictiveAIPage from "pages/LandingPage/PredictiveAIPage";
import DePINPage from "pages/LandingPage/DePINPage";
import CommunityPage from "pages/LandingPage/CommunityPage";
import BlogPage1 from "components/blogPages/BlogPage1";
import BlogPage2 from "components/blogPages/BlogPage2";
import BlogPage3 from "components/blogPages/BlogPage3";
import BlogPage4 from "components/blogPages/BlogPage4";
import BlogPage5 from "components/blogPages/BlogPage5";
import BlogPage6 from "components/blogPages/BlogPage6";

const Routers = () => {
  const login = useState(JSON.parse(localStorage.getItem("login")))[0];

  const [authenticated, setAuthenticated] = useState(false);
  const jwt_token = localStorage.getItem("token");

  return (
    <BrowserRouter basename={"/"}>
      {/* <Suspense> */}
      <Routes>
        {authRoutes.map(({ path, Component }, i) => (
          <Route path={path} element={Component} key={i} />
        ))}
        {/* <Route path={`/`} element={<LandingpPage />} /> */}
        <Route path={`/`} element={<LandingLayout />}>
          <Route path={`/`} element={<HomePage />} />
          <Route path={`/presale`} element={<PresalePage />} />
          <Route path={`/personal`} element={<PersonalPage />} />
          <Route path={`/business`} element={<BusinessPage />} />
          <Route path={`/predictive-ai`} element={<PredictiveAIPage />} />
          <Route path={`/depin`} element={<DePINPage />} />
          <Route path={`/community`} element={<CommunityPage />} />
          <Route path={`/community/blog-1`} element={<BlogPage1 />} />
          <Route path={`/community/blog-2`} element={<BlogPage2 />} />
          <Route path={`/community/blog-3`} element={<BlogPage3 />} />
          <Route path={`/community/blog-4`} element={<BlogPage4 />} />
          <Route path={`/community/blog-5`} element={<BlogPage5 />} />
          <Route path={`/community/blog-6`} element={<BlogPage6 />} />
        </Route>
        {/* <Route path={`/presale`} element={<PresaleLayout />}>
            {employeeRoutes.map(({ path, Component }, i) => (
              <Route  path={path} element={Component} key={i} />
            ))}
          </Route>
          <Route path={`/admin`} element={<AdminLayout />}>
            {adminRoutes.map(({ path, Component }, i) => (
              <Route path={path} element={Component} key={i} />
            ))}
          </Route> */}
        {/* <Route path={`*`} element={<Navigate to={`/`} />} /> */}
      </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  );
};

export default Routers;
