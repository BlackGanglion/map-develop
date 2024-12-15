import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/leaflet", component: "leaflet/leaflet" },
    { path: "/mapbox", component: "mapbox/mapbox" },
  ],
  npmClient: 'pnpm',
});
