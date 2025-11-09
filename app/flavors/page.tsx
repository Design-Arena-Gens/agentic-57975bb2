import Link from 'next/link';
import FlavorCard from '@/components/FlavorCard';

const flavors = [
  { key: 'lemon-lime', name: 'Lemon-Lime', token: '--flavor-lemon-lime', notes: 'Bright, zesty, crisp' },
  { key: 'berry', name: 'Berry', token: '--flavor-berry', notes: 'Juicy, rounded, tarty-sweet' },
  { key: 'mango', name: 'Mango', token: '--flavor-mango', notes: 'Soft tropical warmth' },
  { key: 'cola', name: 'Cola', token: '--flavor-cola', notes: 'Classic, balanced caramel' },
  { key: 'watermelon', name: 'Watermelon', token: '--flavor-watermelon', notes: 'Fresh, clean sweetness' },
];

export default function FlavorsPage() {
  return (
    <main className="container" style={{ paddingTop: 56, paddingBottom: 96 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <h1 className="display" style={{ fontSize: 36, margin: 0 }}>TwistUp Flavors</h1>
          <p style={{ color: 'var(--muted)', marginTop: 8 }}>Distinct accents with consistent, breathable structure.</p>
        </div>
        <Link href="/" className="btn secondary">Home</Link>
      </div>

      <section style={{ marginTop: 24 }}>
        <div className="grid cols-3">
          {flavors.map((f) => (
            <FlavorCard key={f.key} name={f.name} token={f.token} notes={f.notes} />
          ))}
        </div>
      </section>
    </main>
  );
}
