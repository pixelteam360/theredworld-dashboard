"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import logo from "../../assets/images/logo.png";
import {
  Settings,
  ClipboardMinus,
  LayoutDashboardIcon,
  Crown,
  ShieldQuestion,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { removeCookie } from "@/utils/cookies";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Lessons",
    url: "/lessons",
    icon: ClipboardMinus,
  },
  {
    title: "Subscriptions",
    url: "/subscriptions",
    icon: Crown,
  },
  {
    title: "Privacy Policy",
    url: "/privacy-policy",
    icon: ShieldQuestion,
  },
  {
    title: "Setting",
    url: "/setting",
    icon: Settings,
  },
];

const SideBar = () => {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLolgout = () => {
    dispatch(logout());
    removeCookie("token");
    router.push("/login");
  };
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel className="mb-14 mt-8 mx-auto">
          <Image src={logo} alt="logo" width={190} height={50} className="w-24"/>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="px-4 space-y-3">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`text-base px-6 py-6 hover:bg-primary hover:text-white ${
                    pathName === `${item.url}`
                      ? "bg-primary text-white rounded-lg"
                      : ""
                  }`}
                >
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <button
          onClick={handleLolgout}
          className="py-3 border border-red-400 rounded-lg font-medium text-base text-primary"
        >
          Log out
        </button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBar;
