import PropTypes from "prop-types";

function Certifications() {
  return (
    <div className="flex flex-col overflow-y-auto h-full md:w-4/5 items-center justify-center md:flex-row gap-3 md:flex-wrap">
      <CertIcon
        name="Java SE 8 Programmer"
        imageLink="cert_oracle_java.png"
        link="https://www.credly.com/badges/6b5aa315-d589-4161-ba29-9e90b99ee805/linked_in_profile"
      />
      <CertIcon
        name="Generative AI Certified Professional"
        imageLink="cert_oracle_gen_ai.png"
        link="https://catalog-education.oracle.com/pls/certview/sharebadge?id=A93A283539718B9EB317E51E69FAE2E6F5A5815122DA5A3288BA252B9B75DDE9"
      />
    </div>
  );
}

function CertIcon({ name, link, imageLink }) {
  return (
    <a
      className="flex flex-col justify-between items-center gap-2 w-[120px] h-[180px] md:w-[280px] md:h-[360px] hover:scale-105 transition-all"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <p className="font-extrabold text-xs md:text-xl text-center">{name}</p>
      <img className="rounded-xl" src={`/${imageLink}`} alt={name} />
    </a>
  );
}

CertIcon.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
};

export default Certifications;
