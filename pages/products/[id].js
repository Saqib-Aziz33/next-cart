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
    <div className="product-page">
      <ProductHero product={product} />
      <PInfo product={product} />
      <HomeContact />
    </div>
  );
}
