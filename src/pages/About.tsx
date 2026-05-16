import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

export default function About(): ReactElement {
  return (
    <>
      <SEOHead title="About | DreamIT Study" description="효과적인 학습 노하우를 배우는 종합 학습 플랫폼" />
      <section className="page-header">
        <div className="container">
          <h1>About</h1>
          <p>공부 잘하는 방법</p>
        </div>
      </section>

      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container">
          {/* 제작의도 */}
          <div style={{
            background: 'var(--bg-secondary, #f8f9fa)',
            borderLeft: '4px solid var(--primary-blue, #0046C8)',
            padding: '28px 32px',
            borderRadius: '0 12px 12px 0',
            marginBottom: '48px',
            lineHeight: 1.8,
            fontSize: '15px',
            color: 'var(--text-primary, #1a1a1a)',
          }}>
            <strong style={{ fontSize: '17px', display: 'block', marginBottom: '12px' }}>
              이 사이트는 효과적인 학습 방법을 배우는 종합 학습 플랫폼입니다.
            </strong>
            <p style={{ margin: 0 }}>
              드림아이티비즈(DreamIT Biz)는 기업과 개인의 실제 니즈를 반영한 맞춤형 교육 플랫폼을 제작합니다.
              과학적으로 검증된 학습 전략과 노하우를 통해 공부 효율을 극대화하는 방법을 제공합니다.
            </p>
          </div>

          {/* 주요 특징 */}
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--text-primary, #1a1a1a)' }}>
            주요 특징
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '48px' }}>
            {[
              { icon: 'fa-brain', title: '학습 과학', desc: '뇌과학에 기반한 효과적인 학습 원리를 소개합니다.' },
              { icon: 'fa-clock', title: '시간 관리', desc: '효율적인 학습 시간 관리와 계획 수립법을 다룹니다.' },
              { icon: 'fa-book-open', title: '학습 전략', desc: '능동적 학습, 반복 학습 등 검증된 전략을 배웁니다.' },
              { icon: 'fa-bullseye', title: '목표 설정', desc: '학습 목표 설정과 동기 부여 방법을 학습합니다.' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '16px',
                padding: '24px',
                background: 'var(--bg-white, #fff)',
                border: '1px solid var(--line, #e5e7eb)',
                borderRadius: '12px',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--bg-secondary, #f0f4ff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <i className={`fa-solid ${item.icon}`} style={{ color: 'var(--primary-blue, #0046C8)', fontSize: '18px' }} />
                </div>
                <div>
                  <strong style={{ fontSize: '15px', color: 'var(--text-primary, #1a1a1a)' }}>{item.title}</strong>
                  <p style={{ margin: '6px 0 0', fontSize: '14px', color: 'var(--text-secondary, #6b7280)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 개발사 정보 */}
          <div style={{
            padding: '32px',
            background: 'var(--bg-secondary, #f8f9fa)',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-blue, #0046C8)', marginBottom: '8px', letterSpacing: '0.05em' }}>DEVELOPED BY</p>
            <p style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary, #1a1a1a)' }}>드림아이티비즈 (DreamIT Biz)</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary, #6b7280)', lineHeight: 1.6, marginBottom: '16px' }}>
              100개 교육 사이트를 운영하는 에듀테크 전문 기업
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--text-secondary, #6b7280)' }}>
              <span><i className="fa-solid fa-envelope" style={{ marginRight: '6px' }} />aebon@dreamitbiz.com</span>
              <span><i className="fa-solid fa-globe" style={{ marginRight: '6px' }} />www.dreamitbiz.com</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
