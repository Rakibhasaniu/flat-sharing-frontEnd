"use client"
import React from 'react';
import Button from '@mui/material/Button';
import Navbar from '@/components/Shared/Navbar/Navbar';
import Footer from '@/components/Shared/Footer/Footer';
import HeroSection from '@/components/Ui/HomePage/HeroSection/HeroSection';
import AllFlats from '@/components/Ui/HomePage/HeroSection/AllFlats';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AllFlats />

    </>
  );
};

export default HomePage;