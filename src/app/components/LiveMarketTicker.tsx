import { useEffect, useState } from "react";

interface MarketData {
  name: string;
  price: string;
  change: number;
  symbol: string;
}

export function LiveMarketTicker() {
  const [markets, setMarkets] = useState<MarketData[]>([
    { name: "Brent Crude", price: "$84.25", change: 1.24, symbol: "BRENT" },
    { name: "WTI Crude", price: "$78.90", change: 0.85, symbol: "WTI" },
    { name: "Urals Crude", price: "$76.15", change: -0.42, symbol: "URALS" },
    { name: "Diesel", price: "$2.84/gal", change: 2.15, symbol: "DIESEL" },
    { name: "Gasoline", price: "$2.45/gal", change: 1.08, symbol: "GASOLINE" },
    { name: "Jet A-1", price: "$3.12/gal", change: -0.35, symbol: "JET-A1" },
    { name: "RUB/USD", price: "₽92.45", change: 0.15, symbol: "RUB/USD" },
    { name: "MOEX Index", price: "3,245", change: 0.58, symbol: "MOEX" },
  ]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMarkets((prev) =>
        prev.map((market) => ({
          ...market,
          change: Number(((Math.random() - 0.5) * 3).toFixed(2)),
        }))
      );
    }, 8000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="h-9 overflow-hidden border-b border-amber-500/20 bg-slate-950 text-white">
      <div className="flex h-full items-center">
        <div className="z-10 flex h-full flex-shrink-0 items-center bg-amber-500 px-4">
          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-950">
            Live Markets
          </span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="live-market-scroll flex h-full min-w-max items-center">
            {[...markets, ...markets, ...markets].map((market, idx) => (
              <div
                key={`${market.symbol}-${idx}`}
                className="flex items-center gap-2 whitespace-nowrap px-7 text-[10px] font-black uppercase tracking-[0.12em]"
                title={market.name}
              >
                <span className="text-slate-300">{market.symbol}</span>
                <span className="text-slate-400">{market.price}</span>
                <span
                  className={`flex items-center gap-1 ${
                    market.change >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {market.change >= 0 ? "▲" : "▼"}{" "}
                  {Math.abs(market.change).toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes liveMarketScroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-33.333%);
          }
        }

        .live-market-scroll {
          animation: liveMarketScroll 45s linear infinite;
        }

        .live-market-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}