"use client";
import React from 'react';

type Props = {
  name: string;
  token: string; // CSS var name
  text?: string; // hex for text color example
};

export default function ColorSwatch({ name, token, text = '#1E2328' }: Props) {
  const bg = `var(${token})`;
  return (
    <div className="card" style={{ overflow: 'hidden' }}>
      <div className="token" style={{ background: bg, height: 120 }} />
      <div style={{ padding: 12 }}>
        <div className="display" style={{ fontSize: 16 }}>{name}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--muted)', marginTop: 6 }}>
          <code style={{ fontSize: 12 }}>{token}</code>
          <span style={{ fontSize: 12, color: text }}>{text}</span>
        </div>
      </div>
    </div>
  );
}
