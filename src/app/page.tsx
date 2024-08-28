import AllCards from "./components/Card/AllCards";
import HeaderItems from "./components/Card/HeaderItems";

export default function Home() {
  return (
    <main className="mx-20">
      {/* <Slider /> */}
      <HeaderItems ShowAll={true} />
      <AllCards />
    </main>
  );
}
