import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';

export default function Footer(): ReactElement {
  const { language, t } = useLanguage();
  const isKo = language === 'ko';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-study">Study</span>
              <span className="brand-master"> Master</span>
            </div>
            <p className="footer-description">{t('footer.description')}</p>
            <p className="footer-description" style={{ marginTop: 8, fontSize: 13 }}>{t('footer.descriptionDetail')}</p>
          </div>

          <div className="footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <ul className="footer-link-list">
              <li><Link to="/study-habits">{isKo ? '학습 습관' : 'Study Habits'}</Link></li>
              <li><Link to="/memory">{isKo ? '기억력 향상' : 'Memory'}</Link></li>
              <li><Link to="/note-taking">{isKo ? '노트 필기' : 'Note-Taking'}</Link></li>
              <li><Link to="/focus">{isKo ? '집중력 강화' : 'Focus'}</Link></li>
              <li><Link to="/reading">{isKo ? '독서법' : 'Reading'}</Link></li>
              <li><Link to="/exam-strategy">{isKo ? '시험 전략' : 'Exam Strategy'}</Link></li>
              <li><Link to="/time-mgmt">{isKo ? '시간 관리' : 'Time Mgmt'}</Link></li>
              <li><Link to="/motivation">{isKo ? '동기부여' : 'Motivation'}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{isKo ? '연락처' : 'Contact'}</h4>
            <p className="footer-email">
              <span className="footer-email-icon"><i className="fa-solid fa-envelope" /></span>
              <a href="mailto:aebon@dreamitbiz.com">aebon@dreamitbiz.com</a>
            </p>
            <p>010-3700-0629</p>
            <p>{isKo ? '카카오톡' : 'KakaoTalk'}: aebon</p>
            <p className="business-hours">{isKo ? '평일 09:00 ~ 18:00' : 'Weekdays 09:00 ~ 18:00'}</p>

            <div className="footer-family">
              <select
                defaultValue=""
                onChange={(e) => {
                  if (e.target.value) window.open(e.target.value, '_blank');
                  e.target.value = '';
                }}
              >
                <option value="" disabled>Family Site</option>
                <option value="https://www.dreamitbiz.com">DreamIT Biz</option>
                <option value="https://teaching.dreamitbiz.com">Teaching AI</option>
                <option value="https://chatgpt.dreamitbiz.com">ChatGPT Master</option>
                <option value="https://claude.dreamitbiz.com">Claude Master</option>
              </select>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 DreamIT Biz. All rights reserved.</p>
          <p className="footer-bottom-info">
            Designed by Ph.D Aebon Lee | {isKo ? '대표이사' : 'CEO'}: {isKo ? '이애본' : 'Aebon Lee'}
          </p>
        </div>
      </div>
    </footer>
  );
}
