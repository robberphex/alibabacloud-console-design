import React, { useContext } from 'react';
import AppLayout from '@alicloud/console-components-app-layout';
import { XConsoleTheme } from '@alicloud/console-components-console-menu';
import Nav from './Nav';
import Context from './Context';
import { isPathMatch } from './utils/index';
import { IProp, PathRule } from './types/index';
import useCollapsed from './hooks/useCollapsed';

const computeSidebarVisibleStatus = (
  pathname: string,
  displayPath: PathRule,
  notDisplayPath: PathRule,
  invisiblePaths: PathRule
): boolean => {
  let sidebarVisible = true;
  // 当 displayPath 被设置时， 所有路径下都不展示侧边栏
  if (typeof displayPath !== 'undefined') {
    sidebarVisible = false;
    sidebarVisible = isPathMatch(pathname, displayPath);
  } else {
    sidebarVisible = !isPathMatch(
      pathname,
      notDisplayPath || invisiblePaths || []
    );
  }
  return sidebarVisible;
};

const XConsoleAppLayoutAside: React.FC<Partial<IProp>> = (
  props: Partial<IProp>
) => {
  const {
    consoleMenu = {},
    location: { pathname },
    children,
    menuParams,
    collapsed,
    onNavCollapseTriggerClick
  } = props;

  const { sidebar } = useContext(Context);

  const {
    displayPath,
    notDisplayPath,
    defaultOpen = [],
  } = consoleMenu;

  const sidebarVisible = computeSidebarVisibleStatus(
    pathname,
    displayPath,
    notDisplayPath,
    sidebar.invisiblePaths
  );

  // 合并 sidebar 的 defaultOpenKeys
  sidebar.defaultOpenKeys = defaultOpen;

  return (
    <XConsoleTheme>
      <AppLayout
        adjustHeight={50}
        nav={sidebarVisible ? <Nav {...sidebar} currentPath={pathname} menuParams={menuParams}/> : null}
        navCollapsed={collapsed}
        onNavCollapseTriggerClick={onNavCollapseTriggerClick}
      >
        {children}
      </AppLayout>
    </XConsoleTheme>
  );
};

export default XConsoleAppLayoutAside;
