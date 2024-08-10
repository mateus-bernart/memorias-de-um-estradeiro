import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Faça parte dessa história!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Não perca essa oportunidade! Você não irá se arrepender.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href="https://produto.mercadolivre.com.br/MLB-3793922755-memorias-de-um-estradeiro-_JM">
        <Button />
      </a>
    </div>
  </section>
);

export default CTA;
