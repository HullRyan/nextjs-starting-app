"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
export default function NavigationBar() {
	const [isOpen, setIsOpen] = useState(false);

	const path = usePathname();

	return (
		<div className="flex gap-10 p-6  border-b-2">
			<Link href="/nextjs-starting-app" className={path == "/nextjs-starting-app" ? "font-bold" : ""}>
				Home
			</Link>
			<Link href="/nextjs-starting-app/about" className={path == "/nextjs-starting-app/about" ? "font-bold" : ""}>
				About
			</Link>
		</div>
	);
}
