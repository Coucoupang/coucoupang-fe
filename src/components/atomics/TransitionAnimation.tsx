/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import React, { Key, ReactElement, useEffect, useRef, useState } from 'react';

interface TransitionAnimation {
  ['data-key']: Key;
  wrapperCss?: Interpolation<Theme>;
  classNames: string;
  children: ReactElement[];
}

type TransitionStatus = 'VISIBLE' | 'HIDDEN';

interface TransitionItem {
  status: TransitionStatus;
  item: ReactElement;
}

const TransitionAnimation = (props: TransitionAnimation) => {
  const childrenRef = useRef<TransitionItem[]>([]);
  const [items, setItems] = useState<ReactElement[]>([]);

  const removeItem = (item: ReactElement) => {
    setItems((items) => items.filter((i) => i !== item));
  };

  useEffect(() => {
    childrenRef.current = props.children.map((child) => {
      if (child.key === props['data-key']) setItems([child]);
      return {
        status: child.key === props['data-key'] ? 'VISIBLE' : 'HIDDEN',
        item: (
          <div key={child.key} className="toRight" css={props.wrapperCss}>
            {child}
          </div>
        ),
        clone: null,
        ref: null,
      };
    });
  }, []);

  useEffect(() => {
    childrenRef.current.some((child) => {
      if (child.item.key === props['data-key']) {
        if (child.status !== 'VISIBLE') {
          child.status = 'VISIBLE';

          const clone = React.cloneElement(child.item, {
            ref: (ref: HTMLDivElement) => {
              if (!ref) return;
              ref.classList.remove('toRight');
              ref.classList.add('toRight-enter');
              ref.offsetTop;
              ref.classList.remove('toRight-enter');
              ref.classList.add('toRight');

              ref.addEventListener('transitionend', (e) => {
                if (e.target !== ref) return;
                removeItem(clone);
              });
            },
          });

          setItems((items) => [...items, clone]);
        }
        return true;
      }
      return false;
    });

    return () => {
      childrenRef.current.some((child) => {
        if (child.item.key === props['data-key']) {
          if (child.status !== 'HIDDEN') {
            child.status = 'HIDDEN';
            const clone = React.cloneElement(child.item, {
              ref: (ref: HTMLDivElement) => {
                if (!ref) return;
                ref.offsetTop;
                ref.classList.add('toRight-exit');
                ref.addEventListener('transitionend', (e) => {
                  if (e.target !== ref) return;
                  removeItem(clone);
                });
              },
            });

            setItems((items) => [...items.filter((item) => item !== child.item), clone]);
          }
          return true;
        }
        return false;
      });
    };
  }, [props['data-key']]);

  return <>{items}</>;
};

export default TransitionAnimation;
