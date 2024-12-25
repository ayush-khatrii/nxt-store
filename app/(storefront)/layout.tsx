export default function storeFrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="lg:px-10 px-3">
      {children}
    </section>
  )
}