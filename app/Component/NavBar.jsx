"use client"
import { useState } from "react";

// NavBar Component
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="bg-[#5D4037] text-[#FAF4F0] py-4 px-6 shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold cursor-pointer italic">MK <span className="text-xl">concept</span></span>
          <div className="hidden md:flex space-x-6">
            <span className="font-bold opacity-50">Projects</span>
            <span className="font-bold opacity-50">About</span>
            <span className="font-bold opacity-50">Contact</span>
          </div>
          <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-[#5D4037] text-center shadow-lg">
            <span className="block py-3 font-bold opacity-50">Projects</span>
            <span className="block py-3 font-bold opacity-50">About</span>
            <span className="block py-3 font-bold opacity-50">Contact</span>
          </div>
        )}
      </nav>
    );
}