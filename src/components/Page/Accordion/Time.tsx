import React, { useState } from "react";
import Bayer from "../../image/1-Bayer.jpg";
import Arsenal from "../../image/2-Arsenal.png";
import Real from "../../image/3-Real.png";
import Juventus from "../../image/4-Juventus.png";
import United from "../../image/5-United.png";

const Time: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionItems = [
    {
      title: "Bayern de Munique",
      image: Bayer,
      description: `A nova camisa três do Bayern foi batizada como “UCL Kit” e traz a
              cor bege predominante, com gola polo com botão, acompanhada por
              frisos vermelhos e bordô nas pontas, padrão que se repete nos
              punhos. Ao longo do corpo do manto é visto um padrão em jacquard
              com diamantes em degrade.`,
      link: "https://mantosdofutebol.com.br/2024/08/terceira-camisa-bayern-de-munique-2024-2025-adidas/",
    },
    {
      title: "Arsenal Football Club",
      image: Arsenal,
      description: ` A nova terceira camisa do Arsenal traz a cor azul clara, misturado
              com tons de lilás também claros, que se misturam em degrade
              formando um design “líquido”. Segundo a Adidas, o novo uniforme
              celebra a evolução da “originalidade”, desde os jogadores até a
              torcida.`,
      link: "https://mantosdofutebol.com.br/2024/08/terceira-camisa-arsenal-2024-2025-adidas/#google_vignette",
    },
    {
      title: "Real Madrid",
      image: Real,
      description: ` A nova terceira camisa do Real Madrid é cinza carvão e traz ao
              longo de todo o corpo do manto, a sigla “RMCF” aplicada em
              jacquard.`,
      link: "https://mantosdofutebol.com.br/2024/08/terceira-camisa-real-madrid-2024-2025-adidas/",
    },
    {
      title: "Juventus",
      image: Juventus,
      description: ` O novo “third kit” da Juventus ganha um tom de azul meia-noite
              (quase preto) e ganha um padrão gráfico em jacquard que se repete
              ao longo de todo o corpo do kit. Segundo o clube, a inspiração é o
              reflexo da lua na abóboda celeste.`,
      link: "https://mantosdofutebol.com.br/2024/08/terceira-camisa-juventus-2024-2025-adidas/",
    },
    {
      title: "Manchester United",
      image: United,
      description: `O novo manto alternativo do Manchester United é off-white e traz
              faixas horizontais vermelhas e pretas no peito, formando o desenho
              da bandeira tricolor, levada pelos torcedores aos jogos.`,
      link: "https://mantosdofutebol.com.br/2024/08/terceira-camisa-manchester-united-2024-2025-adidas/",
    },
  ];

  return (
    <>
      {accordionItems.map((item, index) => (
        <div className="accordion__item" key={index}>
          <header className="item__header" onClick={() => handleToggle(index)}>
            <i
              className={`bx ${
                activeIndex === index ? "bx-chevron-up" : "bx-chevron-down"
              } item__icon`}
            ></i>
            <h4 className="item__question">{item.title}</h4>
          </header>
          <div
            className="item__content"
            style={{
              maxHeight: activeIndex === index ? "400px" : "0px", // Adjust maxHeight as needed
              overflow: "hidden",
              transition: "max-height 0.3s ease-out", // Smooth transition for accordion effect
            }}
          >
            <img src={item.image} alt={item.title} />
            <p className="item__answer">{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="button-70" role="button">
                Ver mais
              </button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Time;
