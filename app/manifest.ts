export default function manifest() {
  return {
    name: "SIBS YOUTH",
    short_name: "SIBS Youth",
    description:
      "SIBS YOUTH is the SIBS International subsidiary preparing young people for future careers through leadership, digital skills, a football academy, and the Cape Coast, Ghana commerce & entrepreneurship initiative.",
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
