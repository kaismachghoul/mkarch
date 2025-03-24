"use client"
import { useState } from "react";
import Image from "next/image";

export default function ProjectPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-[#EDE0D4] text-[#5D4037] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center">
        <img 
          src="/5.jpg" 
          alt="Project Image" 
          fill = 'true'
          unoptimized ='true'
          className="brightness-75 object-cover"
        />
        <div className="absolute text-center">
          <h1 className="text-5xl font-bold text-[#FAF4F0]">Sunlit Serenity</h1>
          <p className="text-lg italic text-[#EDE0D4] mt-2">A home where history and sunlight weave a quiet elegance.</p>
          <p className="text-lg italic text-[#EDE0D4] mt-2"><span className="text-lg">Architecture : Prestige Events</span></p>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center m-8">Architectural Description</h2>
        <p className="text-lg leading-relaxed text-justify">
          This Mediterranean-inspired residence harmoniously blends <strong>traditional elements</strong> with <strong>modern functionality</strong>, creating a timeless and inviting retreat. Defined by its <strong>exposed brickwork, graceful arches, and terracotta roof tiles</strong>, the design captures the essence of rustic elegance while offering contemporary comfort.
        </p>
      </section>

      {/* Gallery Section with Clickable Images */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["/6.jpg", "/2.jpg", "/3.jpg", "/4.jpg","/6.jpg","/7.jpg"].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedImage(src)}>
              <img src={src} alt={`Project image ${index + 1}`} width={500} height={350} unoptimized = "true" className=" transition-transform transform hover:scale-105 w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0  bg-opacity-30 flex justify-center items-center z-50 backdrop-blur-lg">
          <div className="relative max-w-6xl w-full px-4">
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4  text-black px-3 py-2 cursor-pointer text-lg">✕</button>
            <Image src={selectedImage} alt="Selected Project Image" width={900} height={600} className="w-full h-auto  shadow-lg" />
          </div>
        </div>
      )}

      {/* Project Details */}
      <section className="bg-[#C26D45] text-[#FAF4F0] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Project Details</h2>
          <p className="mt-4 text-lg leading-relaxed">A seamless fusion of <strong>handcrafted materials</strong>, <strong>timeless architectural elements</strong>, and <strong>harmonious textures</strong> defines this residence. Designed for both elegance and functionality, the home offers an immersive experience of Mediterranean warmth and sophistication.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-lg">
            <div className="bg-[#EDE0D4] text-[#5D4037] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Year</h3>
              <p className="mt-2">2025</p>
            </div>
            <div className="bg-[#EDE0D4] text-[#5D4037] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Materials</h3>
              <p className="mt-2">Clay Tiles, Natural Bricks, Marble</p>
            </div>
            <div className="bg-[#EDE0D4] text-[#5D4037] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Location</h3>
              <p className="mt-2">Mediterranean Region</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold">Explore More Projects</h2>
        <p className="text-lg text-[#5D4037] mt-2">Discover other architectural masterpieces</p>
        <button className="mt-4 px-6 py-3 bg-[#6D8B74] text-white rounded-full shadow-md hover:bg-[#5A7662] transition-transform transform hover:scale-105">
          View Portfolio
        </button>
      </section>
    </div>
  );
}
