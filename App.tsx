import React, { useState, useEffect } from 'react';
import { Cursor } from './components/ui/Cursor';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Gallery } from './components/Gallery';
import { Stack } from './components/Stack';
import { Footer } from './components/Footer';
import { ImageCropper } from './components/ui/ImageCropper';
import { Sidebar } from './components/Sidebar';
import { Navigation } from './components/Navigation';

function App() {
  // State for profile image management
  const [profileImage, setProfileImage] = useState<string>("/profile.png");
  const [isCropperOpen, setIsCropperOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string>("");

  // Load saved profile image from local storage on mount
  useEffect(() => {
    const savedImage = localStorage.getItem("portfolio_profile_img");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // Handle file selection from Hero component
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setUploadedImage(reader.result as string);
        setIsCropperOpen(true);
      });
      reader.readAsDataURL(file);
      // Reset input value to allow selecting same file again
      e.target.value = ''; 
    }
  };

  // Handle successful crop
  const handleCrop = (croppedImage: string) => {
    setProfileImage(croppedImage);
    localStorage.setItem("portfolio_profile_img", croppedImage);
    setIsCropperOpen(false);
    setUploadedImage("");
  };

  // Handle cancel crop
  const handleCancelCrop = () => {
    setIsCropperOpen(false);
    setUploadedImage("");
  };

  return (
    <div className="min-h-screen w-full bg-obsidian selection:bg-neon-purple/30 selection:text-white relative">
      
      {/* Custom Cursor (Desktop Only) */}
      <div className="hidden md:block">
        <Cursor />
      </div>

      {/* Floating Navigation (Visible on all screens) */}
      <Navigation />

      {/* Image Cropper Modal */}
      {isCropperOpen && (
        <ImageCropper 
          imageSrc={uploadedImage}
          onCancel={handleCancelCrop}
          onCrop={handleCrop}
        />
      )}

      {/* MAIN LAYOUT */}
      <div className="lg:flex">
        
        {/* LEFT COLUMN: Sidebar (Desktop Only) */}
        {/* Fixed height and sticky positioning for desktop scrolling effect */}
        <aside className="hidden lg:block w-[400px] h-screen sticky top-0 overflow-hidden border-r border-white/5 bg-charcoal/50 backdrop-blur-xl z-40">
          <Sidebar profileImage={profileImage} />
        </aside>

        {/* RIGHT COLUMN: Main Content */}
        <main className="flex-1 relative overflow-x-hidden">
          
          {/* Global Ambient Background Effects (Scoped to main content) */}
          <div className="fixed inset-0 z-[0] pointer-events-none bg-noise opacity-[0.015] mix-blend-overlay" />
          <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-neon-purple/20 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />
          <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-neon-blue/10 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />

          {/* Content Sections */}
          <div className="relative z-10">
            <Hero 
              profileImage={profileImage} 
              onImageSelect={handleImageSelect} 
            />
            <BentoGrid />
            <Stack />
            <Gallery />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;