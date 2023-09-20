import React from 'react'
import { sendForm } from '../utils/Helpers'

export const ContactForm = () => {
  return (
    <form onSubmit={sendForm}>
    <input type="text" name="name"/>
    <input type="email" name="email"/>
    <textarea name="message"></textarea>
    <button type="submit">Submit Form</button>
  </form>
  )
}
