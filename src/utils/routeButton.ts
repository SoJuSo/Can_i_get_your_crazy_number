/**
 * @param current currentPage
 * @param target targetPage
 */
export const routeClick = ({ current, target }: { current: string; target: string }) => {
  window.history.pushState(current, "", target);
};
