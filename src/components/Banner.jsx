import { useEffect } from "react";

const Banner = ({ children }) => {
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      i = (i + 1) % 4;

      const adjustElement = document.getElementById("banner");

      if (!adjustElement) {
        return;
      } else {
        adjustElement.className = `imagen${i + 1} `;
      }
    }, 2000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="banner" className="relative">
      {children}
     
    </div>
  );
};

export default Banner;
