import Button from "../Button/Button";

export default function Contact() {
  const email = "jlinnecke@gmail.com";

  function handleCopyEmail() {
    navigator.clipboard.writeText(email);
  }

  return (
    <section className="section contact-section" id="contact">
      <h2>Contact</h2>

      <div className="contact-grid">
        <div className="contact-item">
          <h3>E-mail</h3>

          <a href={`mailto:${email}`}>E-Mail schreiben</a>

          <Button className="copy-btn" onClick={handleCopyEmail}>
            E-Mail kopieren
          </Button>
        </div>

        <div className="contact-item">
          <h3>Phone</h3>

          <a href="tel:+4915165934150">Call me</a>
        </div>
      </div>
    </section>
  );
}
