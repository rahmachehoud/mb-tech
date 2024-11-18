import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/Service-Section/ContactUs";

export default function Contact() {
	return (
		<>
			<Header />
			<div className={'min-h-[80vh]'}>
                <ContactUs />
			</div>
			<Footer />
		</>
	);
}