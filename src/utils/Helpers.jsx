const scrollCarousell = (ev, publicationsCarousell) => {
    const direction =
      ev.target.dataset?.direction ||
      ev.target.closest("span").dataset?.direction;
      publicationsCarousell.current.scrollBy({
        top: 0,
        left: (direction === 'left' ? -150 : 150),
        behavior: "smooth",
      })
  };

export {scrollCarousell}