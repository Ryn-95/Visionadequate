export const NetflixLogo = ({ className }: { className?: string }) => (
  <img src="/assets/partenaires/netflix.svg" alt="Netflix" className={className} />
);

export const CanalPlusLogo = ({ className }: { className?: string }) => (
  <img src="/assets/partenaires/canal.svg" alt="Canal+" className={className} />
);

export const ArteLogo = ({ className }: { className?: string }) => (
  <img src="/assets/partenaires/arte.svg" alt="Arte" className={className} />
);

export const A24Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 30" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <text x="50" y="22" fontFamily="sans-serif" fontSize="24" fontWeight="900" textAnchor="middle" letterSpacing="-1">A24</text>
  </svg>
);

export const HBOLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 30" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <text x="50" y="22" fontFamily="sans-serif" fontSize="24" fontWeight="900" textAnchor="middle" letterSpacing="-2">HBO</text>
    <circle cx="69" cy="14" r="3" fill="currentColor" />
    <circle cx="69" cy="14" r="1.5" fill="#fff" />
  </svg>
);
