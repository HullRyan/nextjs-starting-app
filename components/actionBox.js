"use client";
import { useState } from "react";

export default function ActionBox({ description }) {
	const [count, setCount] = useState(0);

	let increment = () => {
		setCount(count + 1);
	};

	return (
		<div className="flex flex-col items-center justify-between">
			<div className="flex flex-col items-center gap-4 p-6 w-96 h-48 border rounded-lg">
				<div className="font-bold flex flex-col items-center justify-between p-1">
					Count: {count}
				</div>
				<button onClick={increment} className="rounded-lg bg-slate-200 hover:bg-slate-300 p-2">Click Me</button>
				{count % 2 == 0 ? (
					<div className="flex flex-col items-center justify-between p-1">
						{description}
					</div>
				) : <div></div>}
			</div>
		</div>
	);
}
