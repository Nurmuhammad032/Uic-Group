export const landingParallax = () => {
  const landingBg = document.querySelector(".app__landing");
  const video = document.querySelector(".video-parralax");
  const mountain = document.querySelector(".landing-bg-wrapper");

  const topViewport = window.pageYOffset;

  const midViewport = topViewport + window.innerHeight / 2;

  const topSection = landingBg.offsetTop;
  const midSection = topSection + landingBg.offsetHeight / 2;

  const distanceToSection = midViewport - midSection;

  let speedBrand = Math.min(distanceToSection, 340);
  let speedMainBg = Math.min(distanceToSection, 230);
  let speedInfoWrapper = Math.min(distanceToSection, 340);

  const wrapper = document.querySelector(".app__landing-info");

  wrapper.style.top = `${speedInfoWrapper * 1}px`;

  video.style.transform = `translate(-50%, ${speedInfoWrapper * 1}px)`;

  const parallaxTags = landingBg.querySelectorAll(".landing-bg");

  parallaxTags.forEach((tag) => {
    if (tag.classList.contains("main-bg")) {
      tag.style.transform = `translateY(${speedMainBg * 0.7}px)`;
    }
    if (tag.classList.contains("brand-bg")) {
      tag.style.transform = `translateY(${speedBrand * 1.3}px)`;
    }

  });
};
