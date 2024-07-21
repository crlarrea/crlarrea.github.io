const capitalize = (text) => {
  return text
    .split(/\s+/)
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};
const scrollCarousel = (ev) => {
  const carousel = ev.target.closest("article").querySelector("div");
  const direction =
    ev.target.dataset?.direction || ev.target.parentElement.dataset.direction;

  carousel.scrollBy({
    left: direction === "right" ? 250 : -250,

    behavior: "smooth",
  });
};

const sendMessage = async (ev, setMessage) => {
  ev.preventDefault();

  const formData = new FormData(ev.target);
  formData.append("access_key", "db402685-15ef-4d07-a871-0a87e03e899d");
  const object = Object.fromEntries(formData);
  const payload = JSON.stringify(object);
  setMessage({ ...message, status: "pending", payload: payload });

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: payload,
  }).then((res) => res.json());

  if (res.success) {
    setMessage({
      ...message,
      status: "success",
      payload: JSON.stringify(res.data),
    });
  }
};

export { capitalize, scrollCarousel, sendMessage };
