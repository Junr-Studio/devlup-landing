import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="bg-fg-dark border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/assets/logo/Logo vecto1.svg"
              alt="Devlup"
              width={120}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-foreground/60 text-sm max-w-md">
              La solution de gestion et suivi pour écoles de tennis.
              Simplifiez votre enseignement, engagez vos élèves.
            </p>
          </div>

          {/* Liens */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Produit</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#fonctionnalites"
                  className="text-foreground/60 hover:text-foreground transition-colors text-sm"
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link
                  href="/#tarifs"
                  className="text-foreground/60 hover:text-foreground transition-colors text-sm"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/#temoignages"
                  className="text-foreground/60 hover:text-foreground transition-colors text-sm"
                >
                  Témoignages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              {/* Réseaux sociaux */}
              <li>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/devlup.nc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/devlup.nc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                </div>
              </li>
              <li>
                <a
                  href="mailto:contact@devlup.fr"
                  className="text-foreground/60 hover:text-foreground transition-colors text-sm"
                >
                  contact@devlup.fr
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-foreground transition-colors text-sm"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Devlup. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a
              href="/mentions-legales"
              className="text-foreground/60 hover:text-foreground transition-colors text-sm"
            >
              Mentions légales
            </a>
            <a
              href="/confidentialite"
              className="text-foreground/60 hover:text-foreground transition-colors text-sm"
            >
              Politique de confidentialité
            </a>
            <a
              href="/cgu"
              className="text-foreground/60 hover:text-foreground transition-colors text-sm"
            >
              CGU/CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
