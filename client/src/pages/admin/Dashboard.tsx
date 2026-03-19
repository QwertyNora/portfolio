import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { deleteContactMessage, getContactMessages, markMessageAsRead } from "../../api/contactApi";
import type { AdminContactMessage } from "../../types/contact";

const Dashboard = () => {
    const [messages, setMessages] = useState<AdminContactMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const data = await getContactMessages();
                setMessages(data);
            } catch (error) {
                setError("Could not retrieve messages");
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    const handleMarkAsRead = async (id: number) => {
        try {
            await markMessageAsRead(id);
            setMessages(prev => prev.map(m => (m.id === id ? { ...m, isRead: true } : m)));
        } catch (error) {
            setError("Could not mark message as read");
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteContactMessage(id);
            setMessages(prev => prev.filter(m => m.id !== id));
        } catch {
            setError("Could not delete message");
        }
    };

    const handleLogout = () => {
        logout();
        navigate("/admin/login");
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <div>
                <h1>Dashboard</h1>
                <button onClick={handleLogout} className="border-amber-700">
                    Log out
                </button>
            </div>
            <h2>Messages:</h2>
            {messages.length === 0 ? (
                <p>No messages yet</p>
            ) : (
                messages.map(m => (
                    <div key={m.id}>
                        <p>
                            {m.name} - {m.email}
                        </p>
                        <p>{m.message}</p>
                        <p>{new Date(m.sentAt).toLocaleDateString("sv-SE")}</p>
                        {!m.isRead && <button onClick={() => handleMarkAsRead(m.id)}>Mark as read</button>}
                        <button onClick={() => handleDelete(m.id)}>Delete</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Dashboard;
