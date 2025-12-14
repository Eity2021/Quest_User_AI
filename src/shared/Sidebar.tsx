"use client";
import React from "react";
import Link from "next/link";
// import Cookies from "js-cookie";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import userProfile from "@/assets/images/user_profile.jpg"
import { Image } from "@unpic/react/nextjs";
import { LayoutDashboard ,UserPen } from 'lucide-react';
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
             icon: (color: string) => <LayoutDashboard  color={color} size={24} />,
        },
    
        {
            href: "/profile",
            label: "Profile",
             icon: (color: string) => <UserPen  color={color} size={24} />,
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
                    <div className="mb-2 mt-8 ">
            <Image
              src={userProfile}
              alt="userImage"
           width={86}
  height={86}
  className="rounded-full object-cover"
            /> 
                        
                    </div>
                    <div className="text-center mb-12">
                     <h4 className="font-semibold text-[16px] font-inter">
              MD Nabin Islam
            </h4>
                        <p className="text-[16px] font-inter font-normal">user</p> 
                    </div>
                    <nav className="w-full">
                        <ul className="space-y-2">
                            {navItems.map(({ href, label,icon }) => {
                                // icon
                                const isActive = pathname === href;
                                const iconColor = isActive ? "#fff" : "#8CA3CD";
                                return (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            className={`flex items-center pr-4 pl-8 py-3  font-medium text-white   text-[16px] font-inter
                                                }`}
                                        >
                                            {icon && <span className="mr-2">{icon(iconColor)}</span>}
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
