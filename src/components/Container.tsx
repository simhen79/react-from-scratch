import type { Props } from '../types';

export function Container({children}: Props) {
  return (
    <div className="mx-auto max-w-5xl p-4 md:p-8">
      {children}
    </div>
  );
}
