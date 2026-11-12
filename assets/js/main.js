/**
 * ====================================================================
 * SCRIPTS INTERATIVOS — ESTANTE DE ENFERMAGEM
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.PAGE_CONFIG || {};
  const checkouts = cfg.checkout || {};

  // 1. INJEÇÃO DE LINKS DE CHECKOUT PRESERVANDO UTMS
  function buildUrlWithUtms(rawUrl) {
    if (!rawUrl) return "#";
    try {
      const url = new URL(rawUrl);
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.forEach((value, key) => {
        url.searchParams.set(key, value);
      });
      return url.toString();
    } catch (e) {
      return rawUrl;
    }
  }

  const btnCompleto = document.getElementById("btn-checkout-completo");
  if (btnCompleto && checkouts.completo) {
    btnCompleto.href = buildUrlWithUtms(checkouts.completo);
  }

  const btnUpsell = document.getElementById("btn-checkout-upsell");
  if (btnUpsell && checkouts.upsell) {
    btnUpsell.href = buildUrlWithUtms(checkouts.upsell);
  }

  const btnBasico = document.getElementById("btn-checkout-basico");
  if (btnBasico && checkouts.basico) {
    btnBasico.href = buildUrlWithUtms(checkouts.basico);
  }

  // 2. MODAL DE UPSELL (QUANDO CLICA EM "QUERO O BÁSICO")
  const btnOpenUpsell = document.getElementById("btn-open-upsell");
  const modal = document.getElementById("upsell-modal");

  if (btnOpenUpsell && modal) {
    const closeModal = () => {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    };

    const openModal = () => {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    };

    btnOpenUpsell.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });

    modal.querySelectorAll(".modal-close-btn, .modal-backdrop").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        closeModal();
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });
  }

  // 3. FAQ INTERATIVO (ACCORDION)
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");
    const chevron = item.querySelector(".faq-chevron");

    if (trigger && content) {
      trigger.addEventListener("click", () => {
        const isOpen = !content.classList.contains("hidden");

        faqItems.forEach((other) => {
          if (other !== item) {
            const otherContent = other.querySelector(".faq-content");
            const otherChevron = other.querySelector(".faq-chevron");
            if (otherContent) otherContent.classList.add("hidden");
            if (otherChevron) otherChevron.classList.remove("rotate-180");
          }
        });

        if (isOpen) {
          content.classList.add("hidden");
          if (chevron) chevron.classList.remove("rotate-180");
        } else {
          content.classList.remove("hidden");
          if (chevron) chevron.classList.add("rotate-180");
        }
      });
    }
  });

  // 4. ROLAGEM SUAVE
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });

  // 5. STICKY MOBILE CTA
  const stickyCta = document.getElementById("sticky-mobile-cta");
  const heroSection = document.querySelector("section");
  if (stickyCta && heroSection) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const heroBottom = heroSection.getBoundingClientRect().bottom;
          if (heroBottom < 100) {
            stickyCta.classList.add("is-active");
          } else {
            stickyCta.classList.remove("is-active");
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // 6. TIMER REGRESSIVO DE URGÊNCIA (14:59)
  const minEl = document.getElementById("top-timer-min");
  const secEl = document.getElementById("top-timer-sec");
  if (minEl && secEl) {
    let timeLeft = 14 * 60 + 59;
    setInterval(() => {
      if (timeLeft <= 0) {
        timeLeft = 14 * 60 + 59; // Loop suave
      }
      timeLeft--;
      const m = Math.floor(timeLeft / 60);
      const s = timeLeft % 60;
      minEl.innerText = m < 10 ? "0" + m : m;
      secEl.innerText = s < 10 ? "0" + s : s;
    }, 1000);
  }
});
