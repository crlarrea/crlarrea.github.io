const scrollCarousell = (ev, carousell) => {
    const direction =
      ev.target.dataset?.direction ||
      ev.target.closest("span").dataset?.direction;
      carousell.current.scrollBy({
        top: 0,
        left: (direction === 'left' ? -150 : 150),
        behavior: "smooth",
      })
  };

export {scrollCarousell}