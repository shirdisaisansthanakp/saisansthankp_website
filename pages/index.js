import ImageUpload from "../components/ImageUpload";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import { getPxFromRem } from '../utils';
import 'bootstrap/dist/css/bootstrap.min.css';

const BannerImage = () => (
  <Image
    src="/images/banner.jpg"
    width={getPxFromRem()}
    height={getPxFromRem(40)}
  />
);

export default function Home() {
  return (
    <>
      <ImageUpload />
      <Header />
      <Navbar />
      <BannerImage />
      <Gallery />
    </>
  )
}
