import Hero from "@/components/hero/Hero";
import NavMenu from "@/components/navMenu/NavMenu";

 
export default function Home() {
  return (
    <>
      <div id='container' className='flex h-screen'>
        <NavMenu/>
        <div id='contentsContainer' className='2xl:ml-[400px] w-full'>
          <Hero/>
          <Hero/>
          <Hero/>
          <Hero/>
          <Hero/>
          <Hero/>
          <Hero/>
        </div>
      </div>
    </>
  );
}
