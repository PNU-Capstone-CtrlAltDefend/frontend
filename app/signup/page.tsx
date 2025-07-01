"use client";
import styles from './signup.module.css';
import { useState } from 'react';

const backendUrl = process.env.NEXT_PUBLIC_API_URL;

export default function SignUp() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    organization_name: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const payload = {
      id: formData.id,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      organization_name: formData.organization_name,
    };

    try {
      const response = await fetch(`${backendUrl}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`서버 응답 실패: ${response.status}`);
      }

      const result = await response.json();
      console.log('서버 응답:', result);
      alert('회원 가입이 완료되었습니다.');
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error);
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Sentra</h1>
        <nav className={styles.nav}>
          <a href="#">기능</a>
          <a href="#">지원</a>
          <a href="#">로그인</a>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>회원가입</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="id">ID</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">전화번호</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="organization_name">조직명</label>
            <input
              type="text"
              id="organization_name"
              name="organization_name"
              value={formData.organization_name}
              onChange={handleChange}
              required
            />

            <button type="submit" className={styles.submitButton}>가입하기</button>
          </form>
        </div>
      </main>
    </div>
  );
}
