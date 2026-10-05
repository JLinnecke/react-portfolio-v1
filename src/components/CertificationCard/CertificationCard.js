export default function CertificationCard({
  certificate,
  setSelectedCertificate,
}) {
  return (
    <button
      type="button"
      className="certificate-card"
      onClick={() => setSelectedCertificate(certificate.image)}
    >
      <img src={certificate.image} alt={certificate.title} />
    </button>
  );
}
