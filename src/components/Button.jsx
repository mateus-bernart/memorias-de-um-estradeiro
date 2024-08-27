import React from "react";

const Button = ({ styles }) => {
  return (
    <a href="https://produto.mercadolivre.com.br/MLB-3793922755-memorias-de-um-estradeiro-edico-1-joo-troc-portugus-_JM#reco_item_pos=3&reco_backend=item_decorator&reco_backend_type=function&reco_client=home_items-decorator-legacy&reco_id=6bf0e219-a4da-468e-83c8-192faf134d82&c_id=/home/navigation-recommendations-seed/element&c_uid=c99183e9-ac7a-4322-a585-3ed04e1b3064&da_id=navigation&da_position=2&id_origin=/home/dynamic_access&da_sort_algorithm=ranker">
      <button
        type="button"
        className={`py-7 px-10 bg-yellow-gradient font-poppins font-medium text-[25px] text-white outline-none ${styles} rounded-[8px] mb-10`}
      >
        Compre o seu livro pelo Mercado Livre!
      </button>
    </a>
  );
};

export default Button;
