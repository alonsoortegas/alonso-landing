import Image from 'next/image';

interface PrimaryCTAProps {
    href: string;
}

export default function PrimaryCTA({ href }: PrimaryCTAProps) {
    return (
        <a
            href={href}
            className="flex items-center justify-center gap-3 w-full px-6 py-5 bg-primary text-white rounded-xl hover:bg-primary-dark hover:shadow-lg hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-out tap-highlight-transparent font-semibold text-base sm:text-lg min-h-[64px]"
            aria-label="Let's build something together"
        >
            <Image
                src="/message-circle-more.svg"
                alt=""
                width={24}
                height={24}
                className="invert"
                aria-hidden="true"
            />
            <span>Let's build something together</span>
        </a>
    );
}
