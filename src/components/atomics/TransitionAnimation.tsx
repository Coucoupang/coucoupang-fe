import React, { Key, ReactElement, useEffect, useRef, useState } from 'react';

interface TransitionAnimation {
  ['data-key']: Key;
  classNames: string;
  children: ReactElement[];
}

type TransitionStatus = 'VISIBLE' | 'HIDDEN';

interface TransitionItem {
  status: TransitionStatus;
  item: ReactElement;
}

const TransitionAnimation = (props: TransitionAnimation) => {
  const [items, setItems] = useState<TransitionItem[]>([]);

  useEffect(() => {
    setItems(
      props.children.map((child) => {
        return {
          status: child.key === props['data-key'] ? 'VISIBLE' : 'HIDDEN',
          item: child,
        };
      }),
    );

    return () => {};
  }, [props.children, props['data-key']]);

  /*  useEffect(() => {
    console.log(props['data-key']);
  }, [props['data-key']]);*/

  return (
    <>
      {items
        .filter((item) => {
          return item.status === 'VISIBLE';
        })
        .map((child) => child.item)}
    </>
  );
};

export default TransitionAnimation;
