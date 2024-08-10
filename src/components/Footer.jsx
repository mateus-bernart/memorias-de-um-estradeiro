import styles from "../style";
import { logomemorias } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section
    id="contact"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <h2 className={`${styles.heading2} text-gradient`}>
          Memórias de um Estradeiro
        </h2>
        <p className={`${styles.paragraph} mt-4 max-2-[319px]`}>
          Uma vida cheia de histórias!
        </p>
      </div>

      <div className="flex-[1.5] w-full flex justify-between md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[35px] leading-[40px] text-white">
              {footerLink.title}
            </h4>

            <ul className="list-none mt-4">
              {footerLink.links.map((Link, index) => (
                <li
                  key={Link.name}
                  className={`font-poppins font-normal text-[20px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}
                >
                  {Link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2024 Memórias de um Estradeiro. Todos os direitos reservados.
      </p>
      <div className="flex flex-row md:mt-0 mt-6 ">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[50px] h-[50px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"} `}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
