import { useState } from "react";
import { sendContactMessage } from "../api/contactApi";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.SubmitEvent) => {
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

    return (
        <div>
            <h1>Contact</h1>
            {success ? (
                <p>Thank you for your message! I will get back to you ASAP.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} required />
                    </div>
                    {error && <p>{error}</p>}
                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            )}
        </div>
    );
};

export default Contact;
