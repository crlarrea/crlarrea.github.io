import React, { useState, useEffect } from "react";
import { sendMessage } from "../utils/utils";
import {
  FaRegPaperPlane,
  FaArrowsRotate,
  FaCircleCheck,
} from "react-icons/fa6";

export const Footer = () => {
  const [message, setMessage] = useState({
    status: null,
    payload: null,
  });

  return (
    <>
      <article>
        <h2>contact</h2>
        <p>&copy; crlarrea {new Date().getFullYear()}</p>
      </article>
      <article>
        <form
          onSubmit={(ev) => {
            sendMessage(ev, setMessage);
          }}
        >
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            required={true}
            placeholder="Joe Doe"
            aria-label="name"
            disabled={message.status === "success"}
          />
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            required={true}
            placeholder="joe.doe@email.com"
            aria-label="email"
            disabled={message.status === "success"}
          />
          <label htmlFor="message">message</label>
          <textarea
            name="message"
            id="message"
            required={true}
            placeholder="Hello! 👋🏾"
            minLength="20"
            maxLength="350"
            aria-label="message"
            disabled={message.status === "success"}
          />
          <button
            type="submit"
            aria-label="send"
            disabled={message.status === "success"}
          >
            {message.status === null ? (
              <FaRegPaperPlane />
            ) : message.status === "pending" ? (
              <FaArrowsRotate className="spin" />
            ) : (
              <FaCircleCheck />
            )}
          </button>
        </form>
      </article>
    </>
  );
};
