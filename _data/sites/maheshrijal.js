module.exports = {
	name: "maheshrijal.com", // optional, falls back to object key
	description: "MaheshRijal’s Personal web site",
	// skip if localhost
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://maheshrijal.com/",
		"https://maheshrijal.com/about/",
		"https://maheshrijal.com/now/",
		"https://maheshrijal.com/tags/",
		"https://maheshrijal.com/uses/",
		"https://maheshrijal.com/quotes/",
		"https://maheshrijal.com/reading/",
		"https://maheshrijal.com/contact/",
		"https://maheshrijal.com/posts/technology-terms/",
		"https://maheshrijal.com/posts/trying-the-zed-code-editor-on-windows/",
		"https://maheshrijal.com/posts/learning-to-swim/",
		"https://maheshrijal.com/posts/quick-and-easy-directory-navigation-using-cdpath/",
	]
};