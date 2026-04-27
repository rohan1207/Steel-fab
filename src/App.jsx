import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import MobileBlocker from "@/components/ui/MobileBlocker";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProductsPage from "@/pages/ProductsPage";
import ContactPage from "@/pages/ContactPage";
import EnquiryPage from "@/pages/EnquiryPage";
import ClientsPage from "@/pages/ClientsPage";
import DownloadPage from "@/pages/DownloadPage";
import GlobalPage from "@/pages/GlobalPage";
import CareersPage from "@/pages/CareersPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import NotFound from "@/pages/NotFoundPage";

function ProductDetailRoute() {
  const params = useParams();
  return <ProductDetailPage params={params} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <MobileBlocker>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailRoute />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/global" element={<GlobalPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/about/introduction" element={<Navigate to="/about" replace />} />
          <Route path="/about/factory" element={<Navigate to="/about" replace />} />
          <Route path="/about/manufacturing" element={<Navigate to="/about" replace />} />
          <Route path="/about/quality" element={<Navigate to="/about" replace />} />
          <Route path="/about/certificates" element={<Navigate to="/about" replace />} />
          <Route path="/about/vendor-certificate" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MobileBlocker>
    </BrowserRouter>
  );
}
