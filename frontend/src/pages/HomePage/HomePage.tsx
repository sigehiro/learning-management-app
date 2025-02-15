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
  return (
    <div>
      {/* ヘッダー */}
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
          {/* Feature Cards Feature 1 */}
          <div className="feature-card">
            <div className="feature-image-container">
              <img className="feature-image" src="/images/feature1.png" alt="Organization" />
            </div>
            <h3 className="feature-title">Task Organization</h3>
            <p className="feature-text">Create and manage tasks with our intuitive interface</p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-image-container">
              <img className="feature-image" src="/images/feature2.png" alt="Tracking" />
            </div>
            <h3 className="feature-title">Progress Tracking</h3>
            <p className="feature-text">Monitor your achievements in real-time</p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-image-container">
              <img className="feature-image" src="/images/feature3.png" alt="Collaboration" />
            </div>
            <h3 className="feature-title">Achieve Goals</h3>
            <p className="feature-text">Effectively and easily achieve your goals</p>
          </div>
        </FeaturesContainer>

        {/* Call to Action Section */}
        <CtaSection>
          <div className="cta-image-container">
            <img className="cta-image" src="/images/cta_image.png" alt="Call to Action" />
          </div>
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Tracking!</h2>
            <div className="cta-buttons">
              <a href="/users/login" className="btn-primary edit-button">
                Login
              </a>
              <a href="/users/register" className="btn-primary edit-button">
                Sign Up
              </a>
            </div>
          </div>
        </CtaSection>

        {/* Progress Management Section */}
        <InfoSection>
          <div className="info-content">
            <h2 className="info-title">Easy to understand progress management</h2>
            <p className="info-text">Our intuitive interface makes tracking progress simple and effective</p>
          </div>
          <div className="info-image-container">
            <img className="info-image" src="/images/progress_management.png" alt="Progress Management" />
          </div>
        </InfoSection>

        {/* Time Saving Section */}
        <InfoSection>
          <div className="info-content">
            <h2 className="info-title">Saves you time</h2>
            <p className="info-text">Streamline your workflow and focus on what matters most</p>
          </div>
          <div className="info-image-container">
            <img className="info-image" src="/images/save_time.png" alt="Time Saving" />
          </div>
        </InfoSection>
      </main>

      <Footer>
        <p>&copy; 2025 CJ TaskMaster. All rights reserved.</p>
      </Footer>
    </div>
  )
}

export default Homepage
