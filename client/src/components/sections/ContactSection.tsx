import ContactForm from "../ContactForm";

const ContactSection = () => (
    <section id="contact" className="mx-auto max-w-230 px-6 py-14 border-t border-(--border)">
        <h2 className="text-[22px] font-normal text-(--text-primary) mb-7">Contact</h2>

        <div className="bg-(--bg-secondary) border border-(--border) rounded-[10px] overflow-hidden">
            {/* Terminal header */}
            <div className="bg-(--bg-tertiary) border-b border-(--border) px-4 py-2.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ff5f57] inline-block" />
                <span className="w-2 h-2 rounded-full bg-[#febc2e] inline-block" />
                <span className="w-2 h-2 rounded-full bg-[#28c840] inline-block" />
                <span className="ml-2 font-mono text-[12px] text-(--text-muted)">
                    nora@portfolio:~ <span className="text-(--accent)">send_message.sh</span>
                </span>
            </div>
            <ContactForm />
        </div>
    </section>
);

export default ContactSection;
