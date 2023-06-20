import React from "react";
import { Header } from "../common/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../home/Home";
import { Footer } from "../common/Footer";
import { Details } from "../home/details/Details";
import { Testimonial } from "../home/testimonial/Testimonial";
import { Blog } from "../home/blog/Blog";

export const Pages = ({ cartItems }) => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home cartItems={cartItems} />} />
          <Route path="/cart/:id" element={<Details />} />
          <Route path="/about" element={<Testimonial />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Testimonial />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
