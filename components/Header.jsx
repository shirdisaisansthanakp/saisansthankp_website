import Image from "next/image";

export default function Header() {
    return (
        <header className="flex content">
            <section>
                <Image className="logo" src="/images/logo.jpg" height={75} width={75} />
            </section>
            <section className="title-section">
                <h1>shiridi sai sansthan</h1>
                <p className="subtitle">velipula veeshi, opposite kasi vishweshwara temple, anakapalle.</p>
            </section>
        </header>
    );
};