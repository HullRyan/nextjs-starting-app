"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
export default function NavigationBar() {
	const [isOpen, setIsOpen] = useState(false);

	const path = usePathname();

	return (
		<div className="flex gap-10 p-6  border-b-2">
			<Link href="/" className={path == "/" ? "font-bold" : ""}>
				Home
			</Link>
			<Link href="/about" className={path == "/about" ? "font-bold" : ""}>
				About
			</Link>
		</div>
	);
}
