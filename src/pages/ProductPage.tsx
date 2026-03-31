import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { productData, allProducts } from "@/data/productData";
import ProductHero from "@/components/product/ProductHero";
import ProductIntro from "@/components/product/ProductIntro";
import CoreAdvantages from "@/components/product/CoreAdvantages";
import ApplicationsSection from "@/components/product/ApplicationsSection";
import TechnicalData from "@/components/product/TechnicalData";
import MaintenanceSection from "@/components/product/MaintenanceSection";
import InstallationGuide from "@/components/product/InstallationGuide";
import RelatedProducts from "@/components/product/RelatedProducts";
import DownloadCatalog from "@/components/DownloadCatalog";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;
  const relatedProducts = allProducts.filter((p) => p.slug !== slug).slice(0, 2);

  if (!product) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">Browse all products</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ProductHero image={product.image} name={product.name} tagline={product.tagline} />
      <ProductIntro image={product.image} name={product.name} intro={product.intro} />
      <CoreAdvantages features={product.features} />
      <ApplicationsSection productName={product.name} applications={product.applications} />
      <TechnicalData specs={product.specs} />
      <MaintenanceSection tips={product.maintenance} />
      <InstallationGuide steps={product.installation} />
      <DownloadCatalog />
      <RelatedProducts products={relatedProducts} />
    </Layout>
  );
};

export default ProductPage;
