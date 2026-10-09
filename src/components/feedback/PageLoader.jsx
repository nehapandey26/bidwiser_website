/** Shown while a lazily-loaded route chunk downloads. */
export default function PageLoader() {
  return (
    <div className="grid min-h-[40vh] place-items-center">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary"
        role="status"
        aria-label="Loading"
      />
    </div>
  )
}
