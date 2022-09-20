export function onWindowBottom(callback: Function) {
  window.onscroll = () => {
    const bottomOfWindow =
      document.documentElement.scrollTop + window.innerHeight ===
      document.documentElement.offsetHeight;
    if (bottomOfWindow) {
      callback();
    }
  };
}
