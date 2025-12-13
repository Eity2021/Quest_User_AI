"use client";
import React from "react";
import Link from "next/link";
// import Cookies from "js-cookie";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
// import { useQuery } from "@tanstack/react-query";
// import AccountIcon from "@/assets/svg/AccountIcon";
// import TodoListIcon from "@/assets/svg/TodoListIcon";
// import { userProfile } from "@/hooks/ReactQueryHooks";
// import DashboardIcon from "@/assets/svg/DashboardIcon";

const Sidebar: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    //   const { data: user } = useQuery({
    //     queryKey: ["users"],
    //     queryFn: userProfile,
    //   });

    const navItems = [
        {
            href: "/",
            label: "Dashboard",
            //   icon: (color: string) => <DashboardIcon color={color} size={24} />,
        },
        {
            href: "/",
            label: "Todos",
            //   icon: (color: string) => <TodoListIcon color={color} size={24} />,
        },
        {
            href: "/",
            label: "Account Information",
            //   icon: (color: string) => <AccountIcon color={color} size={24} />,
        },
    ];

    //   const handleLogout = () => {
    //     Cookies.remove("access");
    //     Cookies.remove("refresh");
    //     router.push("/auth/sign-in");
    //   };
    return (
        <section className="w-[320px]  h-screen fixed left-0 top-0  border-r-2 border-[#373434]">

            <div className="relative h-full">
                <div className="text-white flex flex-col items-center py-8 ">
                    <div className="mb-2 mt-8 w-[86px] h-[86px]">
                        {/* <img
              src={user?.profile_image}
              alt="userImage"
              className=" rounded-full w-[86px] h-[86px]"
            /> */}
                        Logo
                    </div>
                    <div className="text-center mb-12">
                        {/* <h4 className="font-semibold text-[16px] font-inter">
              {user?.first_name} {user?.last_name}
            </h4> */}
                        {/* <p className="text-[16px] font-inter font-normal">{user?.email}</p> */}
                    </div>
                    <nav className="w-full">
                        <ul className="space-y-2">
                            {navItems.map(({ href, label, }) => {
                                // icon
                                const isActive = pathname === href;
                                // const iconColor = isActive ? "#fff" : "#8CA3CD";
                                return (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            className={`flex items-center pr-4 pl-8 py-3  font-medium text-white   text-[16px] font-inter
                                                }`}
                                        >
                                            {/* {icon && <span className="mr-2">{icon(iconColor)}</span>} */}
                                            {label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
                <div className="flex gap-1 pl-8 absolute bottom-10 cursor-pointer" >
                    <LogOut color="#8CA3CD" />
                    <p className="font-medium font-inter text-[16px] text-white">
                        Logout
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
