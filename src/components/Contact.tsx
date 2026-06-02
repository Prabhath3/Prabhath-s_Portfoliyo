import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";



function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const [loading, setLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState("");


    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setLoading(true);
        setError("");
        setIsSent(false);

        try {
            await emailjs.sendForm(
                "service_kj5oll7",
                "template_ary159m",
                form.current,
                {
                    publicKey: "OXWQzb453jsJLHu9H"
                }
            );
            alert("Message send successfully!");
            setIsSent(true);
            form.current.reset();
        } catch (err) {
            console.error(err);
            setError("Failed to send message. Please try again");
        } finally {
            setLoading(false);
        }
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
            <motion.form
                ref={form}
                onSubmit={sendEmail}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto flex flex-col gap-6">
                <input type="text" name="user_name" placeholder="Your name" required
                    className="bg-zinc-900 border-zinc-800 rounded-xl px-6 py-4 outline-none focus:border-purple-500 transition-all duration-300" />
                <input type="email" name="user_email" placeholder="Your Email" required
                    className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 outline-none focus:border-purple-500 transition-all duration-300" />
                <textarea name="message" placeholder="Your message" rows={6} required
                    className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 outline-none focus:border-purple-500 resize-none " />
                <button type="submit" disabled={loading} className="bg-purple-500 hover:bg-purple-400 transition-all duratio-300 py-4 rounded-xl font-semibold text-lg"> Send Message </button>

                {
                    isSent && (
                        <div className="text-center text-green-400 font-medium">
                            ✅ Message sent successfully!
                        </div>
                    )

                }

                {error && (
                    <div className="text-center text-red-400 font-medium">
                        {error}
                    </div>
                )}
            </motion.form>
            <div className="mt-16 text-center">
                <p className="text-gray-400">
                    You can also reach me via:
                </p>

                <div className="flex justify-center gap-6 mt-4 flex-wrap">
                    <a
                        href="mailto:prabhathnishatha130@gmail.com"
                        className="text-purple-400 hover:text-purple-300 transition"
                    >
                        Email
                    </a>

                    <a
                        href="https://github.com/prabhath3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/prabhath-nishantha-ab553a334/?skipRedirect=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;