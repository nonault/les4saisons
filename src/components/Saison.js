import Button from "./Button.js";
import "./Saison.css";

function Saison({ saison,joursRestants,onFunction,labelBouton,afficherBouton }) {
  
  

  return (
    <div className="Saison">
      <p>{`${saison}`}</p>
      <p>{`${joursRestants}`}</p>

      {afficherBouton && <Button onClick={onFunction} label={labelBouton} />}
      
    </div>
  );
}

export default Saison;
