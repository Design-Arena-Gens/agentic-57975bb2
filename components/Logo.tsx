"use client";
import React from 'react';

type Props = {
  size?: number;
  lockup?: 'horizontal' | 'stacked' | 'icon';
  className?: string;
};

export default function Logo({ size = 48, lockup = 'horizontal', className }: Props) {
  const Icon = (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="twist-g" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--color-mint-aqua)" />
          <stop offset="100%" stopColor="var(--color-tangerine)" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="28" fill="url(#twist-g)" />
      <path d="M40 20c-2 0-3 .8-4 2l-8 12c-1 1.6-3 2-5 2h-3" stroke="var(--color-charcoal)" strokeWidth="3" strokeLinecap="round"/>
      <path d="M24 44c2 0 3-.8 4-2l8-12c1-1.6 3-2 5-2h3" stroke="var(--color-charcoal)" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );

  if (lockup === 'icon') {
    return <div className={className}>{Icon}</div>;
  }

  const wordStyle: React.CSSProperties = {
    fontFamily: 'var(--font-worksans), var(--font-inter), system-ui, sans-serif',
    fontWeight: 600,
    letterSpacing: '0.2px',
    color: 'var(--color-charcoal)'
  };

  if (lockup === 'stacked') {
    return (
      <div className={className} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        {Icon}
        <div className="display" style={{ ...wordStyle, fontSize: 24, lineHeight: 1 }}>TwistUp</div>
      </div>
    );
  }

  return (
    <div className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      {Icon}
      <div className="display" style={{ ...wordStyle, fontSize: 28, lineHeight: 1 }}>TwistUp</div>
    </div>
  );
}
