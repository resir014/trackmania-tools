import { computed, signal } from '@preact/signals-core';
import * as React from 'react';

export function useSignal<T>(value: T) {
  return React.useMemo(() => signal<T>(value), [value]);
}

export function useComputed<T>(compute: () => T) {
  const $compute = React.useRef(compute);
  $compute.current = compute;
  return React.useMemo(() => computed<T>(() => $compute.current()), []);
}
