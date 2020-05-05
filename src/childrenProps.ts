import { ReactNode } from 'react';

// Useful to extend from for a props interface to access props.children in a type safe way
export interface ChildrenProps {
  children: ReactNode;
}
