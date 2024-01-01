import { PropsWithChildren } from "react";

export default ({ children }: PropsWithChildren) => {
	return (
		<div className="w-full border">
			<header className="w-full bg-green-300 min-h-14 flex items-center p-4">
				Module Federation Header
			</header>
			<main className="w-full h-full">{children}</main>
			<footer className="w-full bg-green-300 min-h-14 flex items-center p-4">
				Footer
			</footer>
		</div>
	);
};
