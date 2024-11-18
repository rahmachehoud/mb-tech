import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";

export default function Project() {
	return (
		<>
			<Header />
			<div className={'min-h-[80vh]'}>
                <Projects />
			</div>
			<Footer />
		</>
	);
}