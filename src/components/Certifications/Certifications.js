import { useState } from "react";

import certificateJS from "../../assets/zertifikat-javascript-WZ.png";
import certificateJFD from "../../assets/certificate-jlinnecke.png";

import CertificationCard from "../CertificationCard/CertificationCard";
import Modal from "../Modal/Modal";

const certifications = [
  {
    title: "Developer Akademie Junior Frontend developer",
    image: certificateJFD,
  },
  {
    title: "JavaScript",
    image: certificateJS,
  },
];

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  function handleClose() {
    setSelectedCertificate(null);
  }

  return (
    <section className="section certificates">
      <h2>Zertifikate</h2>

      <div className="certificate-list">
        {certifications.map((certificate) => (
          <CertificationCard
            certificate={certificate}
            key={certificate.title}
            setSelectedCertificate={setSelectedCertificate}
          />
        ))}
      </div>

      {selectedCertificate && (
        <Modal
          image={selectedCertificate}
          images={certifications.map((certificate) => certificate.image)}
          onClose={handleClose}
        />
      )}
    </section>
  );
}
