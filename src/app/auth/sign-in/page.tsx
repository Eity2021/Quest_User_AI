"use client";
import { ArrowLeft, ChevronDown, Eye, EyeOff } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Link from "next/link";
import SignInForm from "@/components/ui/form/signInForm";
export default function page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#00A699] blur-[200px] opacity-60"></div>
      <div className="min-h-screen flex items-center justify-center ">

        <div className="w-full max-w-lg   mx-auto space-y-8 px-6 ">

          <button className="self-start p-2 -ml-2 text-foreground hover:text-muted-foreground transition-colors">
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>


          <div
            className="mt-6 mb-8 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          </div>

          <SignInForm></SignInForm>

        </div>
      </div>
    </section>
  );
}
