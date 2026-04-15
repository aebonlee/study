import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AdminGuard from '../components/AdminGuard';
import type { ReactElement } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

// Learning path pages
const StudyHabits = lazy(() => import('../pages/study-habits/StudyHabits'));
const Memory = lazy(() => import('../pages/memory/Memory'));
const NoteTaking = lazy(() => import('../pages/note-taking/NoteTaking'));
const Focus = lazy(() => import('../pages/focus/Focus'));
const Reading = lazy(() => import('../pages/reading/Reading'));
const ExamStrategy = lazy(() => import('../pages/exam-strategy/ExamStrategy'));
const TimeMgmt = lazy(() => import('../pages/time-mgmt/TimeMgmt'));
const Motivation = lazy(() => import('../pages/motivation/Motivation'));

const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));

function LoadingFallback(): ReactElement {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
    </div>
  );
}

export default function PublicLayout(): ReactElement {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mypage" element={<MyPage />} />

            {/* Learning Paths */}
            <Route path="/study-habits" element={<StudyHabits />} />
            <Route path="/memory" element={<Memory />} />
            <Route path="/note-taking" element={<NoteTaking />} />
            <Route path="/focus" element={<Focus />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/exam-strategy" element={<ExamStrategy />} />
            <Route path="/time-mgmt" element={<TimeMgmt />} />
            <Route path="/motivation" element={<Motivation />} />

            <Route path="/admin" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
