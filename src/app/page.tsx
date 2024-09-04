import CardHome from "./components/Card/CardHome";
import HeaderItems from "./components/Card/HeaderItems";
import SimpleSlider from "./components/HomePage/Slider";

export default function Home() {
  return (
    <main className="mx-20">
      <SimpleSlider />
      <HeaderItems ShowAll={true} />
      <CardHome />
    </main>
  );
}
