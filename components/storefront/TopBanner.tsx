export default function TopBanner() {
  return (
    <div id="banner" className="flex bg-foreground text-background z-50 gap-8 justify-center items-center py-3 px-3 w-full">
      <p className="text-sm font-light">This is a top banner</p>
      <button data-collapse-toggle="banner" type="button" className="flex items-centerhover:bg-gray-200  rounded-lg text-sm p-1.5">
      </button>
    </div>
  )
}
