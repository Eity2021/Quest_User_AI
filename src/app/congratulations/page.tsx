
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import Success_icon from "@/assets/images/Success_icon.png"
export default function page() {
    return (

        <section className="relative overflow-hidden">
            <div className="flex min-h-screen w-full  items-center justify-center p-4">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-red-800 blur-[100px]"></div>
                    <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-green-800 blur-[100px]"></div>
                </div>
                <div>
                    <div className=" z-10 flex flex-col items-center text-center space-y-10 mt-[-10vh]">
                        <div className="relative flex items-center justify-center ">
                            <Image src={Success_icon} alt="" />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold text-white">Congratulation</h1>
                            <p className="text-base text-white/70">
                                Your account setup is complete.
                            </p>
                        </div>
                    </div>
                    <div className="w-94 p-6 z-20  backdrop-blur-sm">
                        <Button
                            type="button"
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6 text-base rounded-lg shadow-lg"
                        >
                            Continue to Homepage
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

