export const landingParallax = () => {
  const landingBg = document.querySelector(".app__landing");
  const topViewport = window.pageYOffset;

  const midViewport = topViewport + window.innerHeight / 2;

  const topSection = landingBg.offsetTop;
  const midSection = topSection + landingBg.offsetHeight / 2;

  const distanceToSection = midViewport - midSection;

  let speedMountain = Math.min(distanceToSection, 153);
  let speedBrand = Math.min(distanceToSection, 450);
  let speedInfoWrapper = Math.min(distanceToSection, 440);

  const wrapper = document.querySelector(".app__landing-info");

  wrapper.style.top = `${speedInfoWrapper * 0.4}px`;

  const parallaxTags = landingBg.querySelectorAll(".landing-bg");

  parallaxTags.forEach((tag) => {
    if (tag.classList.contains("brand-bg")) {
      tag.style.transform = `translateY(${speedBrand * 1}px)`;
    }
    if (tag.classList.contains("mountain-bg")) {
      tag.style.transform = `translateY(${-speedMountain * 0.6}px)`;
    }
  });
};
