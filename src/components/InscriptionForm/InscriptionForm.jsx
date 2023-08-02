import "./InscriptionForm.css";
import { useState } from "react";

const InscriptionForm = () => {
  const [submit, setSubmit] = useState(false);

  const [formData, setFormData] = useState({
    "entry.563362715": "",
    "entry.1739933919": "",
    "entry.1014294927": "",
    "entry.1505933703": "",
    "entry.1814223477": "",
    "entry.1763689240": "",
    "entry.628016683": "",
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    const queryString = new URLSearchParams(formData).toString();
    const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSfPTbks_bfuADNIEdE_UAVfyPdHJWVeCkIwZ6b5Ng1JlVKXAQ/formResponse?${queryString}`;
    const res = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  return (
    <div className="inscriptionForm">
      <form onSubmit={handleSubmit} target="_self" id="mG61Hd">
        <div className="form__section">
          <input
            type="text"
            name="entry.563362715"
            onChange={handleInputData("entry.563362715")}
            id="prenom"
            placeholder="Prenom"
            autoComplete={false}
          />
          <input
            type="text"
            name="entry.1739933919"
            onChange={handleInputData("entry.1739933919")}
            id="name"
            placeholder="Nom"
            autoComplete={false}
          />
        </div>
        <div className="form__section">
          <input
            type="email"
            name="entry.1014294927"
            onChange={handleInputData("entry.1014294927")}
            id="email"
            placeholder="email@gmail.com"
            autoComplete={false}
          />
          <input
            type="text"
            name="entry.1505933703"
            onChange={handleInputData("entry.1505933703")}
            id="phone"
            placeholder="+221 78 778 77 77"
            autoComplete={false}
          />
        </div>
        <div className="form__section">
          <input
            type="text"
            name="entry.1814223477"
            onChange={handleInputData("entry.1814223477")}
            id="adresse"
            placeholder="Adresse"
            autoComplete={false}
          />

          <select
            id="formation"
            name="entry.1763689240"
            onChange={handleInputData("entry.1763689240")}
            autoComplete={false}
          >
            <option value="formation">
              Pour quelle formation voulez vous inscrire ?
            </option>
            <option value="dev">Développement Web</option>
            <option value="marketing">Marketing Digitale</option>
          </select>
        </div>
        <p>
          <strong>Combien êtes vous prêt à payé?</strong>
        </p>
        <select
          className="select__prix"
          id="formation"
          name="entry.628016683"
          onChange={handleInputData("entry.628016683")}
          autoComplete={false}
        >
          <option value="formation">Coût de la formation ?</option>
          <option value="20000">20 000 frCfa /mois</option>
          <option value="25000">25 000 frCfa /mois</option>
          <option value="25000">30 000 frCfa /mois</option>
          <option value="25000">J'ai pas de quoi à payé</option>
        </select>

        <hr />
        <button type="submit" className="btn__submit">
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default InscriptionForm;
