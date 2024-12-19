function getContentWidth(element: HTMLElement) {
  const computedStyle = window.getComputedStyle(element);
  const offsetWidth = element.offsetWidth;
  const borderWidthLeftRight =
    parseInt(computedStyle.borderLeftWidth) +
    parseInt(computedStyle.borderRightWidth);
  const paddingWidthLeftRight =
    parseInt(computedStyle.paddingLeft) + parseInt(computedStyle.paddingRight);
  return offsetWidth - borderWidthLeftRight - paddingWidthLeftRight;
}

export default getContentWidth;
