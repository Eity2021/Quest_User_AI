import CustomDropdown from '@/components/CustomDropdown'
const options = [
  { label: "USD", value: "usd" },
  { label: "EUR", value: "eur" },
  { label: "TK", value: "tk" },
];

export default function ProfileDropdown() {
  return (
    <section className=" mx-6 ">
          <div className="mx-auto  px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-white">Profile</div>
            <div className="flex items-center gap-4">
              <CustomDropdown
                options={options}
                onChange={(value) => console.log(value)}
              />
            </div>
          </div>
        </section>
  )
}
