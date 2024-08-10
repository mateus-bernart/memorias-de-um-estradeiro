import { card, cuia1, cuia2 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-gradient`}>
        Produtos <br className="sm:block hidden" />
        Personalizados
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Da tradição das estradas, a cuia é um símbolo da cultura do autor. Seu
        objetivo é principalmente as boas conversas!
      </p>
      <a href="https://produto.mercadolivre.com.br/MLB-3796356899-cuia-personalizada-do-livro-memorias-de-um-estradeiro-_JM">
        <Button styles="mt-10 rounded-[10px]" />
      </a>
    </div>

    <div className={`${layout.sectionImg} space-x-5`}>
      <img src={cuia1} alt="card" className="w-[50%] h-[100%] rounded-[20px]" />
      <img src={cuia2} alt="card" className="w-[50%] h-[100%] rounded-[20px]" />
    </div>

    <div className="absolute z-[0] w-[60%] h-[60] rounded-full yellow__gradient" />
  </section>
);
export default CardDeal;
