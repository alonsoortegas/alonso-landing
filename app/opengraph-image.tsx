import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Alonso Ortega - Product Engineer & Hybrid Athlete';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FEFDFB',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: '#8B6F47',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '72px',
              color: '#F5E6D3',
              fontWeight: 'bold',
            }}
          >
            AO
          </div>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#3E2723',
              margin: 0,
            }}
          >
            Alonso Ortega
          </h1>
          <p
            style={{
              fontSize: '36px',
              color: '#3E2723',
              opacity: 0.8,
              margin: 0,
            }}
          >
            Product Engineer × Hybrid Athlete
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              fontSize: '28px',
              color: '#3E2723',
              opacity: 0.7,
            }}
          >
            <span>📍 Canggu, Bali</span>
            <span>🇲🇽 🇩🇪</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
