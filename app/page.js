import PageDisplay from "../components/pageDisplay";
import Image from "next/image";

export default function Home() {
	return <PageDisplay {...{ title: "Title", body: "Main Content Body" }} />;
}
