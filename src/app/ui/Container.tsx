import NavBar from "@/app/ui/NavBar";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-[24px]">
      <NavBar />
      {children}
    </div>
  );
}
