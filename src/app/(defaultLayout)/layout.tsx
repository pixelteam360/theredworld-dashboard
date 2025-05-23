
import Navbar from "@/components/shared/Navbar";
import SideBar from "@/components/shared/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insightify",
  description: "Transform Voice, Images, and Videos into Text",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
    <SidebarProvider>
      <SideBar />
      <main className="w-full md:p-12 p-5">
        <div>
          <Navbar />
          {children}
        </div>
      </main>
    </SidebarProvider>
    </main>
  );
};

export default CommonLayout;
