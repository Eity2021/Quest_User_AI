import SignUpForm from "@/components/ui/form/SignUpForm";
import { ArrowLeft } from "lucide-react";
import {} from "lucide-react";
export default function page() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#00A699] blur-[200px] opacity-60"></div>

      <div>
        <div className="min-h-screen flex items-center justify-center p-4 ">
          <div className=" container mx-auto space-y-8 lg:px-60 md:px-40 px-6">
            {/* Back button */}
            <button className="text-white hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-white text-3xl font-bold text-balance">
                Join Quest AI Today
              </h1>
              <p className="text-white/70 text-base">
                Power up your learning with Quest AI
              </p>
            </div>

            {/* Form */}
            <SignUpForm></SignUpForm>
          </div>
        </div>
      </div>
    </section>
  );
}
