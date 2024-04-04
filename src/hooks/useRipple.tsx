/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';

interface useRippleProps<T> {
  ref: React.RefObject<T>;
  color?: string;
  duration?: number;
}

const rippleCss = (duration: number) => css`
  position: absolute;

  border-radius: 50%;

  opacity: 1;

  transition: all ${duration}ms ease;

  pointer-events: none;
`;

const useRipple = <T extends HTMLElement>({
  ref,
  color = '#ffffff54',
  duration = 1000,
}: useRippleProps<T>) => {
  const [ripples, setRipples] = useState<React.ReactElement[]>([]);
  const ripplesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLElement)) return;
      const rect = e.target.getBoundingClientRect();
      const size = Math.max(e.target.offsetWidth, e.target.offsetHeight) / 8;
      const ripple = (
        <div
          ref={(ref) => {
            if (!ref) return;
            ref.offsetHeight;
            ref.style.borderRadius = '0';
            ref.style.transform = 'scale(16)';
            ref.style.opacity = '1';
            ripplesRef.current.push(ref);
          }}
          css={rippleCss(duration)}
          style={{
            top: `${e.clientY - rect.top - size / 2}px`,
            left: `${e.clientX - rect.left - size / 2}px`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
          }}
          key={Number(ripples.at(-1)?.key || 0) + 1}
        ></div>
      );

      setRipples((ripples) => [...ripples, ripple]);
    };

    const handleMouseUp = () => {
      if (!ripplesRef.current.length) return;
      const ref = ripplesRef.current[ripplesRef.current.length - 1];
      ref.style.opacity = '0';

      ref.addEventListener('transitionend', (e) => {
        if (ripplesRef.current[0] !== e.target) return;
        ripplesRef.current.shift();
        setRipples((ripples) => ripples.slice(1));
      });
    };

    ref.current.addEventListener('mousedown', handleMouseDown);
    ref.current.addEventListener('mouseup', handleMouseUp);
    ref.current.addEventListener('mouseout', handleMouseUp);

    return () => {
      ref.current?.removeEventListener('mousedown', handleMouseDown);
      ref.current?.removeEventListener('mouseup', handleMouseUp);
      ref.current?.removeEventListener('mouseout', handleMouseUp);
    };
  }, [ref.current, ripples]);

  return {
    ripple: ripples,
  };
};

export default useRipple;
