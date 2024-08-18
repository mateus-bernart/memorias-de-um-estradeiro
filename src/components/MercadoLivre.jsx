import styles from "../style";
import Button from "./Button";
import { socialMedia } from "../constants";
import { wpp, wppgreen } from "../assets";

const MercadoLivre = () => (
  <section className={`${styles.flexCenter} ${styles.padding}`}>
    <a href="https://produto.mercadolivre.com.br/MLB-3793922755-memorias-de-um-estradeiro-edico-1-joo-troc-portugus-_JM#reco_item_pos=3&reco_backend=item_decorator&reco_backend_type=function&reco_client=home_items-decorator-legacy&reco_id=6bf0e219-a4da-468e-83c8-192faf134d82&c_id=/home/navigation-recommendations-seed/element&c_uid=c99183e9-ac7a-4322-a585-3ed04e1b3064&da_id=navigation&da_position=2&id_origin=/home/dynamic_access&da_sort_algorithm=ranker">
      <Button></Button>
    </a>
  </section>
);

export default MercadoLivre;
