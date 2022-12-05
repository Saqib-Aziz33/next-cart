import AvailableItems from "../components/elements/AvailableItems";
import Hero from "../components/elements/Hero";
import HomeContact from "../components/elements/HomeContact";
import Intro from "../components/elements/Intro";

export async function getServerSideProps() {
  const responce = await fetch("https://fakestoreapi.com/products/");
  const products = await responce.json();

  return {
    props: { products },
  };
}

export default function Home({ products }) {
  return (
    <>
      <Hero />
      <Intro />
      <AvailableItems products={products} />
      <HomeContact />
    </>
  );
}
