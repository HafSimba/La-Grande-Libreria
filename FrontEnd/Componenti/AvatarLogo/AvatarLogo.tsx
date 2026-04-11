import "./AvatarLogo.css";

export interface AvatarLogoProps {
    src?: string;
    alt?: string;
    name?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
}

const joinClasses = (...classNames: Array<string | false | undefined>): string =>
    classNames.filter(Boolean).join(" ");

const getInitials = (name?: string): string => {
    if (!name) {
        return "U";
    }

    const words = name.trim().split(" ").filter(Boolean);
    const first = words[0]?.charAt(0) ?? "U";
    const second = words[1]?.charAt(0) ?? "";

    return `${first}${second}`.toUpperCase();
};

function AvatarLogo({
    src,
    alt = "Avatar utente",
    name,
    size = "md",
    className,
    onClick
}: AvatarLogoProps) {
    const content = src ? (
        <img className="cmp-avatar-logo__image" src={src} alt={alt} loading="lazy" />
    ) : (
        <span className="cmp-avatar-logo__fallback" aria-hidden="true">
            {getInitials(name)}
        </span>
    );

    if (onClick) {
        return (
            <button
                type="button"
                className={joinClasses("cmp-avatar-logo", `is-size-${size}`, "is-clickable", className)}
                onClick={onClick}
                aria-label={alt}
            >
                {content}
            </button>
        );
    }

    return (
        <div className={joinClasses("cmp-avatar-logo", `is-size-${size}`, className)} aria-label={alt} role="img">
            {content}
        </div>
    );
}

export default AvatarLogo;
import React, { useEffect, useState } from 'react';
import './AvatarLogo.css';

export interface AvatarLogoProps {
    src?: string | null;
    alt?: string;
    name?: string;
    size?: number | 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'circle' | 'rounded' | 'square';
    className?: string;
    fallback?: React.ReactNode;
    showBorder?: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    title?: string;
    imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

const SIZE_PRESETS: Record<string, number> = { sm: 32, md: 40, lg: 48, xl: 64 };

function getInitials(name?: string) {
    if (!name) return '';
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.charAt(0) ?? '';
    const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : (parts[0]?.charAt(1) ?? '');
    return (first + last).toUpperCase();
}

export default function AvatarLogo({
    src,
    alt,
    name,
    size = 'md',
    shape = 'circle',
    className = '',
    fallback,
    showBorder = false,
    onClick,
    title,
    imgProps,
}: AvatarLogoProps) {
    const [imgError, setImgError] = useState(false);

    useEffect(() => {
        setImgError(false);
    }, [src]);

    const sizeNum = typeof size === 'number' ? size : (SIZE_PRESETS[String(size)] ?? SIZE_PRESETS.md);
    const style: React.CSSProperties = { width: sizeNum, height: sizeNum, fontSize: Math.round(sizeNum * 0.42) };

    const showImage = !!src && !imgError;
    const shapeClass =
        shape === 'rounded' ? 'lg-avatar--rounded' : shape === 'square' ? 'lg-avatar--square' : 'lg-avatar--circle';
    const clickable = typeof onClick === 'function';
    const classes = ['lg-avatar', shapeClass, showBorder ? 'lg-avatar--bordered' : '', clickable ? 'lg-avatar--clickable' : '', className]
        .filter(Boolean)
        .join(' ');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!clickable) return;
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            (onClick as any)(e as any);
        }
    };

    const fallbackNode =
        fallback ??
        (name ? (
            <span className="lg-avatar__initials">{getInitials(name)}</span>
        ) : (
            <svg className="lg-avatar__svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z" />
            </svg>
        ));

    return (
        <div
            className={classes}
            style={style}
            title={title ?? alt ?? name}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            role={clickable ? 'button' : 'img'}
            tabIndex={clickable ? 0 : -1}
            aria-label={alt ?? name ?? 'avatar'}
        >
            {showImage ? (
                <img
                    src={src as string}
                    alt={alt ?? name ?? 'avatar'}
                    onError={() => setImgError(true)}
                    {...imgProps}
                />
            ) : (
                <div className="lg-avatar__fallback">{fallbackNode}</div>
            )}
        </div>
    );
}