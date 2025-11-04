"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-bg-dark/80 border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logo/Logo vecto1.svg"
              alt="Devlup"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-foreground">Devlup</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#fonctionnalites"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Fonctionnalités
            </a>
            <a
              href="/#tarifs"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Tarifs
            </a>
            <a
              href="/#temoignages"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Témoignages
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button className="bg-orange-gradient hover:scale-105 transition-transform">
              Essai gratuit
            </Button>
            <StoreButtons size="sm" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              <a
                href="/#fonctionnalites"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Fonctionnalités
              </a>
              <a
                href="/#tarifs"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tarifs
              </a>
              <a
                href="/#temoignages"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Témoignages
              </a>
              <div className="flex flex-col gap-3 pt-4">
                <Button className="bg-orange-gradient">
                  Essai gratuit
                </Button>
                <StoreButtons size="md" className="justify-center pt-2" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
