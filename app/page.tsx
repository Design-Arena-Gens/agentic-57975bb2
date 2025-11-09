import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/components/Logo';
import ColorSwatch from '@/components/ColorSwatch';
import MotionDemo from '@/components/MotionDemo';

export default function HomePage() {
  return (
    <main>
      <section className="container" style={{ paddingTop: 64, paddingBottom: 24 }}>
        <div className="grid cols-2" style={{ alignItems: 'center' }}>
          <div>
            <Logo size={64} lockup="horizontal" className="twist-hover" />
            <h1 className="display" style={{ fontSize: 44, margin: '18px 0 8px' }}>
              Clean. Refreshing. A confident twist.
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 18, marginBottom: 20 }}>
              TwistUp brings flavor to life with a modern, breathable identity?
              purity, innovation, and taste in perfect balance.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/brand-guidelines" className="btn">Brand Guidelines</Link>
              <Link href="/flavors" className="btn secondary">Flavors</Link>
            </div>
          </div>
          <div>
            <div className="card" style={{ padding: 24 }}>
              <MotionDemo />
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: 8, paddingBottom: 64 }}>
        <h2 className="display" style={{ fontSize: 24, marginBottom: 16 }}>Core Palette</h2>
        <div className="grid cols-5">
          <ColorSwatch name="Off-White" token="--color-off-white" text="#1E2328" />
          <ColorSwatch name="Mist Gray" token="--color-mist-gray" text="#1E2328" />
          <ColorSwatch name="Charcoal" token="--color-charcoal" text="#FFFFFF" />
          <ColorSwatch name="Mint Aqua" token="--color-mint-aqua" text="#1E2328" />
          <ColorSwatch name="Tangerine" token="--color-tangerine" text="#1E2328" />
        </div>
      </section>

      <section className="container" style={{ paddingTop: 8, paddingBottom: 80 }}>
        <h2 className="display" style={{ fontSize: 24, marginBottom: 16 }}>Flavor Accent Palette</h2>
        <div className="grid cols-5">
          <ColorSwatch name="Lemon-Lime" token="--flavor-lemon-lime" text="#1E2328" />
          <ColorSwatch name="Berry" token="--flavor-berry" text="#FFFFFF" />
          <ColorSwatch name="Mango" token="--flavor-mango" text="#1E2328" />
          <ColorSwatch name="Cola" token="--flavor-cola" text="#FFFFFF" />
          <ColorSwatch name="Watermelon" token="--flavor-watermelon" text="#1E2328" />
        </div>
      </section>
    </main>
  );
}
