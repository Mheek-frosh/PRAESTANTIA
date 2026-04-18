import { SiteChrome } from "@/components/site-chrome";

/**
 * Marketing homepage — composed from modular section components.
 * 
 * NOTE: This page acts as the main entry point to the application.
 * It wraps the various landing page sections (Hero, Services, Why Us, etc.) 
 * inside the <SiteChrome /> component which provides the common layout (Navbar & Footer).
 */
export default function Home() {
  return <SiteChrome />;
}
