import type { Metadata } from "next";
import { GarageGallery } from "./garage-gallery";

export const metadata: Metadata = {
	title: "Garage",
	description:
		"Vinyl wrap concepts for a Kawasaki Ninja 500 SE — stealth black with small metallic accents.",
	openGraph: {
		title: "Garage | D-kja",
		description:
			"Three stealth-black vinyl wrap variants for the Ninja 500 SE, each with a small metallic N5 badge.",
	},
};

export default function GaragePage() {
	return <GarageGallery />;
}
