import { Button } from '../button'

export default function Filter({ setOpen }: { setOpen: (open: boolean) => void }) {
  return (
    <section>
      <div className='flex justify-between mb-10'>
        <div>
          <Button className='text-white bg-transparent border border-[#F6F4F20D] px-8 ' onClick={() => setOpen(true)} style={{ boxShadow: "inset 0 1px 2px rgba(246, 244, 242, 0.45)" }}>Filter</Button>
        </div>
        <div>
          <Button className='text-white bg-transparent border border-[#F6F4F20D] px-8' style={{ boxShadow: "inset 0 1px 2px rgba(246, 244, 242, 0.45)" }}>Practice</Button>
        </div>
      </div>
    </section>
  )
}
