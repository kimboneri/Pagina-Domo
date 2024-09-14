const SectionNotice = () => {
  return (
    <section className="container  mx-auto  my-[200px]">
      <h2 className=" mb-10 text-center text-[55px] text-[#3a7a9dd7] font-Minecrafter ">
        Noticias
      </h2>
      <div className="flex justify-between gap-2   ">
        <article >
          <div className="relative group rounded-lg">
            <img
              className="w-[700px] h-[360px] rounded-lg "
              src="assets/noticias/noticias-gta4.webp"
              alt="img"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300">
              <a href="https://vandal.elespanol.com/noticia/1350773595/la-mecanica-oculta-de-gta-iv-que-sigue-llamando-la-atencion-15-anos-despues/">
                <p  className="font-Minecrafter text-center p-[10px] rounded-lg  bg-[#1c232be9] hover:bg-[#434e5ce9]">Ver mas</p>
              </a>
            </div>
          </div>
          <p className="font-LilitaOne text-[25px] text-center">
            La mecánica oculta de GTA IV que sigue llamando la atencion 15 años
            después.
          </p>
        </article>
        <article>
          <div className="relative group ">
            <img  className="w-[700px] h-[360px] rounded-lg" src="assets/noticias/noticias-gof-ragnarok.avif" alt="img" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300">
              <a href="https://rpp.pe/tecnologia/videojuegos/god-of-war-ragnarok-requisitos-minimos-recomendados-y-el-espacio-brutal-necesario-para-instalar-el-juego-noticia-1576009">
                <p  className="font-Minecrafter text-center p-[10px] rounded-lg  bg-[#1c232be9] hover:bg-[#434e5ce9]">Ver mas</p>
              </a>
            </div>
          </div>
          <p className="font-LilitaOne text-[25px] text-center">
            Good of War Ragnarok, requisitos mínimos y el espacio necesario para
            instalar el juego.
          </p>
        </article>
        <article>
          <div className="relative group ">
            <img  className="w-[700px] h-[360px] rounded-lg " src="assets/noticias/noticias-Switch.webp" alt="img" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300">
              <a href="https://rpp.pe/videojuegos/nintendo/los-ingresos-de-nintendo-se-desploman-mientras-el-mundo-espera-a-la-sucesora-de-la-switch-noticia-1573769">
                <p className="font-Minecrafter text-center p-[10px] rounded-lg  bg-[#1c232be9] hover:bg-[#434e5ce9]">Ver mas</p>
              </a>
            </div>
          </div>
          <p className="font-LilitaOne text-[25px] text-center">
            Los ingresos de Nintendo se desploman mientras el mundo espera a la
            sucesora de la Switch
          </p>
        </article>
      </div>
    </section>
  );
};

export default SectionNotice;
