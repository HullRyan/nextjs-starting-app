"use client";

import Image from "next/image";

export default function footer() {
	return (
		<div className="flex items-center w-full h-12 border-t p-4">
			<a
				className="items-center"
				href="https://github.com/hullryan"
				target="_blank"
				rel="noopener noreferrer"
			>
				GitHub
			</a>
		</div>
	);
}
