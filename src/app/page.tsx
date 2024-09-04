import CardHome from "./components/Card/CardHome";
import HeaderItems from "./components/Card/HeaderItems";
import SimpleSlider from "./components/HomePage/Slider";

export default function Home() {
  return (
    <main className="md:md:mx-20 mx-5 mx-5">
      <SimpleSlider />
      <HeaderItems ShowAll={true} />
      <CardHome />
    </main>
  );
}
