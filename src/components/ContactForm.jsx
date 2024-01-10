import React, { useReducer } from "react";
import { IoMdPaperPlane, IoMdCheckmark } from "react-icons/io";
import { sendForm } from "../utils/Helpers";

import { contactFormReducer } from "../reducers/MainReducer";

export const ContactForm = () => {
  const [state, dispatch] = useReducer(contactFormReducer, {
    deliveryStatus: null,
  });
  return (
    <form
      onSubmit={(ev) => {
        sendForm(ev, dispatch);
      }}
    >
      <input
        type="text"
        name="name"
        required
        placeholder="Name"
        disabled={state.deliveryStatus}
        aria-label="name"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        disabled={state.deliveryStatus}
        aria-label="email"
      />
      <textarea
        name="message"
        required
        minLength={50}
        maxLength={350}
        disabled={state.deliveryStatus}
        aria-label="message"
      ></textarea>
      <button type="submit" aria-label="send" disabled={state.deliveryStatus}>
        {state.deliveryStatus ? <IoMdCheckmark /> : <IoMdPaperPlane />}
      </button>
    </form>
  );
};
