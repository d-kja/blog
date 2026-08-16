import type { Metadata } from "next";
import { GarageGallery } from "./garage-gallery";

export const metadata: Metadata = {
	title: "Garage",
	description:
		"Vinyl wrap concepts for a Kawasaki Ninja 500 SE and a Brazilian 2nd-gen KTM 390 Duke — stealth black with small metallic accents.",
	openGraph: {
		title: "Garage | D-kja",
		description:
			"Stealth-black vinyl wrap variants for the Ninja 500 SE and the Brazilian 2nd-gen KTM 390 Duke, each with a small metallic badge.",
	},
};

export default function GaragePage() {
	return <GarageGallery />;
}
