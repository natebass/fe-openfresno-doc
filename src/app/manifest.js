export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "Open Fresno",
    short_name: "Open Fresno",
    description: "Open Fresno civic technology.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#196aed",
    icons: [
      {
        src: "/assets/logo/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/logo/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
