type LoadingProps = {
  loadingText?: string;
};

export default function Loading({ loadingText }: Readonly<LoadingProps>) {
  return (
    <div className="flex items-center text-slate-400">
      <div
        className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-slate-400 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
      <strong className="ml-2">{loadingText || "Loading"}...</strong>
    </div>
  );
}
