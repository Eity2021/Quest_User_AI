// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Eye, EyeOff, ChevronDown } from "lucide-react";

// export default function SignInForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [agreedToTerms, setAgreedToTerms] = useState(false);

//   return (
//     <div>
//       <form className="flex-1 flex flex-col">
//         <div
//           className="space-y-5 animate-fade-in"
//           style={{ animationDelay: "0.2s" }}
//         >
//           <div className="space-y-2">
//             <Label htmlFor="phone" className="text-white text-sm font-medium">
//               Phone Number
//             </Label>
//             <div className="flex gap-2">
//               <button
//                 type="button"
//                 className="flex items-center gap-2 bg-[#2A3545]/80 border border-[#3A4555] text-white px-4 h-12 rounded-xl hover:bg-[#3A4555]/80 transition-colors"
//               >
//                 <span>+088</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <Input
//                 id="phone"
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="flex-1 bg-[#2A3545]/80 border-[#3A4555] text-white placeholder:text-white/40 h-12 rounded-xl focus:border-accent focus:ring-accent"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label
//               htmlFor="password"
//               className="text-white text-sm font-medium"
//             >
//               Password
//             </Label>
//             <div className="relative">
//               <Input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 className="bg-[#2A3545]/80 border-[#3A4555] text-white placeholder:text-white/40 h-12 rounded-xl pr-12 focus:border-accent focus:ring-accent"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
//               >
//                 {showPassword ? (
//                   <EyeOff className="w-5 h-5" />
//                 ) : (
//                   <Eye className="w-5 h-5" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Remember me & Forgot password */}
//         <div
//           className="flex items-center justify-between mt-5 animate-fade-in"
//           style={{ animationDelay: "0.3s" }}
//         >
//           <div className="flex items-center gap-2 pt-2">
//             <Checkbox
//               id="terms"
//               checked={agreedToTerms}
//               onCheckedChange={(checked) =>
//                 setAgreedToTerms(checked as boolean)
//               }
//               className="border-white/30 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
//             />
//             <label
//               htmlFor="terms"
//               className="text-sm text-white cursor-pointer"
//             >
//               I agree with Quest AI{" "}
//               <Link href="#" className="text-accent hover:underline">
//                 Terms & Conditions
//               </Link>
//             </label>
//           </div>
//           <button
//             type="button"
//             className="text-sm text-white  hover:text-primary/80 transition-colors font-medium"
//           >
//             Forgot password?
//           </button>
//         </div>

//         {/* Sign In button */}
//         <div
//           className="mt-8 animate-fade-in"
//           style={{ animationDelay: "0.4s" }}
//         >
//           <Button
//             type="submit"
//             className="w-full h-14 text-base font-semibold bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 hover:border-primary transition-all duration-200"
//           >
//             Sign In
//           </Button>
//         </div>

//         {/* Divider */}
//         <div
//           className="flex items-center gap-4 my-8 animate-fade-in"
//           style={{ animationDelay: "0.5s" }}
//         >
//           <div className="flex-1 h-px bg-border" />
//           <span className="text-sm text-muted-foreground">or</span>
//           <div className="flex-1 h-px bg-border" />
//         </div>

//         {/* Social login buttons */}
//         <div className="flex justify-center gap-4">
//           <button
//             type="button"
//             className="w-14 h-14 rounded-full bg-[#2A3545]/80 hover:bg-[#3A4555] transition-colors flex items-center justify-center border border-[#3A4555]"
//             aria-label="Sign up with Google"
//           >
//             <svg className="w-6 h-6" viewBox="0 0 24 24">
//               <path
//                 fill="#4285F4"
//                 d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//               />
//               <path
//                 fill="#34A853"
//                 d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//               />
//               <path
//                 fill="#FBBC05"
//                 d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//               />
//               <path
//                 fill="#EA4335"
//                 d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//               />
//             </svg>
//           </button>

//           <button
//             type="button"
//             className="w-14 h-14 rounded-full bg-[#2A3545]/80 hover:bg-[#3A4555] transition-colors flex items-center justify-center border border-[#3A4555]"
//             aria-label="Sign up with Facebook"
//           >
//             <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
//               <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//             </svg>
//           </button>

//           <button
//             type="button"
//             className="w-14 h-14 rounded-full bg-[#2A3545]/80 hover:bg-[#3A4555] transition-colors flex items-center justify-center border border-[#3A4555]"
//             aria-label="Sign up with Apple"
//           >
//             <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
//               <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
//             </svg>
//           </button>
//         </div>

//         {/* Sign up link */}
//         <div
//           className="mt-auto pt-12 text-center animate-fade-in"
//           style={{ animationDelay: "0.7s" }}
//         >
//           <span className="text-muted-foreground">New to Quest AI? </span>
//           <button
//             type="button"
//             className="text-primary hover:text-primary/80 transition-colors font-medium"
//           >
//             Sign up
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, ChevronDown } from "lucide-react";

const STATIC_USER = {
  email: "student@questai.xyz",
  password: "123456",
};

export default function SignInForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === STATIC_USER.email && password === STATIC_USER.password) {
      // store login state (optional)
      localStorage.setItem("isLoggedIn", "true");

      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
      <div className="space-y-5">
        {/* Email */}
        <div className="space-y-2">
          <Label className="text-white text-sm font-medium">Email</Label>
          <Input
            type="email"
            placeholder="student@questai.xyz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#2A3545]/80 border-[#3A4555] text-white h-12 rounded-lg"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label className="text-white text-sm font-medium">Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="123456"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#2A3545]/80 border-[#3A4555] text-white h-12 rounded-lg pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>

        {/* Error message */}
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>

      {/* Remember me */}
      <div className="flex items-center gap-2 mt-5">
        <Checkbox
          checked={agreedToTerms}
          onCheckedChange={(v) => setAgreedToTerms(v as boolean)}
        />
        <span className="text-sm text-white">Remember me</span>
      </div>

      {/* Submit */}
      <div className="mt-8">
        <Button
          type="submit"
          variant="outline"
          className="w-full h-14 bg-transparent border-2 border-accent text-white"
        >
          Sign In
        </Button>
      </div>
    </form>
  );
}
