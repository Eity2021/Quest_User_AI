import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

const OTP_LENGTH = 4;
const otpValues = ["5", "7", "2", "5"];

export default function page() {
  return (
    <section className="relative overflow-hidden">
      <div className="flex h-screen w-full items-start justify-center bg-black p-4 md:items-center">
        <div className=" w-full max-w-lg rounded-xl  pb-20 pt-10 md:pb-0 md:pt-0 border-2 border-[#525252ff] " >
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-red-800 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-green-800 blur-3xl"></div>
          </div>
          <div className="relative z-10 space-y-8 p-4 md:p-8">
            <header className="flex flex-col space-y-6">
              <button className="text-white hover:text-gray-300 w-fit">
                <ArrowLeft className="h-6 w-6" />
              </button>
              <div className="space-y-1">
                <h1 className="text-3xl font-bold text-white">Enter OTP</h1>
                <p className="text-sm text-red-100/70">
                  Please check your phone inbox and enter the OTP we send you
                </p>
              </div>
            </header>

            <div className="flex justify-between space-x-2">
              {Array.from({ length: OTP_LENGTH }).map((_, index) => (
                <Input
                  key={index}
                  maxLength={1}
                  value={otpValues[index]}
                  className={`
                  h-14 w-24 text-center text-2xl font-semibold text-white transition-colors
                  bg-neutral-800 border-2 border-transparent
                  focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-red-500
                  ${index === 2 && "border-red-500"} 
                  ${otpValues[index] ? "bg-neutral-800" : "bg-neutral-900"}
                `}
                  readOnly={true}
                />
              ))}
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6 text-base rounded-lg"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
