import Hero from '@/pages/Hero'
import Events from '@/pages/Events'
import Location from '@/pages/Location';
import Wishes from '@/pages/Wishes';
import Gifts from '@/pages/Gifts';
import Stories from './Stories';

// Main Invitation Content
export default function MainContent() {
    return (
        <>
            <Hero />
            <Events />
            <Location />
            <Stories />
            <Gifts />
            <Wishes />
            <footer className="text-center text-sm text-zinc-500 py-4">
            Template by <a href="https://github.com/mrofisr" className="hover:underline" target="_blank" rel="noopener noreferrer">Abdur Rofi</a>, Modified by <a href="https://github.com/dafaputra00" className="hover:underline" target="_blank" rel="noopener noreferrer">Aziz</a> 💙 <a href="https://github.com/khonsaazmi" className="hover:underline" target="_blank" rel="noopener noreferrer">Khonsa</a>
            </footer>
        </>
    )
}