export default function isMobile({ window }) {
  const { navigator } = window;

  if (!navigator) {
    return false;
  }

  return !!(navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
    navigator.userAgent.match(/Opera Mini/i) ||
    navigator.userAgent.match(/IEMobile/i)
  );
}
