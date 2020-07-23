import { useState, useRef, useEffect } from 'react';
import { matchPath } from 'dva/router';
import { PathRule } from '../types/index';

const useCollapsed = (pathname: string, collapsedPath: PathRule) => {
  const [collapsed, setCollapsed] = useState(false);
  // save prev collapsed
  const prevState = useRef<boolean>();

  useEffect(() => {
    prevState.current = collapsed;
  });

  useEffect(() => {
    const collapse = collapsedPath.some((key) =>
      matchPath(pathname, { path: key, exact: true, strict: true })
    );
    setCollapsed(collapse);
  }, [pathname, collapsedPath]);

  const onNavCollapseTriggerClick = (prevCollapsed: boolean): void => {
    setCollapsed(
      typeof prevCollapsed === 'boolean' ? !prevCollapsed : !prevState.current
    );
  };

  return {
    collapsed,
    onNavCollapseTriggerClick,
  };
};

export default useCollapsed;