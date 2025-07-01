'use client'; 
import { useRouter } from 'next/navigation';
import styles from './about.module.css';


export default function Home() {
    const router = useRouter();   
    const handleStartClick = () => {
        router.push('/signup');
    };
    return (
    // 최상위 래퍼, 전체적인 레이아웃이나 배경색, 여백, 중앙 정렬 등의 스타일 담당
    <div className={styles.container}> 
      {/*header: */}
      <header className={styles.header}>
        <h1 className={styles.logo}>Sentra</h1>
        <nav className={styles.nav}>
          <a href="#">기능</a>
          <a href="#">지원</a>
          <a href="#">로그인</a>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>
            Sentra 보안 플랫폼에 가입하세요.<br />
            조직 행동을 실시간으로 감시하세요.
          </h2>
          <p className={styles.description}>
            실시간 모니터링과 이상 탐지를 통해 조직의 보안을 강화하세요. 언제든지 시작하고, 언제든지 해지할 수 있습니다.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton} onClick={handleStartClick}> 
                시작하기
            </button>
            <button className={styles.secondaryButton}>요금제 보기</button>
          </div>
        </div>
      </main>
    </div>
  );
}
