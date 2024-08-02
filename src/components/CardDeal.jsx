import { card, cuia1, cuia2 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Produtos <br className="sm:block hidden" />
        Personalizados
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10 rounded-[10px]" />
    </div>

    <div className={`${layout.sectionImg} space-x-10`}>
      <img src={cuia1} alt="card" className="w-[50%] h-[50%] rounded-[20px]" />
      <img src={cuia2} alt="card" className="w-[50%] h-[50%] rounded-[20px]" />
    </div>

    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full yellow__gradient" />
  </section>
);
export default CardDeal;
