import Review from "@/components/ui/tutor-profile/review";
import Pricing from "@/components/ui/tutor-profile/pricing";
import TutorInfo from "@/components/ui/tutor-profile/tutor_info";
import Availability from "@/components/ui/tutor-profile/availability";
import Actions from "@/components/ui/tutor-profile/actions";

export const metadata = {
  title: "Tutor Profile | Sarah Johnson",
  description: "Mathematics & Physics Specialist - Expert Tutor",
}

export default function page() {

  return (
    <main className="min-h-screen ">
      {/* Header */}
      <div className="border-b border-border"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header Section */}
        <TutorInfo></TutorInfo>
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </section>

            {/* Subject & Expertise */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Subject & Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {["Calculus", "Algebra", "Physics", "Statistics"].map((subject) => (
                  <span
                    key={subject}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-secondary/30 text-white border border-secondary/50"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </section>
            {/* Availability */}
            <Availability></Availability>
            {/* Reviews */}
            <Review></Review>
          </div>

          {/* Right Column - Pricing & Actions */}
          <div className="space-y-6">
            {/* Pricing */}

            <Pricing></Pricing>

            {/* Action Buttons */}
            <Actions></Actions>
          </div>
        </div>
      </div>
    </main>
  )
}
