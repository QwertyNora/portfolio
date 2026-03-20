import { useState } from "react";
import { sendContactMessage } from "../api/contactApi";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            await sendContactMessage({ name, email, message });
            setSuccess(true);
            setName("");
            setEmail("");
            setMessage("");
        } catch {
            setError("Something went wrong, try again in a bit.");
        } finally {
            setLoading(false);
        }
    };

    if (success)
        return (
            <div className="px-6 py-10 text-center">
                <p className="font-mono text-[13px] text-(--green) mb-2">// message sent successfully</p>
                <p className="text-[14px] text-(--text-secondary)">
                    Thank you! I'll get back to you as soon as possible.
                </p>
            </div>
        );

    return (
        <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block font-mono text-[11.5px] text-(--text-muted) mb-1.5">
                        // name
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        placeholder="Your name"
                        className="w-full bg-(--bg-tertiary) border border-(--border) rounded-md px-3.5 py-2.5 text-[13.5px] text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:border-(--accent)"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block font-mono text-[11.5px] text-(--text-muted) mb-1.5">
                        // email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-(--bg-tertiary) border border-(--border) rounded-md px-3.5 py-2.5 text-[13.5px] text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:border-(--accent)"
                    />
                </div>
            </div>

            {/* Message */}
            <div className="mb-4">
                <label htmlFor="message" className="block font-mono text-[11.5px] text-(--text-muted) mb-1.5">
                    // message
                </label>
                <textarea
                    id="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                    placeholder="Write your message..."
                    rows={4}
                    className="w-full bg-(--bg-tertiary) border border-(--border) rounded-md px-3.5 py-2.5 text-[13.5px] text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:border-(--accent) resize-none"
                />
            </div>

            {error && <p className="font-mono text-[12px] text-red-400 mb-4">{error}</p>}

            <button
                type="submit"
                disabled={loading}
                className="bg-(--accent) text-(--bg-primary) px-5 py-2.5 rounded-md text-[13.5px] font-semibold cursor-pointer border-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? "// sending..." : "Send message"}
            </button>
        </form>
    );
};

export default ContactForm;
