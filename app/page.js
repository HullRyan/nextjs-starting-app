import PageDisplay from "@/components/pageDisplay.js";
import Image from "next/image";

export default function Home() {
	return <PageDisplay {...{ title: "Title", body: "Main Content Body" }} />;
}
