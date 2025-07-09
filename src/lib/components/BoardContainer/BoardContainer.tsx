export const BoardContainer = ({ children }: { children: React.ReactNode }) => (
  <main className="flex-1 flex items-center justify-center">
    <div className="w-full max-w-[700px]">{children}</div>
  </main>
);
