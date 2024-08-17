import styles from "../style";
import Button from "./Button";
import { socialMedia } from "../constants";
import { wpp, wppgreen } from "../assets";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Pague com <span className="text-gradient">pix</span> de forma ágil pelo
        nosso <span className="green-gradient">Whatsapp</span>!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        E tem mais: o frete é por nossa conta!
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gradient`}>
        Clique no Ícone do Whatsapp ao lado
      </p>
    </div>

    <div className={`sm:ml-10 ml-0 sm:mt-0 mt-5`}>
      <a href="">
        <img
          src={wppgreen}
          className={`w-[100px] h-[100px] object-contain cursor-pointer`}
          onClick={() => (window.location.href = socialMedia.link)} // Assuming "link" is the property that contains the URL
        />
      </a>
    </div>
  </section>
);

export default CTA;
