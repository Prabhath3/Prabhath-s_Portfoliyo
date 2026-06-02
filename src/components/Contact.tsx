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
            <motion.div
                className="max-w-3xl max-auto flex flex-col gap-6">
                <input type="text" name="user_name" placeholder="Your name" required
                    className="bg-zinc-900 border-zinc-800 rounded-xl px-6 py-4 outline-none focus:border-purple-500 transition-all" />
                <input type="email" name="user_email" placeholder="Your Email" required
                    className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 outline-none focus:border-purple-500 trnasition-all" />
                <textarea name="message" placeholder="Your message" rows={6} required 
                    className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 outline-none focus:border-purple-500 resize-none " />
                <button type="submit" className="bg-purple-500 hover:bg-purple-400 transition-all duratio-300 py-4 rounded-xl font-semibold text-lg"> Send Message </button>
            </motion.div>
        </section>
    );
}

export default Contact;