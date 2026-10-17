import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[], offset = 100): string | null {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      let current: string | null = null;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop - offset;
        if (y > top && y <= top + el.offsetHeight) {
          current = id;
          break;
        }
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids, offset]);

  return activeId;
}
