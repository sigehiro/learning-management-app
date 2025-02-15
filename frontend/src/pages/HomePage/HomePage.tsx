import React from 'react'
import {
  Header,
  Navigation,
  LoginLink,
  HeroSection,
  FeaturesContainer,
  CtaSection,
  InfoSection,
  Footer,
} from './HomePage.styles'

const Homepage: React.FC = () => {

  // Information sections data
  // 現在2つのみのセクションがありますが、必要に応じて追加できるように。Figma上では３つセクションがある。
  const infoSections = [
    {
      title: 'Easy to understand progress management',
      img: 'progress_management.png',
      text: 'Our intuitive interface makes tracking progress simple and effective',
    },
    {
      title: 'Saves you time',
      img: 'save_time.png',
      text: 'Streamline your workflow and focus on what matters most',
    },
    // Add more sections as needed
  ]

  return (
    <div>
      {/* Header */}
      <Header>
        <Navigation>
          <LoginLink href="/login">Login</LoginLink>
        </Navigation>
      </Header>

      <main>
        {/* Hero Section */}
        <HeroSection>
          <img className="hero-image" src="/images/hero.jpeg" alt="Task Management Hero" />
          <div className="hero-content">
            <h1 className="hero-title">Welcome to TaskMaster</h1>
            <p className="hero-text">Organize, Track, and Achieve More</p>
          </div>
        </HeroSection>

        {/* Features Grid Section */}
        <FeaturesContainer>
        {/* Generate 3 feature cards using array [1, 2, 3].
            Each number is used by the map method to loop through */}
        {/* 数値を４などにし、画像の名前も同様に変えることで追加できる。→現状３つで十分な想定 */}
          {[1, 2, 3].map((num) => (
            <div className="feature-card" key={num}>
              <div className="feature-image-container">
                <img className="feature-image" src={`/images/feature${num}.png`} alt={`Feature ${num}`} />
              </div>
              <h3 className="feature-title">
                {num === 1 ? 'Task Organization' : num === 2 ? 'Progress Tracking' : 'Achieve Goals'}
              </h3>
              <p className="feature-text">
                {num === 1
                  ? 'Create and manage tasks with our intuitive interface'
                  : num === 2
                  ? 'Monitor your achievements in real-time'
                  : 'Effectively and easily achieve your goals'}
              </p>
            </div>
          ))}
        </FeaturesContainer>

        {/* Call to Action Section */}
        <CtaSection>
          <div className="cta-image-container">
            <img className="cta-image" src="/images/cta_image.png" alt="Call to Action" />
          </div>
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Tracking!</h2>
            <div className="cta-buttons">
              <a href="/users/login" className="btn-primary">
                Login
              </a>
              <a href="/users/register" className="btn-primary">
                Sign Up
              </a>
            </div>
          </div>
        </CtaSection>

        {/* Information Sections */}
        {infoSections.map((info, index) => (
          <InfoSection key={index}>
            <div className="info-content">
              <h2 className="info-title">{info.title}</h2>
              <p className="info-text">{info.text}</p>
            </div>
            <div className="info-image-container">
              <img className="info-image" src={`/images/${info.img}`} alt={info.title} />
            </div>
          </InfoSection>
        ))}
      </main>

      <Footer>
        <p>&copy; 2025 CJ TaskMaster. All rights reserved.</p>
      </Footer>
    </div>
  )
}

export default Homepage
