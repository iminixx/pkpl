import React from "react";
import ProductGallery from "../components/ProductGallery";
import bigImage from "../img/toomas-tartes-Yizrl9N_eDA-unsplash (1).jpg";
import "../css/style.css";
import "../css/home.css";

const Homepage = () => {
  return (
    <div>
      <div className="home-container">
        <div className="big-image">
          <img src={bigImage} alt="Big Image" />
        </div>
        <div className="content">
          <h1>Welcome to Our Website</h1>
          <p>
            Kami bangga menawarkan berbagai produk outdoor berkualitas tinggi
            yang dirancang untuk menemani petualangan Anda di alam terbuka. Dari
            tenda yang tahan cuaca hingga perlengkapan hiking dan peralatan
            berkemah, setiap produk kami dibuat dengan perhatian terhadap detail
            dan ketahanan. Kami memahami pentingnya perlengkapan yang andal dan
            nyaman saat menjelajahi alam, itulah sebabnya kami hanya menyediakan
            produk dari merek terpercaya. Baik Anda seorang pendaki
            berpengalaman atau baru memulai eksplorasi luar ruangan, kami
            memiliki semua yang Anda butuhkan untuk membuat perjalanan Anda aman
            dan menyenangkan. Temukan rangkaian produk outdoor kami dan
            bersiaplah untuk petualangan berikutnya dengan perlengkapan terbaik
            dari kami.
          </p>
        </div>
        <ProductGallery />
      </div>
    </div>
  );
};

export default Homepage;
