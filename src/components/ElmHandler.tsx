import React, { useRef, useEffect } from 'react';

interface InitOptions {
  node: HTMLElement | null;
}

interface ElmAppPorts {
  ports: ElmApp;
}

export interface ElmApp {
  clearCanvas: {
    subscribe: (subscribeFunc: () => void) => void;
  };
}

interface ElmHandlerProps {
  src: {
    init: (opts: InitOptions) => ElmAppPorts;
  };
  ports?: (appPorts: ElmApp) => void;
}

export const ElmHandler = React.memo(
  ({ src, ports }: ElmHandlerProps) => {
    const node = useRef(null);

    useEffect(() => {
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
