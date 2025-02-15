import styled from 'styled-components'

//-----------Header area-----------
export const Header = styled.header`
  background-color: #f0f0f0;
  padding: 30px 20px;
  text-align: right;
`

export const Navigation = styled.nav`
  display: inline-block;
`

export const LoginLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  border: 1px solid #333;
  border-radius: 5px;
`
//-----------ここまでHeader area-----------

export const HeroSection = styled.section`
  width: 100%;
  background-color: #f7f7f7;
  text-align: center;
  padding: 0 0 20px;

  .hero-image {
    width: 100%;
    height: auto;
  }

  .hero-content {
    position: relative;
    top: -50px;
    color: #fff;
  }
`

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px 0;

  .feature-card {
    flex: 1;
    margin: 0 20px;
    text-align: center;

    // フィーチャーカードの最大幅を指定
    max-width: 300px; // 必要に応じて調整

    .feature-image-container {
      width: 100%; // カード全体を使う
      height: auto;

      .feature-image {
        width: 100%;
        height: auto;
        max-height: 200px; // 必要に応じて最大高さを指定
        object-fit: cover; // アスペクト比を維持しつつサイズを調整
      }
    }
  }
`

export const CtaSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #f0f8ff;

  .cta-content {
    flex: 1; // コンテンツが左側
    margin-left: 20px; // 右側の画像とのスペース
    text-align: left;

    h2 {
      margin-bottom: 10px;
      text-align: center;
    }

    .cta-buttons {
      display: flex;
      gap: 10px;
      justify-content: center;
    }
  }

  .cta-image-container {
    flex: 1; // 画像が右側

    .cta-image {
      width: 100%;
      height: auto;
    }
  }

  .btn-primary {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
  }
`

export const InfoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;

  &:nth-child(odd) {
    // Even sections with reversed layout
    flex-direction: row-reverse;
  }

  .info-content {
    flex: 1;
    margin-right: 20px;

    h2 {
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 0;
    }
  }

  .info-image-container {
    flex: 1;

    .info-image {
      width: 100%;
      height: auto;
    }
  }
`

// -----------Footer area-----------
export const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;

  p {
    margin: 0;
    font-size: 14px;
  }
`
