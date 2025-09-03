window.addEventListener('DOMContentLoaded', function() {
	// lol
  const blockedLink = Array.from(document.querySelectorAll('link[href]')).find(link =>
	  /https:\/\/moodle202[45]\.ncirl\.ie\/theme\/styles\.php\/boost\/\d+(_\d+)?\/all/.test(link.href)
	);
  if (blockedLink) {
    blockedLink.remove();
    console.log("[+] darkmode injection started, removed all.css reference");
  }
  // inject fa css after darkmode.css is loaded
  const faStyle = document.createElement("style");
  faStyle.textContent = `
						  :root,:host{
						  	--fa-style-family-classic:"Font Awesome 6 Free";
						  	--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free"
						  }
						  @font-face{
						  	font-family:"Font Awesome 6 Free";
						  	font-style:normal;
						  	font-weight:400;
						  	font-display:block;
						  	src:url(/theme/font.php/boost/core/1739279039/fa-regular-400.woff2) format("woff2"),
						          url(/theme/font.php/boost/core/1739279039/fa-regular-400.ttf) format("truetype")
						  }`
						  ;
  document.head.appendChild(faStyle);
  console.log("[+] fa injected");
});
