import { useState, useEffect } from 'react';
import logo from './assets/Logo.png'


const Icons = {
  Shield: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
  ),
  Truck: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
  ),
  CreditCard: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
  ),
  Search: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  ),
  Box: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
  ),
  Heart: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
  ),
  User: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  Cart: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
  ),
  Crown: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
  ),
  Tech: () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2v9h16V8H4zm4 11h8v2H8v-2z"/></svg>
  ),
  Supermarket: () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h6v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/></svg>
  ),
  Drinks: () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.65 5h12.7l-1.78 2H7.43z"/></svg>
  ),
  Tools: () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
  ),
  Health: () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/></svg>
  ),
  Fitness: () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 6.29 3.43 7.71 4.86 3.43 9.14 2 7.71.57 9.14 2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22 14.86 20.57 16.29 22 17.71 20.57 19.14 22 20.57 20.57 19.14 19.14 20.57 17.71z"/></svg>
  ),
  Fashion: () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 18.2L13 11.75V9c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3h2c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1c-.55 0-1 .45-1 1v2.75L2.4 18.2c-.42.32-.6.86-.44 1.36.16.5.62.84 1.14.84h17.8c.52 0 .98-.34 1.14-.84.16-.5-.02-1.04-.44-1.36zM5.5 18l6.5-4.88L18.5 18H5.5z"/></svg>
  ),
  ChevronLeft: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
  ),
  ChevronRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
  )
};

const PRODUCTS_API = "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

type Product = {
  productName: string;
  photo: string;
  price: number;
  descriptionShort: string;
};

const mockProducts: Product[] = [
  { productName: "Iphone 11 PRO MAX BRANCO 1", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 15000, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { productName: "IPHONE 13 MINI 1", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 9000, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { productName: "Iphone 11 PRO MAX BRANCO 2", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 14990, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { productName: "IPHONE 13 MINI 2", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 12000, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { productName: "Iphone 11 PRO MAX BRANCO 3", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 4550, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { productName: "IPHONE 13 MINI 3", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 38000, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { productName: "Iphone 11 PRO MAX BRANCO 4", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 42000, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { productName: "IPHONE 13 MINI 4", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 520, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
];

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalQuantity, setModalQuantity] = useState(1);
  const [activeCategory, setActiveCategory] = useState("");
  const [activeTab, setActiveTab] = useState("CELULAR");
  const [cartCount, setCartCount] = useState(0);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  useEffect(() => {
    fetch(PRODUCTS_API)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && data.products) {
          setProducts(data.products);
        } else {
          setProducts(mockProducts);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn("API fallback triggered:", err);
        setProducts(mockProducts);
        setLoading(false);
      });
  }, []);

  const formatPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalQuantity(1);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + modalQuantity);
    setSelectedProduct(null);
  };

  const categoriesList = [
    { name: "Tecnologia", icon: <Icons.Tech /> },
    { name: "Supermercado", icon: <Icons.Supermarket /> },
    { name: "Bebidas", icon: <Icons.Drinks /> },
    { name: "Ferramentas", icon: <Icons.Tools /> },
    { name: "Saúde", icon: <Icons.Health /> },
    { name: "Esportes e Fitness", icon: <Icons.Fitness /> },
    { name: "Moda", icon: <Icons.Fashion /> },
  ];

  const tabsList = ["CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS", "VER TODOS"];

  return (
    <div className="app-root">
      {/* TopBar */}
      <header className="header-topbar">
        <div className="container">
          <div className="topbar-item">
            <Icons.Shield />
            <p>Compra<span> 100% segura</span></p>
          </div>
          <div className="topbar-item">
            <Icons.Truck />
            <p><span>Frete grátis</span> acima de R$ 200</p>
          </div>
          <div className="topbar-item">
            <Icons.CreditCard />
            <p><span>Parcele</span> suas compras</p>
          </div>
        </div>
      </header>

      {/* Main Header */}
      <header className="main-header">
        <div className="container">
          <a href="#" className="logo">
              <img src={logo} alt="" />
          </a>

          <div className="search-box">
            <input type="text" placeholder="O que você está procurando?" />
            <button aria-label="Buscar"><Icons.Search /></button>
          </div>

          <div className="header-actions">
            <button className="action-btn" title="Meus Pedidos"><Icons.Box /></button>
            <button className="action-btn" title="Favoritos"><Icons.Heart /></button>
            <button className="action-btn" title="Minha Conta"><Icons.User /></button>
            <button className="action-btn" title="Carrinho">
              <Icons.Cart />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="category-nav">
        <div className="container">
          <a href="#" className="nav-item">Todas Categorias</a>
          <a href="#" className="nav-item">Supermercado</a>
          <a href="#" className="nav-item">Livros</a>
          <a href="#" className="nav-item">Moda</a>
          <a href="#" className="nav-item">Lançamentos</a>
          <a href="#" className="nav-item highlight">Ofertas do Dia</a>
          <a href="#" className="nav-item "> <Icons.Crown /> Assinatura
          </a>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="banner-card">
          <h1>Venha conhecer nossas promoções</h1>
          <p>50% Off <span>nos produtos</span></p>
          
          <button className="btn-hero">Ver produto</button>
        </div>
      </section>

      {/* Category Icons Grid */}
      <section className="categories-section">
        <div className="grid">
          {categoriesList.map((cat, idx) => (
            <div 
              key={idx} 
              className={`cat-card ${activeCategory === cat.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.name)}>
              <div className="icon-box">
                {cat.icon}
              </div>
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Product Shelf 1 */}
      <section className="section-header">
        <div className="title-wrapper">
          <div className="line"></div>
          <h2>Produtos relacionados</h2>
          <div className="line"></div>
        </div>

        <div className="nav-tabs">
          {tabsList.map((tab, idx) => (
            <button 
              key={idx}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      <section className="product-shelf">
        <div className="shelf-wrapper">
          <button className="nav-arrow prev" aria-label="Anterior"><Icons.ChevronLeft /></button>
          
          <div className="products-grid">
            {loading ? (
              <p style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '30px' }}>Carregando produtos...</p>
            ) : (
              products.slice(0, 4).map((product, idx) => (
                <div key={idx} className="product-card">
                  <div className="img-container">
                    <img src={product.photo} alt={product.productName} />
                  </div>
                  <div className="prod-title">{product.productName}</div>
                  <div className="old-price">{formatPrice(product.price * 1.15)}</div>
                  <div className="current-price">{formatPrice(product.price)}</div>
                  <div className="installments">ou 2x de {formatPrice(product.price / 2)} sem juros</div>
                  <div className="free-shipping">Frete grátis</div>
                  <button 
                    className="buy-btn"
                    onClick={() => handleOpenModal(product)}
                  >
                    COMPRAR
                  </button>
                </div>
              ))
            )}
          </div>

          <button className="nav-arrow next" aria-label="Próximo"><Icons.ChevronRight /></button>
        </div>
      </section>

      {/* Partner Banners Row 1 */}
      <section className="partner-banners">
        <div className="partner-card">
          <h3>Parceiros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button className="btn-partner">CONFIRA</button>
        </div>
        <div className="partner-card">
          <h3>Parceiros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button className="btn-partner">CONFIRA</button>
        </div>
      </section>

      {/* Second Product Shelf */}
      <section className="section-header">
        <div className="title-wrapper">
          <div className="line"></div>
          <h2>Produtos relacionados</h2>
          <div className="line"></div>
        </div>
        <div className="ver-todos-link">Ver todos</div>
      </section>

      <section className="product-shelf">
        <div className="shelf-wrapper">
          <button className="nav-arrow prev" aria-label="Anterior"><Icons.ChevronLeft /></button>
          
          <div className="products-grid">
            {products.slice(4, 8).map((product, idx) => (
              <div key={idx} className="product-card">
                <div className="img-container">
                  <img src={product.photo} alt={product.productName} />
                </div>
                <div className="prod-title">{product.productName}</div>
                <div className="old-price">{formatPrice(product.price * 1.15)}</div>
                <div className="current-price">{formatPrice(product.price)}</div>
                <div className="installments">ou 2x de {formatPrice(product.price / 2)} sem juros</div>
                <div className="free-shipping">Frete grátis</div>
                <button 
                  className="buy-btn"
                  onClick={() => handleOpenModal(product)}
                >
                  COMPRAR
                </button>
              </div>
            ))}
          </div>

          <button className="nav-arrow next" aria-label="Próximo"><Icons.ChevronRight /></button>
        </div>
      </section>

      {/* Partner Banners Row 2 */}
      <section className="partner-banners">
        <div className="partner-card">
          <h3>Parceiros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button className="btn-partner">CONFIRA</button>
        </div>
        <div className="partner-card">
          <h3>Parceiros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button className="btn-partner">CONFIRA</button>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <h2>Navegue por marcas</h2>
        <div className="brands-grid">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`brand-circle ${i === 1 ? 'highlighted' : ''}`}>
              <div className="brand-logo-text">
                econverse<span>.</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Third Product Shelf */}
      <section className="section-header">
        <div className="title-wrapper">
          <div className="line"></div>
          <h2>Produtos relacionados</h2>
          <div className="line"></div>
        </div>
        <div className="ver-todos-link">Ver todos</div>
      </section>

      <section className="product-shelf">
        <div className="shelf-wrapper">
          <button className="nav-arrow prev" aria-label="Anterior"><Icons.ChevronLeft /></button>
          
          <div className="products-grid">
            {products.slice(0, 4).map((product, idx) => (
              <div key={idx} className="product-card">
                <div className="img-container">
                  <img src={product.photo} alt={product.productName} />
                </div>
                <div className="prod-title">{product.productName}</div>
                <div className="old-price">{formatPrice(product.price * 1.15)}</div>
                <div className="current-price">{formatPrice(product.price)}</div>
                <div className="installments">ou 2x de {formatPrice(product.price / 2)} sem juros</div>
                <div className="free-shipping">Frete grátis</div>
                <button 
                  className="buy-btn"
                  onClick={() => handleOpenModal(product)}
                >
                  COMPRAR
                </button>
              </div>
            ))}
          </div>

          <button className="nav-arrow next" aria-label="Próximo"><Icons.ChevronRight /></button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="news-text">
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
          </div>
          <form className="news-form" onSubmit={(e) => { e.preventDefault(); setNewsletterSubscribed(true); }}>
            <div className="inputs-row">
              <input type="text" placeholder="Digite seu nome" required />
              <input type="email" placeholder="Digite seu e-mail" required />
              <button type="submit">INSCREVER</button>
            </div>
            <div className="terms-row">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">Aceito os termos e condições</label>
            </div>
            {newsletterSubscribed && (
              <p style={{ color: '#FFD700', fontSize: '12px', marginTop: '4px' }}>✓ Inscrição realizada com sucesso!</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-about">
            <div className="logo-text" style={{ fontSize: '24px', fontWeight: 800, color: '#3442B0' }}>
              econverse<span style={{ color: '#F7C200' }}>.</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="social-icons">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="LinkedIn">IN</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Institucional</h4>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Movimento</a></li>
              <li><a href="#">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Ajuda</h4>
            <ul>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Termos</h4>
            <ul>
              <li><a href="#">Termos e Condições</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Troca e Devolução</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </footer>

      {/* Modal Popup */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProduct(null)}>×</button>
            
            <div className="modal-img">
              <img src={selectedProduct.photo} alt={selectedProduct.productName} />
            </div>

            <div className="modal-info">
              <h2>LOREM IPSUM DOLOR SIT AMET</h2>
              <div className="price">{formatPrice(selectedProduct.price)}</div>
              <p className="description">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
              </p>
              <a className="more-details">Veja mais detalhes do produto &gt;</a>

              <div className="qty-row">
                <div className="qty-picker">
                  <button onClick={() => setModalQuantity(Math.max(1, modalQuantity - 1))}>-</button>
                  <span>{modalQuantity.toString().padStart(2, '0')}</span>
                  <button onClick={() => setModalQuantity(modalQuantity + 1)}>+</button>
                </div>
                <button className="btn-modal-buy" onClick={handleAddToCart}>
                  COMPRAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}