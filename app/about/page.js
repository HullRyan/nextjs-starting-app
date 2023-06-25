import Image from "next/image";
import PageDisplay from "@/components/pageDisplay.js";
import ActionBox from "@/components/ActionBox.js";
export default function Home() {
	return (
		<>
			<PageDisplay
				{...{ title: "About", body: "Next.js Starting App for ITCS 5102" }}
			/>
			<ActionBox
				{...{ description: "This will only display when the count is even" }}
			/>
		</>
	);
}
