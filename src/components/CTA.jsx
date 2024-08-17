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
        Pague com <span className="text-gradient">pix</span> e ganhe{" "}
        <span className="underline-animation">frete grátis</span> pelo nosso{" "}
        <span className="green-gradient">Whatsapp</span>!
      </h2>
    </div>

    <div className={`sm:ml-10 ml-0 sm:mt-0 mt-5 mb-5`}>
      <a href="https://wa.link/xej2fy">
        <img
          src={wppgreen}
          className={`w-[100px] h-[100px] object-contain cursor-pointer`}
          onClick={() => (window.location.href = socialMedia.link)} // Assuming "link" is the property that contains the URL
        />

        <button
          type="button"
          className={`py-4 px-6 bg-green-600 font-poppins font-medium text-[25px] text-white outline-none ${styles} rounded-[8px] mt-5`}
        >
          Chamar agora!
        </button>
      </a>
    </div>
  </section>
);

export default CTA;
