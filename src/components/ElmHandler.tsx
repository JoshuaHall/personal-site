import React, { useRef, useEffect } from 'react';

interface InitOptions {
  node: HTMLElement | null;
}

interface ElmHandlerProps {
  src: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    init: (opts: InitOptions) => any;
  };
  ports?: (appPorts: object) => void;
}

const ElmHandler = React.memo(
  ({ src, ports }: ElmHandlerProps) => {
    const node = useRef(null);

    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const app = src.init({
        node: node.current,
      });

      if (ports) {
        ports(app.ports);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div ref={node} />;
  },
  () => false,
);

export default ElmHandler;
