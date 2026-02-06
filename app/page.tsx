import Image from 'next/image';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import About from '@/components/About';
import LinkCard from '@/components/LinkCard';
import PrimaryCTA from '@/components/PrimaryCTA';

export default function Home() {
  const email = 'alonsoos@icloud.com';

  const links = [
    {
      icon: <Image src="/instagram.svg" alt="" width={24} height={24} />,
      title: 'Instagram',
      href: 'https://instagram.com/alonsoos',
      external: true,
    },
    {
      icon: <Image src="/strava.svg" alt="" width={24} height={24} />,
      title: 'Strava',
      href: 'https://www.strava.com/athletes/39308481',
      external: true,
    },
    {
      icon: <Image src="/linkedin-logo-svgrepo-com.svg" alt="" width={24} height={24} />,
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alonsoos/',
      external: true,
    },
    {
      icon: <Image src="/mail.svg" alt="" width={24} height={24} />,
      title: 'Email',
      href: `mailto:${email}`,
      external: false,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Pattern */}
      <Hero />

      {/* Main Content */}
      <div className="w-full max-w-landing mx-auto px-5 sm:px-6">
        {/* Profile Info */}
        <Header />

        {/* About Section */}
        <div className="mt-5">
          <About />
        </div>

        {/* Primary CTA */}
        <div className="mt-8">
          <PrimaryCTA href={`mailto:${email}`} />
        </div>

        {/* Links Section */}
        <nav className="mt-4 space-y-3 sm:space-y-4" aria-label="Social links">
          {links.map((link) => (
            <LinkCard
              key={link.href}
              icon={link.icon}
              title={link.title}
              href={link.href}
              external={link.external}
            />
          ))}
        </nav>

        {/* Footer */}
        <footer className="text-center space-y-2 mt-10 pb-8 text-accent/50 text-sm">
          <p>Remote worldwide</p>
          <p>© 2026 Alonso Ortega</p>
        </footer>
      </div>
    </main>
  );
}
