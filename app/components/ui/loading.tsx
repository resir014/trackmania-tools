export function LoadingSpinner() {
  return (
    <div className="grid h-12 w-12 animate-spin grid-cols-2 grid-rows-2 gap-2">
      <div className="rounded-full bg-blue-700" />
      <div className="rounded-full bg-blue-600" />
      <div className="rounded-full bg-blue-600" />
      <div className="rounded-full bg-blue-700" />
    </div>
  );
}

export function LoadingPlaceholder() {
  return (
    <div className="flex flex-1 items-center justify-center p-8">
      <LoadingSpinner />
    </div>
  );
}
