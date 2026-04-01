const header = document.querySelector(".site-header");
const revealTargets = document.querySelectorAll(".reveal");

const toggleHeaderState = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 16);
};

toggleHeaderState();
window.addEventListener("scroll", toggleHeaderState, { passive: true });

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
