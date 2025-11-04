import React from "react";
import "./App.css";
import logo from "./dwipa-logo.png"; // nanti kita tambahkan logo ke folder src

function App() {
  return (
    <div className="App">
      {/* Navigasi */}
      <nav className="navbar">
        <div className="nav-container">
          <img src={logo} alt="Dwipa Studio Logo" className="logo" />
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Tentang Kami</a></li>
            <li><a href="#services">Layanan</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="overlay">
          <h1 className="title">Jaringan Ide Seluas Nusantara</h1>
          <p className="subtitle">
            Bersama Dwipa Studio — Ruang Kolaborasi Kreatif Tanpa Batas
          </p>
          <button className="cta">Mulai Eksplorasi</button>
        </div>
      </header>

      {/* Tentang Kami */}
      <section className="about" id="about">
        <h2 className="section-title">Tentang Kami</h2>
        <p className="section-text">
          Dwipa Studio hadir sebagai ruang kolaborasi kreatif yang memadukan ide, desain, dan teknologi. 
          Kami percaya bahwa setiap karya memiliki jiwa, dan tugas kami adalah membantu setiap klien 
          menemukan serta mengekspresikan identitas visual terbaik mereka.
        </p>
      </section>

      {/* Layanan Kami */}
      <section className="services" id="services">
        <h2 className="section-title">Layanan Kami</h2>
        <div className="service-list">
          <div className="service-card">
            <h3>Desain Logo & Identitas</h3>
            <p>Membangun citra visual yang kuat dan bermakna untuk brand Anda.</p>
          </div>
          <div className="service-card">
            <h3>Produksi Konten</h3>
            <p>Menyajikan konten kreatif untuk sosial media, promosi, dan kampanye digital.</p>
          </div>
          <div className="service-card">
            <h3>Fotografi & Videografi</h3>
            <p>Menangkap momen berharga dan mengubahnya menjadi karya visual yang hidup.</p>
          </div>
          <div className="service-card">
            <h3>Desain Web & UI</h3>
            <p>Menghadirkan pengalaman digital yang estetis, responsif, dan fungsional.</p>
          </div>
        </div>
      </section>

      {/* Kontak Kami */}
      <section className="contact" id="contact">
        <h2 className="section-title">Kontak Kami</h2>
        <p className="section-text">
          Punya ide, proyek, atau kolaborasi yang ingin kamu wujudkan?  
          Hubungi kami melalui form di bawah ini!
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Nama" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Pesan kamu..." rows="4" required></textarea>
          <button type="submit">Kirim Pesan</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Dwipa Studio — Jaringan Ide Seluas Nusantara</p>
      </footer>
    </div>
  );
}

export default App;
