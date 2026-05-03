import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

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
    const interval = setInterval(() => {
      setMarkets(prev =>
        prev.map(market => ({
          ...market,
          change: parseFloat(((Math.random() - 0.5) * 3).toFixed(2)),
        }))
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-950 text-white border-b border-amber-500/20 overflow-hidden h-9">
      <div className="flex items-center h-full">
        <div className="bg-amber-500 px-4 h-full flex items-center flex-shrink-0">
          <span className="text-slate-950 text-[10px] font-mono font-medium tracking-[0.15em] uppercase">
            Live Markets
          </span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
            {[...markets, ...markets].map((market, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-7 whitespace-nowrap font-mono text-[10px]"
              >
                <span className="text-slate-300 font-medium">{market.symbol}</span>
                <span className="text-slate-400">{market.price}</span>
                <span
                  className={`flex items-center gap-1 ${
                    market.change >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {market.change >= 0 ? "▲" : "▼"} {Math.abs(market.change).toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
