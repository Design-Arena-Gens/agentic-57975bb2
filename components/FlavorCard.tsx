"use client";
import React from 'react';
import Logo from './Logo';

type Props = {
  name: string;
  token: string; // css var e.g. --flavor-lemon-lime
  notes?: string;
};

export default function FlavorCard({ name, token, notes }: Props) {
  const color = `var(${token})`;
  return (
    <div className="card" style={{ overflow: 'hidden' }}>
      <div style={{
        background: `linear-gradient(180deg, ${color} 0%, rgba(255,255,255,0) 85%)`,
        padding: 20,
        borderBottom: '1px solid var(--color-mist-gray)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ filter: 'drop-shadow(var(--shadow-soft))' }}>
            <Logo size={40} lockup="icon" />
          </div>
          <div>
            <div className="display" style={{ fontSize: 18 }}>{name}</div>
            <div style={{ color: 'var(--muted)', fontSize: 12 }}>{notes}</div>
          </div>
        </div>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="token" style={{ width: 14, height: 14, background: color, display: 'inline-block', border: '1px solid var(--color-mist-gray)' }} />
            <code style={{ color: 'var(--muted)' }}>{token}</code>
          </div>
          <button className="btn secondary" style={{ padding: '8px 12px' }}>Use Accent</button>
        </div>
      </div>
    </div>
  );
}
