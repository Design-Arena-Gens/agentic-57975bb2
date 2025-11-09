"use client";
import React from 'react';
import Logo from './Logo';

export default function MotionDemo() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Logo size={64} lockup="icon" />
        <div>
          <div className="display" style={{ fontSize: 18 }}>Subtle twist</div>
          <div style={{ color: 'var(--muted)' }}>Hover the icon to feel the motion.</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <div title="hover" className="twist-hover" style={{ width: 64, height: 64 }}>
          <Logo size={64} lockup="icon" />
        </div>
        <div style={{ width: 64, height: 64, opacity: 0.3 }}>
          <Logo size={64} lockup="icon" />
        </div>
        <div style={{ width: 64, height: 64, opacity: 0.15 }}>
          <Logo size={64} lockup="icon" />
        </div>
      </div>
    </div>
  );
}
