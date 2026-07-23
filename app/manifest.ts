export default function manifest() {
  return {
    name: "SIBS YOUTH",
    short_name: "SIBS Youth",
    description:
      "SIBS YOUTH is the youth movement of SIBS International, equipping young people with practical skills, mentorship, and real opportunities in agriculture, enterprise, sport, digital skills, financial literacy, and leadership.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f8fa",
    theme_color: "#1c2530",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
