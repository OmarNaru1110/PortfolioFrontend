import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#EDE0D4]/95 backdrop-blur-sm border-b-2 border-[#C9A875] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-[#3D2817] hover:text-[#DC143C] transition-colors tracking-wide"
          >
            Omar Elnaggar
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#5C4033] hover:text-[#DC143C] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-[#5C4033] hover:text-[#DC143C] transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-[#5C4033] hover:text-[#DC143C] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-[#DC143C] text-[#F5E6D3] rounded hover:bg-[#B01030] transition-colors border-2 border-[#8B0000]"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#3D2817]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#EDE0D4] border-t border-[#C9A875]">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-[#5C4033] hover:text-[#DC143C] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-[#5C4033] hover:text-[#DC143C] transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-[#5C4033] hover:text-[#DC143C] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-6 py-2 bg-[#DC143C] text-[#F5E6D3] rounded hover:bg-[#B01030] transition-colors border-2 border-[#8B0000]"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
