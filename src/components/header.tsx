import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { AuthModal } from './auth/AuthModal';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleAuthClick = () => {
    setIsAuthModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed w-full backdrop-blur-sm border-b z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 border-gray-800' : 'bg-transparent border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold text-white">Ultron Eye</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('shadow-ai')}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Shadow AI
              </button>
              <button
                onClick={() => scrollToSection('workflow')}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Pricing
              </button>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <>
                  <Button 
                    variant="ghost" 
                    className="text-gray-300 hover:text-purple-400"
                    onClick={() => navigate('/dashboard')}
                  >
                    Dashboard
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="text-gray-300 hover:text-purple-400"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="ghost" 
                    className="text-gray-300 hover:text-purple-400"
                    onClick={handleAuthClick}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={handleAuthClick}
                  >
                    Get Started
                  </Button>
                </>
              )}
            </div>

            <button
              className="md:hidden text-gray-300 hover:text-purple-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('shadow-ai')}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Shadow AI
                </button>
                <button
                  onClick={() => scrollToSection('workflow')}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Pricing
                </button>
                <div className="flex flex-col gap-2 pt-4">
                  {user ? (
                    <>
                      <Button 
                        variant="ghost" 
                        className="text-gray-300 hover:text-purple-400 w-full"
                        onClick={() => navigate('/dashboard')}
                      >
                        Dashboard
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="text-gray-300 hover:text-purple-400 w-full"
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        variant="ghost" 
                        className="text-gray-300 hover:text-purple-400 w-full"
                        onClick={handleAuthClick}
                      >
                        Sign In
                      </Button>
                      <Button 
                        className="bg-purple-600 hover:bg-purple-700 w-full"
                        onClick={handleAuthClick}
                      >
                        Get Started
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
}