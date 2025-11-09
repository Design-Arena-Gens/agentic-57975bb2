import Link from 'next/link';
import Logo from '@/components/Logo';
import ColorSwatch from '@/components/ColorSwatch';
import TokenTable from '@/components/TokenTable';

export default function BrandGuidelinesPage() {
  return (
    <main className="container" style={{ paddingTop: 56, paddingBottom: 96 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <h1 className="display" style={{ fontSize: 36, margin: 0 }}>TwistUp Brand Guidelines</h1>
          <p style={{ color: 'var(--muted)', marginTop: 8 }}>Clean, balanced, lightly energetic. Premium yet approachable.</p>
        </div>
        <Link href="/" className="btn secondary">Home</Link>
      </div>

      <section style={{ marginTop: 32 }}>
        <div className="card" style={{ padding: 24 }}>
          <h2 className="display" style={{ fontSize: 24, marginTop: 0 }}>Logo</h2>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <Logo size={56} lockup="horizontal" />
            <Logo size={56} lockup="stacked" />
            <Logo size={56} lockup="icon" />
          </div>
          <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
            <a className="btn secondary" href="/logos/twistup-logotype.svg" download>Download Logotype (SVG)</a>
            <a className="btn secondary" href="/logos/twistup-stacked.svg" download>Download Stacked (SVG)</a>
            <a className="btn secondary" href="/logos/twistup-icon.svg" download>Download Icon (SVG)</a>
          </div>
          <p style={{ color: 'var(--muted)', marginTop: 16 }}>
            Clear space: at least the height of the twist icon around all sides. Avoid crowding and busy backgrounds.
          </p>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <div className="card" style={{ padding: 24 }}>
          <h2 className="display" style={{ fontSize: 24, marginTop: 0 }}>Color</h2>
          <p style={{ color: 'var(--muted)', marginTop: 0 }}>Minimal neutrals with fresh mint aqua and a hint of tangerine. Flavors extend with balanced accents.</p>
          <div className="grid cols-5" style={{ marginTop: 12 }}>
            <ColorSwatch name="Off-White" token="--color-off-white" text="#1E2328" />
            <ColorSwatch name="Mist Gray" token="--color-mist-gray" text="#1E2328" />
            <ColorSwatch name="Charcoal" token="--color-charcoal" text="#FFFFFF" />
            <ColorSwatch name="Mint Aqua" token="--color-mint-aqua" text="#1E2328" />
            <ColorSwatch name="Tangerine" token="--color-tangerine" text="#1E2328" />
          </div>
          <h3 className="display" style={{ fontSize: 18, marginTop: 20 }}>Flavor Accents</h3>
          <div className="grid cols-5" style={{ marginTop: 12 }}>
            <ColorSwatch name="Lemon-Lime" token="--flavor-lemon-lime" text="#1E2328" />
            <ColorSwatch name="Berry" token="--flavor-berry" text="#FFFFFF" />
            <ColorSwatch name="Mango" token="--flavor-mango" text="#1E2328" />
            <ColorSwatch name="Cola" token="--flavor-cola" text="#FFFFFF" />
            <ColorSwatch name="Watermelon" token="--flavor-watermelon" text="#1E2328" />
          </div>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <div className="card" style={{ padding: 24 }}>
          <h2 className="display" style={{ fontSize: 24, marginTop: 0 }}>Typography</h2>
          <p style={{ color: 'var(--muted)', marginTop: 0 }}>Work Sans for confident display; Inter for body clarity.</p>
          <div style={{ display: 'grid', gap: 18, marginTop: 12 }}>
            <div>
              <div className="display" style={{ fontSize: 40 }}>TwistUp makes freshness feel easy</div>
              <div style={{ color: 'var(--muted)' }}>Work Sans ? Headlines</div>
            </div>
            <div>
              <div style={{ fontSize: 18 }}>A breathable, modern system built around purity, innovation, and taste.</div>
              <div style={{ color: 'var(--muted)' }}>Inter ? Body</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <div className="card" style={{ padding: 24 }}>
          <h2 className="display" style={{ fontSize: 24, marginTop: 0 }}>Motion</h2>
          <p style={{ color: 'var(--muted)', marginTop: 0 }}>Subtle twist conveys freshness and precision. Use sparingly for polish.</p>
          <div style={{ marginTop: 8 }}>
            <div style={{ display: 'inline-block' }}>
              <Logo size={64} lockup="icon" className="twist-hover" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <div className="card" style={{ padding: 24 }}>
          <h2 className="display" style={{ fontSize: 24, marginTop: 0 }}>Spacing & Layout</h2>
          <TokenTable tokens={[
            { name: 'Radius XS', value: 'var(--radius-xs)' },
            { name: 'Radius SM', value: 'var(--radius-sm)' },
            { name: 'Radius MD', value: 'var(--radius-md)' },
            { name: 'Radius LG', value: 'var(--radius-lg)' },
            { name: 'Shadow Soft', value: 'var(--shadow-soft)' },
            { name: 'Shadow Crisp', value: 'var(--shadow-crisp)' }
          ]} />
        </div>
      </section>
    </main>
  );
}
