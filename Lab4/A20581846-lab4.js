(() => {
  // Change hero headline
  const heroH1 = document.querySelector("#hero h1");
  heroH1.textContent = "Supercharge Your Brand with Stellar Marketing";

  // Change hero subtext
  const heroP = document.querySelector("#hero p");
  heroP.innerHTML =
    "Leverage innovative strategies from Stellar Marketing to make your business <strong><em>shine</em></strong> and <strong><em>succeed</em></strong>.";

  // Change hero background image
  const heroSection = document.querySelector("#hero");
  heroSection.style.backgroundImage =
    "url('https://picsum.photos/id/683/1280/720')";

  // Set padding for the hero section
  heroSection.style.paddingTop = "12rem";
  heroSection.style.paddingBottom = "11rem";
  heroSection.style.marginBottom = "0";

  // Change navbar background color to match footer
  const footerColor = window.getComputedStyle(
    document.querySelector("footer")
  ).backgroundColor;
  document.querySelector("header").style.backgroundColor = footerColor;

  // Remove get started CTA from hero
  const heroCTA = document.querySelector("#hero a");
  if (heroCTA) heroCTA.remove();

  // Add new CTA section below hero
  const newCTA = document.createElement("section");
  newCTA.innerHTML = `
      <div class="container mx-auto text-center">
        <button id="ctaButton" class="bg-white px-6 py-2 rounded hover:bg-blue-100 shadow-md">
          Schedule a Consultation Today
        </button>
      </div>
    `;
  newCTA.style.backgroundColor = "#6495ed";
  newCTA.style.padding = "32px 0";
  newCTA.style.marginBottom = "3rem";
  heroSection.after(newCTA);

  // Style the CTA button
  const ctaButton = document.getElementById("ctaButton");
  ctaButton.style.color = "rgb(37 99 235 / var(--tw-bg-opacity))";
  ctaButton.style.border = "4px solid rgb(37 99 235 / var(--tw-bg-opacity))";
  ctaButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

  // Add click event to new CTA button
  ctaButton.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Thank You for your interest in Stellar Marketing!");
  });

  // Change service icons color
  document
    .querySelectorAll("#services .material-symbols-outlined")
    .forEach((icon) => {
      icon.style.color = "#6495ed";
    });

  // Change digital marketing icon to 'Ads Click'
  const digitalIcon = document.querySelector('[data-icon="digital"]');
  if (digitalIcon) digitalIcon.textContent = "ads_click";

  // Change layout of specialized marketing solutions
  const solutionsSection = document.querySelector("#solutions .grid");
  solutionsSection.classList.remove("md:grid-cols-2");
  solutionsSection.classList.add("lg:grid-cols-4");

  // Change Musicians image
  const musiciansImg = document.querySelector(
    '#solutions img[alt="Musicians"]'
  );
  if (musiciansImg) musiciansImg.src = "https://picsum.photos/id/453/400/300";

  // Handle form submission with enhanced validation
  const form = document.querySelector("#contact form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name.length < 2) {
      alert("Please provide a name and email.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please provide a name and email.");
    } else {
      alert(
        `Thank you, ${name}! We will be in touch with you shortly at ${email}.`
      );
    }
  });
})();
