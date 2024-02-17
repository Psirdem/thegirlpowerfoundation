import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import NewsLetter from "@/components/NewsLetter";

const ContactPage = () => {
  return (
    <>
      <section className="my-10 max-w-5xl mx-auto px-10 py-8 container">
        <ContactForm />
        <Map />
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default ContactPage;
