/**
 * ====================================================================
 * CONFIGURAÇÕES DA PÁGINA — ESTANTE DE ENFERMAGEM & PLANTÃO
 * ====================================================================
 * Altere os links de checkout abaixo conforme suas plataformas
 * (Kiwify, Hotmart, Wiapy, ggCheckout, etc.)
 */

window.PAGE_CONFIG = {
  // ------------------------------------------------------------------
  // 1. LINKS DE CHECKOUT
  // ------------------------------------------------------------------
  checkout: {
    // Oferta Principal Direta: Pacote Completo (R$ 19,90)
    completo: "https://ggcheckout.app/checkout/v5/kVvoxlHT3WjInGQcCbPwDn",

    // Oferta Básica: Pacote Básico (R$ 10,90)
    basico: "https://ggcheckout.app/checkout/v5/Zisp5bGIWTR0yXwuH3tgjS",

    // Oferta Upgrade no Pop-up: Pacote Completo com Desconto (R$ 14,90)
    upsell: "https://ggcheckout.app/checkout/v5/uGtUhkqWpCGoMkxOdkiqw6",
  },

  // ------------------------------------------------------------------
  // 2. PREÇOS VISÍVEIS
  // ------------------------------------------------------------------
  precos: {
    completo: "19,90",
    completoDe: "147",
    basico: "10,90",
    upsell: "14,90",
    upsellDe: "47,90",
  },

  // ------------------------------------------------------------------
  // 3. SUPORTE / CONTATO
  // ------------------------------------------------------------------
  contato: {
    whatsapp: "https://wa.me/5515997367343?text=Olá,%20tenho%20dúvidas%20sobre%20a%20Estante%20de%20Enfermagem",
    email: "suporte@estantedeenfermagem.com",
  },

  // ------------------------------------------------------------------
  // 4. CÓDIGOS DE RASTREAMENTO (OPCIONAL)
  // ------------------------------------------------------------------
  tracking: {
    metaPixelId: "", // Insira seu ID do Pixel Meta aqui se não usar Utmify
    googleTagId: "",
  }
};
