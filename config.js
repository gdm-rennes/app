/* =====================================================================
   GDM Permanences – CONFIGURATION (seul fichier à modifier)
   Groupe de défense des mineurs du barreau de Rennes – association loi 1901
   Après chaque modification : enregistrer, redéposer le dossier sur l'hébergement,
   puis augmenter "version" (cela force la mise à jour sur les téléphones).
   ===================================================================== */
window.GDM_CONFIG = {
  version: "5.2.0",
  edition: "Édition novembre 2026 (v5)",
  urlApplication: "https://gdm-rennes-app.pages.dev",

  /* ---- À RENSEIGNER PAR LE BUREAU DU GDM (laisser vide = l'élément n'apparaît pas, sauf le téléphone) ---- */
  telPermanence: "06 95 53 18 63",   // numéro de la permanence téléphonique du GDM
  telPermanenceInfo: "7 jours sur 7",   // précision affichée sous le numéro
  siteWeb: "https://groupe-defense-mineur.fr",   // site internet du GDM
  siteMembres: "https://groupe-defense-mineur.fr/nos-membres/",   // liste publique des membres
  siteOrdre: "https://www.ordre-avocats-rennes.fr/annuaire",   // site de l'Ordre (annuaire des avocats)
  agendaUrl: "",              // lien vers l'agenda partagé (Outlook, Google Agenda…), facultatif
  /* Application générale d'accès au droit (Ordre) : pour tout ce qui n'est pas propre au GDM */
  appAccesAuDroit: "https://acces-au-droit-barreau-rennes.netlify.app",

  /* ---- Formulaires Jotform (compte de l'accès au droit, région Europe) ----
     Deux fiches propres au GDM, un formulaire de signalement GAV unique commun avec l'accès au droit.
     actif:false => la carte est visible mais verrouillée ("bientôt disponible"). */
  baseFormulaires: "https://form.jotform.com/",
  formulaires: {
    mercredi:  { id: "262993175607367", titre: "Analyse de la permanence du mercredi après-midi", datee: "dateIntervention", actif: true,
                 prefill: { nom: "nomAvocat", email: "emailPro" } },
    telephone: { id: "262992662722365", titre: "Analyse des permanences téléphoniques", datee: "dateIntervention", actif: true,
                 prefill: { nom: "nomAvocat", email: "emailPro" } },
    /* Formulaire GAV unique de l'Ordre (même compte Jotform que l'application accès au droit).
       Première question obligatoire : personne majeure ou mineure. Mineur => lu par le GDM ; majeur => délégataires pénaux.
       Le paramètre app=gdm fait revenir à cette application à la fin du formulaire. */
    gav:       { id: "263003035193042", titre: "Signaler : interpellation et garde à vue", datee: "dateVisite", dateAujourdhui: true, actif: true,
                 prefill: { prenom: "avocat[first]", nomFamille: "avocat[last]", email: "emailAvocat" },
                 extra: { app: "gdm" } }
  },

  /* Livret de parrainage (annexe 1 du règlement intérieur) : à transmettre par le parrain au terme du parrainage */
  parrainageForm: "https://form.jotform.com/263065652881059",

  /* Intervention en milieu scolaire : relève du CDAD. Même formulaire (A1) et même circuit que l'application accès au droit :
     la fiche et la facture alimentent le même registre. Barème : 216 € TTC (180 € HT) par intervention, une seule facture même à deux avocats. */
  scolaire: { form: "https://form.jotform.com/262983216291058", permanenceId: "P24", dureeH: "2", ttc: "216.00",
              libelle: "Intervention en établissement scolaire" },

  /* Services de l'Ordre (arbitrage du 28/10/2026 : affichés dans l'application, dont le lien n'est communiqué qu'aux avocats).
     Aucune autre ligne de l'annuaire n'est reprise. */
  contactOrdre: { tel: "+33299318311", telAffiche: "02 99 31 83 11",
                  horaires: "Ligne réservée aux avocats : 8 h 30-12 h et 13 h 30-17 h 30 (17 h le vendredi)",
                  mail: "cite@ordre-avocats-rennes.fr", objet: "[Application accès au droit]" },

  /* Raccourci « Écrire au GDM » (accueil et aide) */
  contactGdm: { mail: "gdm.rennes@gmail.com", objet: "[Application GDM]" },

  /* Facturation des permanences des groupes de défense (CLAJ) : une facture annuelle par mail, jamais dans l'application */
  claj: { email: "compta@ordre-avocats-rennes.fr", echeance: "31 janvier",
          montants: { jour: 30, mercredi: 155 } }   /* HT, circulaire du Bâtonnier du 02/01/2025 */,

  contacts: [
    { libelle: "Groupe de défense des mineurs",       email: "gdm.rennes@gmail.com" },
    { libelle: "Vice-présidence du GDM",              email: "avocats@cabinet-acdc.fr" }
  ]
};
