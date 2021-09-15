import { useMemo, Dispatch } from 'react';

export const useSelectors = (
  reducer: [state: any, dispatch: Dispatch<any>],
  mapStateToSelectors: (state: any) => Record<string, (...args: any[]) => any>,
) => {
  const [state] = reducer;
  return useMemo(() => mapStateToSelectors(state), [state, mapStateToSelectors]);
};