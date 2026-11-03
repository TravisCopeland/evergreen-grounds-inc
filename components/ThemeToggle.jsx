"use client";

import { useEffect, useRef, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const storageKey = "evergreen-theme";

const ThemeToggle = () => {
	const [theme, setTheme] = useState("dark");
	const hasStoredPreferenceRef = useRef(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		let storedTheme;

		try {
			storedTheme = window.localStorage.getItem(storageKey);
		} catch {
			storedTheme = null;
		}

		if (storedTheme === "light" || storedTheme === "dark") {
			hasStoredPreferenceRef.current = true;
			setTheme(storedTheme);
			document.documentElement.dataset.theme = storedTheme;
		} else {
			const systemTheme = mediaQuery.matches ? "dark" : "light";
			setTheme(systemTheme);
			document.documentElement.dataset.theme = systemTheme;
		}

		const handleSystemThemeChange = (event) => {
			if (!hasStoredPreferenceRef.current) {
				const systemTheme = event.matches ? "dark" : "light";
				setTheme(systemTheme);
				document.documentElement.dataset.theme = systemTheme;
			}
		};

		mediaQuery.addEventListener("change", handleSystemThemeChange);
		return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
	}, []);

	const toggleTheme = () => {
		const nextTheme = theme === "dark" ? "light" : "dark";
		hasStoredPreferenceRef.current = true;
		setTheme(nextTheme);
		document.documentElement.dataset.theme = nextTheme;

		try {
			window.localStorage.setItem(storageKey, nextTheme);
		} catch {
			// Keep the theme active for this visit when storage is unavailable.
		}
	};

	const nextThemeLabel = theme === "dark" ? "light" : "dark";

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label={`Switch to ${nextThemeLabel} mode`}
			aria-pressed={theme === "dark"}
			title={`Switch to ${nextThemeLabel} mode`}
			className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 text-sm font-medium text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light"
		>
			<span
				className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
					theme === "dark"
						? "bg-white/15 text-amber-200"
						: "bg-emerald-100 text-brand-deep"
				}`}
				aria-hidden="true"
			>
				{theme === "dark" ? <FaSun size={14} /> : <FaMoon size={13} />}
			</span>
			<span className="hidden sm:inline">{theme === "dark" ? "Dark" : "Light"}</span>
		</button>
	);
};

export default ThemeToggle;
