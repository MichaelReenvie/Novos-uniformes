import Time from "../Accordion/Time";

const Accordion: React.FC = () => {
  return (
    <>
      <section className="accordion container">
        <div className="accordion__content">
          <h2 className="accordion__title">
            Adidas com os novos mantos do <br />
            <strong>BAYERN, ARSENAL, REAL, JUVENTUS E UNITED.</strong>
          </h2>
          <Time />
        </div>
      </section>
    </>
  );
};

export default Accordion;
