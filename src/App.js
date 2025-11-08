import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./dwipa-logo.png"; // nanti kita tambahkan logo ke folder src
import { motion } from "framer-motion";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("Semua");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    
      const products = [
        {
          id: 1,
          title: "Template Branding Kit",
          price: 120000,
          category: "Template",
          img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80",
          link: "https://wa.me/6281217678655?text=Halo%20Dwipa%20Studio!%20Saya%20ingin%20beli%20Template%20Branding%20Kit.",
        },
        {
          id: 2,
          title: "E-book Desain Modern",
          price: 75000,
          category: "Ebook",
          img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80",
          link: "https://wa.me/6281217678655?text=Halo%20Dwipa%20Studio!%20Saya%20ingin%20beli%20E-book%20Desain%20Modern.",
        },
        {
          id: 3,
          title: "Mockup Media Sosial",
          price: 35000,
          category: "Mockup",
          img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
          link: "https://wa.me/6281217678655?text=Halo%20Dwipa%20Studio!%20Saya%20ingin%20beli%20Mockup%20Media%20Sosial.",
        },
        {
          id: 4,
          title: "Font Kreatif Premium",
          price: 45000,
          category: "Font",
          img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
          link: "https://wa.me/6281217678655?text=Halo%20Dwipa%20Studio!%20Saya%20ingin%20beli%20Font%20Kreatif%20Premium.",
        },
      ];

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = categoryFilter === "Semua" || product.category === categoryFilter;
    return matchSearch && matchCategory;
  });

  return (
    <div className="App">
      {/* Navigasi */}
      <motion.nav 
        className="navbar"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nav-container">
          <img src={logo} alt="Dwipa Studio Logo" className="logo" />
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Tentang Kami</a></li>
            <li><a href="#services">Layanan</a></li>
            <li><a href="#marketplace">Marketplace</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.header 
        className="hero" 
        id="home"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="overlay">
          <motion.h1 
            className="title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Jaringan Ide Seluas Nusantara
          </motion.h1>

          <motion.p 
            className="subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Bangun kreativitas dan kolaborasi bersama Dwipa Studio
          </motion.p>

          <motion.button 
            className="cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mulai Sekarang
          </motion.button>
        </div>
      </motion.header>

      {/* Tentang Kami */}
      <motion.section 
        id="about" 
        className="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Tentang Kami
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Dwipa Studio adalah tim kreatif yang berfokus pada pengembangan ide, desain, dan teknologi digital.
          Kami hadir untuk membantu brand dan individu membangun kehadiran digital yang kuat dan bermakna.
        </motion.p>
      </motion.section>

      {/* Layanan Kami */}
      <motion.section
        className="services"
        id="services"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Layanan Kami</h2>
        
        <div className="service-list">
          {[
            { title: "Desain Logo & Identitas", text: "Membangun citra visual yang kuat dan bermakna untuk brand Anda." },
            { title: "Produksi Konten", text: "Menyajikan konten kreatif untuk sosial media, promosi, dan kampanye digital." },
            { title: "Fotografi & Videografi", text: "Menangkap momen berharga dan mengubahnya menjadi karya visual yang hidup." },
            { title: "Desain Web & UI/UX", text: "Menghadirkan pengalaman digital yang estetik, responsif, dan fungsional." }
          ].map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Marketplace */}
      <motion.section
        className="marketplace"
        id="marketplace"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Marketplace</h2>
        <p>Temukan produk digital eksklusif dari Dwipa Studio.</p>

        {/* Kolom pencarian */}
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="category-select"
        >
          <option value="Semua">Semua Kategori</option>
          <option value="Template">Template</option>
          <option value="Ebook">Ebook</option>
          <option value="Mockup">Mockup</option>
          <option value="Font">Font</option>
        </select>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.img} alt={product.title} />
                <h3>{product.title}</h3>
                <p style={{ color: "#ff6b6b", fontWeight: "bold" }}>
                  Rp{product.price.toLocaleString("id-ID")}
                </p>
                <div className="product-actions">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Beli Sekarang</button>
                  </a>
                  <button
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowModal(true);
                    }}
                    className="detail-btn"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Tidak ada produk ditemukan.</p>
          )}
        </div>
      </motion.section>

      {showModal && selectedProduct && (
      <div className="modal-overlay" onClick={() => setShowModal(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img src={selectedProduct.img} alt={selectedProduct.title} className="modal-img" />
          <h3>{selectedProduct.title}</h3>
          <p style={{ color: "#ff6b6b", fontWeight: "bold" }}>
            Rp{selectedProduct.price.toLocaleString("id-ID")}
          </p>

          <div className="rating">
            ⭐⭐⭐⭐☆ (4.5)
          </div>

          <p className="product-desc">
            Produk digital premium yang dirancang untuk kreator dan desainer profesional.
          </p>

          <h4>Ulasan Pelanggan</h4>
          <ul className="reviews">
            <li>“Kualitas desainnya luar biasa!” – Firman</li>
            <li>“Sangat membantu untuk project saya.” – Ridho</li>
          </ul>

          <button onClick={() => setShowModal(false)} className="close-btn">
            Tutup
          </button>
        </div>
      </div>
    )}

      {/* Kontak */}
      <motion.section
        className="contact"
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Hubungi Kami</h2>

        <div className="contact-content">
          <p>
            Punya ide proyek atau ingin bekerja sama dengan Dwipa Studio?
            Jangan ragu untuk menghubungi kami melalui form di bawah ini.
          </p>

          <form
            action="https://formspree.io/f/yourformid"
            method="POST"
            className="contact-form"
          >
            <input
              type="text"
              name="name"
              placeholder="Nama Anda"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Alamat Email"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Pesan Anda..."
              required
            ></textarea>
            <button type="submit">Kirim Pesan</button>
          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3>Dwipa Studio</h3>
          <p>Jaringan Ide Seluas Nusantara</p>

          <ul className="footer-links">
            <li><a href="#home">Beranda</a></li>
            <li><a href="#about">Tentang Kami</a></li>
            <li><a href="#services">Layanan</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>

          <div className="social-icons">
              <a href="https://www.instagram.com/santzy_frost/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://whatsapp.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-tiktok"></i>
              </a>
          </div>

          <p className="copyright">© 2025 Dwipa Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
