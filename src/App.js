import { useEffect, useState } from "react";
import Saison from "./components/Saison";
import moment from 'moment';
import { saisonData } from "./data.js";
import "./App.css";



function App() {

  const dateActuelle = moment();
  const [saisonSuivantePresente, setSaisonSuivantePresente] = useState(false);
  const [saisonActuelleNom, setSaisonActuelleNom] = useState("");
  const [saisonActuelleDateDebut, setSaisonActuelleDateDebut] = useState("");
  const [indexSaisonSuivante, setIndexSaisonSuivante] = useState(0);
  let dateDebutSaisonSuivante = null;
  let compteur = 0;

  useEffect(() => {
    saisonData.map((date) => {
      if(date.dateDebut <= dateActuelle && date.dateFin >= dateActuelle){
        setSaisonActuelleNom(date.nom);
        setSaisonActuelleDateDebut(date.dateDebut)
        setIndexSaisonSuivante(compteur+1);
      }
      compteur = compteur+1;
    }
  );     
  },[saisonActuelleNom]);

  const onSaisonSuivante = () => {
    return <Saison saison={saisonData[indexSaisonSuivante].nom}
          joursRestants={"Dans "+saisonData[indexSaisonSuivante].dateDebut.diff(moment(),'d')+ " jours et durera " + saisonData[indexSaisonSuivante].dateFin.diff(saisonData[indexSaisonSuivante].dateDebut, 'd')+ " jours"}
          onFunction={() => {}}
          labelBouton={""}
          afficherBouton={false} />
  };

  return (
    <div div className={["App"]}>
      <Saison saison={saisonActuelleNom}
            joursRestants={"Depuis "+ moment().diff(saisonActuelleDateDebut,'d') +" jours"}
            onFunction={() => {setSaisonSuivantePresente(true)} }
            labelBouton={"Et après ?"}
            afficherBouton={true} />
      {saisonSuivantePresente && onSaisonSuivante()}
    </div>)
}

export default App;
