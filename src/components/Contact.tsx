import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

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
    return (
        <section
            id="contact"
            className="bg-zinc-950 text-white px-8 md:px-16 py-24">
            <div className="text-center mb-16">
                <p className="text-purple-400 text-lg mb-4">
                    Contact
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                    Let's Work Togather
                </h2>
            </div>
            <motion.div>
                <input type="text" name="user_name" placeholder="Your name" required />
                <input type="email" name="user_email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your message" rows={6} required />
                <button type="submit"> Send Message </button>
            </motion.div>
        </section>
    );
}

export default Contact;