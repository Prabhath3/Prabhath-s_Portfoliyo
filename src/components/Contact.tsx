import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Loader2 } from "lucide-react";

const SOCIALS = [
    {
        icon: FaEnvelope,
        label: "Email",
        href: "mailto:prabhathnishantha130@gmail.com",
    },
    {
        icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/prabhath3",
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/prabhath-nishantha-ab553a334",
    },
];

const inputClass =
    "bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 outline-none focus:border-purple-500 transition-all duration-300";

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
                { publicKey: "OXWQzb453jsJLHu9H" }
            );
            setIsSent(true);
            form.current.reset();
        } catch (err) {
            console.error(err);
            setError("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="bg-zinc-950 text-white px-8 md:px-16 py-24 scroll-mt-20"
        >
            <div className="text-center mb-16">
                <p className="text-purple-400 text-lg mb-4">Contact</p>
                <h2 className="text-4xl md:text-5xl font-bold">
                    Let's Work <span className="text-gradient">Together</span>
                </h2>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                    Have a project, opportunity, or idea in mind? Drop me a
                    message and I'll get back to you.
                </p>
            </div>

            <motion.form
                ref={form}
                onSubmit={sendEmail}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto flex flex-col gap-6"
            >
                <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    required
                    className={inputClass}
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Your email"
                    required
                    className={inputClass}
                />
                <textarea
                    name="message"
                    placeholder="Your message"
                    rows={6}
                    required
                    className={`${inputClass} resize-none`}
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-purple-500 hover:bg-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            Sending...
                        </>
                    ) : (
                        "Send Message"
                    )}
                </button>

                {isSent && (
                    <div className="text-center text-green-400 font-medium">
                        ✅ Message sent successfully! I'll be in touch soon.
                    </div>
                )}

                {error && (
                    <div className="text-center text-red-400 font-medium">
                        {error}
                    </div>
                )}
            </motion.form>

            <div className="mt-16 text-center">
                <p className="text-gray-400">You can also reach me via:</p>

                <div className="flex justify-center gap-6 mt-4 flex-wrap">
                    {SOCIALS.map(({ icon: Icon, label, href }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                            <Icon /> {label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
