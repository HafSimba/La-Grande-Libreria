import "./Footer.css";

type FooterLink = {
    label: string;
    href: string;
};

type FooterSocial = {
    label: string;
    href: string;
    icon: string;
};

export interface FooterProps {
    brandName?: string;
    description?: string;
    links?: FooterLink[];
    socialLinks?: FooterSocial[];
    year?: number;
    className?: string;
}

const defaultLinks: FooterLink[] = [
    { label: "Chi siamo", href: "#" },
    { label: "Supporto", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Contatti", href: "#" }
];

const defaultSocialLinks: FooterSocial[] = [
    { label: "Facebook", href: "#", icon: "f" },
    { label: "Instagram", href: "#", icon: "ig" },
    { label: "LinkedIn", href: "#", icon: "in" }
];

const joinClasses = (...classNames: Array<string | false | undefined>): string =>
    classNames.filter(Boolean).join(" ");

function Footer({
    brandName = "La Grande Libreria",
    description = "Un piccolo spazio digitale dove trovare storie, idee e suggerimenti di lettura.",
    links,
    socialLinks,
    year = new Date().getFullYear(),
    className
}: FooterProps) {
    const footerLinks = links && links.length > 0 ? links : defaultLinks;
    const socials = socialLinks && socialLinks.length > 0 ? socialLinks : defaultSocialLinks;

    return (
        <footer className={joinClasses("cmp-footer", className)} aria-label="Footer sito">
            <div className="cmp-footer__intro">
                <h4 className="cmp-footer__brand">{brandName}</h4>
                <p className="cmp-footer__text">{description}</p>
            </div>

            <ul className="cmp-footer__links" role="list">
                {footerLinks.map((item) => (
                    <li key={`${item.label}-${item.href}`}>
                        <a className="cmp-footer__link" href={item.href} aria-label={`Vai a ${item.label}`}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="cmp-footer__socials" aria-label="Canali social">
                {socials.map((social) => (
                    <a key={`${social.label}-${social.href}`} className="cmp-footer__social" href={social.href} aria-label={social.label}>
                        {social.icon}
                    </a>
                ))}
            </div>

            <p className="cmp-footer__copy">Copyright {year} - Tutti i diritti riservati.</p>
        </footer>
    );
}

export default Footer;
