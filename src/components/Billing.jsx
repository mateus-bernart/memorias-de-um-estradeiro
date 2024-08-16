import { apple, bill, google, author } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="author" className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse}`}>
      <img
        src={author}
        alt="billing"
        className="w-[60%] h-[100%] relative z-index[5] rounded-[20px]"
      />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full yellow__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full yellow__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-gradient`}>
        Sobre <br className="sm:block hidden" />o autor
      </h2>
      <p className={`${styles.paragraph} max-w-[4700px] mt-5`}>
        Graduado em Administração de Empresas pela Universidade Campos de
        Andrade, João Troc traz consigo uma sólida formação acadêmica. Além
        disso, possui Pós-Graduação em Administração e Marketing, assim como em
        Gestão de Logística. Mora em Concórdia - SC com a sua esposa, duas
        filhas e duas cachorrinhas.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 "></div>
    </div>
  </section>
);

export default Billing;
