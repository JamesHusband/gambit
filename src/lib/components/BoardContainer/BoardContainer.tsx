export const BoardContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-1 flex items-center justify-center p-8">
    <div className="w-full max-w-[800px]">{children}</div>
  </div>
);
