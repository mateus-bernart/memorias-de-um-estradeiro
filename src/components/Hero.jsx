import styles from "../style";
import { discount, robot, bookcapa, bookverso } from "../assets";
import GetStarted from "./GetStarted";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Memórias de um <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Estradeiro</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <a href="https://produto.mercadolivre.com.br/MLB-3793922755-memorias-de-um-estradeiro-_JM">
              <Button />
            </a>
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Em Memórias de um Estradeiro', mergulhe nas páginas emocionantes sobre
          um homen cuja vida se entrelaça com as estradas, empresas e postos que
          administrou Nessa jornada narrativa, João Troc compartilha não apenas
          os desafios e triunfos do mundo dos negócios, mas também as histórias
          pessoais e íntimas que moldaram a sua visão de mundo. Uma obra que vai
          além de relatar acontecimentos, 'Memórias de um Estradeiro' é um
          convite para reviver momentos de alegria, superar dificuldades e
          valorizar as conexões humanas que nos sustentam. Uma leitura
          envolvente que nos lembra que, no final, são as histórias e as pessoas
          que encontramos ao longo do caminho que realmente importam.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={bookcapa}
          alt="bookcapa"
          className=" sm:h-[50%] sm:w-[50%] md:w-[60%] md:h-[100%] w-[70%] h-[100%] relative z-[5] rounded-[10px]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 yellow__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full yellow__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 yellow__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <a href="https://produto.mercadolivre.com.br/MLB-3793922755-memorias-de-um-estradeiro-_JM">
          <Button />
        </a>
      </div>
    </section>
  );
};

export default Hero;
