import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

function About() {
  return (
    <div>
      <Logo/>
      <Navigation/>
      <h1>
        About me...
      </h1>
      <p>
      La liste des pays par population classe les pays du monde par leur nombre d'habitants en 2022. Les données sont celles de la projection de la population mondiale (World population prospect) publiée en 2019 par la division de la population du Département des affaires économiques et sociales du Secrétariat de l'Organisation des Nations unies1.

Certains territoires non souverains sont aussi indiqués, en italique : les territoires habités de la France d'outre-mer (y compris les DROM), les territoires britanniques d'outre-mer habités et les dépendances de la Couronne, les territoires des États-Unis, les pays constitutifs non-métropolitains du royaume des Pays-Bas et du royaume du Danemark ainsi que les Pays-Bas caribéens, les régions administratives spéciales de Chine, et les Tokelau, territoire dépendant de la Nouvelle-Zélande. Ils ne sont ici pas comptés dans la population de l'État souverain dont ils dépendent. La population des États non reconnus internationalement est comptée avec celle du pays dont ils font partie selon l'ONU. Taïwan, qui est considérée comme une province de la Chine dans les données de l'ONU, est comptée à part comme les régions administratives spéciales.


      </p>
    </div>
  )
}

export default About