import React, { Key, ReactElement, useEffect, useRef, useState } from 'react';

interface TransitionAnimation {
  ['data-key']: Key;
  classNames: string;
  children: ReactElement[];
}

type TransitionStatus = 'VISIBLE' | 'HIDDEN' | 'FADEOUT' | 'FADEIN';

interface TransitionItem {
  status: TransitionStatus;
  item: ReactElement;
  clone: ReactElement | null;
}

const TransitionAnimation = (props: TransitionAnimation) => {
  const childrenRef = useRef<TransitionItem[]>([]);
  const [items, setItems] = useState<ReactElement[]>();

  console.log(childrenRef.current);

  useEffect(() => {
    childrenRef.current = props.children.map((child) => {
      return {
        status: child.key === props['data-key'] ? 'VISIBLE' : 'HIDDEN',
        item: child,
        clone: null,
      };
    });
  }, []);

  useEffect(() => {
    childrenRef.current.some((child) => {
      if (child.item.key === props['data-key']) {
        if (child.status !== 'VISIBLE') child.status = 'FADEIN';
        return true;
      }
      return false;
    });

    setItems(() =>
      childrenRef.current.filter((i) => i.status !== 'HIDDEN').map((i) => i.clone || i.item),
    );

    return () => {
      childrenRef.current.some((child) => {
        if (child.item.key === props['data-key']) {
          if (child.status !== 'HIDDEN') {
            child.status = 'FADEOUT';
            child.clone = React.cloneElement(child.item, {
              ref: (ref: HTMLDivElement) => {
                console.log(ref);
              },
            });
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
