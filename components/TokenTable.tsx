"use client";
import React from 'react';

type Token = { name: string; value: string };
export default function TokenTable({ tokens }: { tokens: Token[] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--color-mist-gray)' }}>Token</th>
            <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--color-mist-gray)' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((t) => (
            <tr key={t.name}>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--color-mist-gray)' }}>{t.name}</td>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--color-mist-gray)' }}><code>{t.value}</code></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
