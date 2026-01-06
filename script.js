// Mobile drawer
const burger = document.getElementById("burger");
const drawer = document.getElementById("drawer");
const drawerClose = document.getElementById("drawerClose");
const drawerBackdrop = document.getElementById("drawerBackdrop");

function openDrawer() {
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  burger.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}
function closeDrawer() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  burger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

burger?.addEventListener("click", () => {
  const isOpen = drawer.classList.contains("is-open");
  isOpen ? closeDrawer() : openDrawer();
});
drawerClose?.addEventListener("click", closeDrawer);
drawerBackdrop?.addEventListener("click", closeDrawer);

// Close drawer when clicking any link inside
drawer?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", closeDrawer);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form: opens user's email client with filled subject/body (static-site friendly)
const form = document.getElementById("quoteForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const phone = (data.get("phone") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();

  const to = "hello@pdxprofix.com"; // <-- change to your real email
  const subject = encodeURIComponent(`Service Request — ${name || "New Lead"}`);
  const body = encodeURIComponent(
`Name: ${name}
Phone: ${phone}
Email: ${email}

Details:
${message}

(Attach photos/videos to this email before sending.)`
  );

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});
