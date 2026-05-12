import LandingHeader from "@/shared/LandingHeader/LandingHeader";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LandingHeader />
      {children}
    </>
  );
}
