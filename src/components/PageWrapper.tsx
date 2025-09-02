import type { Props } from './../types';

export function PageWrapper({children}: Props) {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
      {children}
    </div>
  );
}