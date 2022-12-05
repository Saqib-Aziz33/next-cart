import Head from "next/head";
import HomeContact from "../../components/elements/HomeContact";
import PInfo from "../../components/elements/PInfo";
import ProductHero from "../../components/elements/ProductHero";

export async function getServerSideProps(context) {
  const responce = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const product = await responce.json();

  return {
    props: { product },
  };
}

export default function ProductPage({ product }) {
  return (
    <>
      {/* seo */}
      <Head>
        <title>Next Cart - {product.title}</title>
        <meta name="description" content={product.description} />
        <meta name="title" content={product.title} />
        <meta
          name="keywords"
          content={`ecommerce, fake-store, next-ecommerce, ${product.category}`}
        />
        {/* face book */}
        <meta property="og:title" content={product.title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={product.image} />
        {/* twitter */}
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* content */}
      <div className="product-page">
        <ProductHero product={product} />
        <PInfo product={product} />
        <HomeContact />
      </div>
    </>
  );
}
