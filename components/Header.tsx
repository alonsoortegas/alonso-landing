export default function Header() {
  return (
    <header className="flex flex-col items-center text-center space-y-3 pt-20 sm:pt-24">
      {/* Name and Pronouns */}
      <div className="space-y-1">
        <h1 className="text-4xl sm:text-5xl font-bold text-accent">Alonso Ortega</h1>
        <p className="text-sm text-accent/50">he/him</p>
      </div>

      {/* Tagline */}
      <p className="text-xl sm:text-2xl text-accent/90 font-medium pt-2">
        Product Engineer × Hybrid Athlete
      </p>
    </header>
  );
}
