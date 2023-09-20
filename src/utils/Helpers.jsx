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

  const sendForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

export {scrollCarousell, sendForm}