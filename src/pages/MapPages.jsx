import { Header, Footer } from "../layout";


const MapPages = () => {
  
  return (
    <>
      <Header />
      <div className=" p-[20px] flex justify-center w-full">
        <iframe
          className="container rounded-lg "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8059596296403!2d-77.04112268866722!3d-12.056867942041103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9002eb89661%3A0x79a79f3b9c57952b!2sDOMO!5e0!3m2!1ses-419!2spe!4v1724906641707!5m2!1ses-419!2spe"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default MapPages;
