export default function ChessApp() {
  return (
    <div className="flex flex-col h-screen bg-[#242424] text-white">
      <header className="flex items-center justify-between px-6 py-4 bg-[#1a1a1a] border-b border-[#333]">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="/gambit.png"
              alt="Gambit Logo"
              width={32}
              height={32}
              className="mr-3"
            />
            <span className="font-bold text-2xl">Gambit</span>
          </a>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center bg-[#242424] p-8">
        <div className="w-full max-w-[600px]"></div>
      </div>
    </div>
  );
}
