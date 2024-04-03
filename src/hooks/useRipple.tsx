/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React, { useEffect, useState } from 'react';

interface useRippleProps<T> {
  ref: React.RefObject<T>;
  color?: string;
  duration?: number;
}

const rippleAnimation = keyframes`
  from {
    opacity: 1;

    transform: scale(1);
  }
  to {
    opacity: 0;

    transform: scale(16);
  }
`;

const rippleCss = (duration: number) => css`
  position: absolute;

  border-radius: 50%;

  opacity: 0;

  animation: ${rippleAnimation} ${duration}ms ease;

  pointer-events: none;
`;

const useRipple = <T extends HTMLElement>({
  ref,
  color = '#ffffff54',
  duration = 1000,
}: useRippleProps<T>) => {
  const [ripples, setRipples] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLElement)) return;
      const rect = e.target.getBoundingClientRect();

      const ripple = (
        <div
          ref={(ref) => {
            ref?.addEventListener('animationend', (e) => {
              if (e.target !== ref) return;
              setRipples((ripples) => ripples.slice(1));
            });
          }}
          css={rippleCss(duration)}
          style={{
            top: `${e.clientY - rect.top}px`,
            left: `${e.clientX - rect.left}px`,
            width: `${Math.max(e.target.offsetWidth, e.target.offsetHeight) / 8}px`,
            height: `${Math.max(e.target.offsetWidth, e.target.offsetHeight) / 8}px`,
            backgroundColor: color,
          }}
          key={Number(ripples.at(-1)?.key || 0) + 1}
        ></div>
      );

      setRipples((ripples) => [...ripples, ripple]);
    };

    ref.current.addEventListener('mousedown', handleMouseDown);

    return () => {
      ref.current?.removeEventListener('mousedown', handleMouseDown);
    };
  }, [ref.current, ripples]);

  return {
    ripple: ripples,
  };
};

export default useRipple;
