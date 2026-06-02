import { useRef } from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";


function Contact(){
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if(!form.current) return;

        emailjs
            .sendForm(
                form.current,
            )
            .then(
                () => {
                    alert("Message sent successfully");
                },
                () => {
                    alert("Faild to send message");
                }
            );
    };
    return(
        <section id="contact">
            <div>
                <p>
                    Contact
                </p>
                <h2>
                    Let's Work Togather
                </h2>
            </div>
            <motion.div>
                <input type="text" name="user_name" placeholder="Your name" required/>
                <input type="email" name="user_email" placeholder="Your Email" required/>
                <textarea name="message" placeholder="Your message" rows={6} required/>
                <button type="submit"> Send Message </button>
            </motion.div>
        </section>
    );
}

export default Contact;