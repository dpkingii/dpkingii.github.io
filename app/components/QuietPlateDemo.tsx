"use client";

import { useState } from "react";

const menu = [
  { name: "Spicy Miso Ramen", detail: "Chashu, soft egg, scallion", price: "$15.50", cal: "820 cal" },
  { name: "Chicken Burrito", detail: "Rice, black beans, salsa", price: "$11.25", cal: "650 calories" },
  { name: "Iced Matcha Latte", detail: "Grande, oat milk", price: "$5.95", cal: "190 cal" },
];

export default function QuietPlateDemo() {
  const [on, setOn] = useState(false);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="text-sm text-muted">Try it: flip the switch to hide the calorie counts.</p>
        <button
          type="button"
          role="switch"
          aria-checked={on}
          onClick={() => setOn(!on)}
          className="flex shrink-0 items-center gap-2 text-sm font-semibold"
        >
          QuietPlate
          <span
            className={`relative h-6 w-11 rounded-full transition-colors ${on ? "bg-[#7fa688]" : "bg-line"}`}
          >
            <span
              className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-white shadow transition-transform ${
                on ? "translate-x-5" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div className="overflow-hidden rounded-md border border-line bg-[#faf9f7] text-[#2b2b28]">
        <div className="flex items-center gap-2 border-b border-[#eae8e2] px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-[#e5e2dc]" />
          <span className="size-2.5 rounded-full bg-[#e5e2dc]" />
          <span className="size-2.5 rounded-full bg-[#e5e2dc]" />
          <span className="ml-2 truncate rounded bg-white px-3 py-1 text-xs text-[#90908a]">
            noodles-and-more.example/menu
          </span>
        </div>
        <ul className="divide-y divide-[#eae8e2]">
          {menu.map((item) => (
            <li key={item.name} className="flex items-baseline justify-between gap-4 px-5 py-3.5">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-[#90908a]">
                  {item.detail}
                  {/* Drawn with CSS content so a visitor's real QuietPlate extension doesn't scrub the demo. */}
                  <span
                    data-cal={` · ${item.cal}`}
                    aria-label={on ? undefined : item.cal}
                    className={`font-semibold text-[#b4533c] after:content-[attr(data-cal)] ${on ? "invisible" : ""}`}
                  />
                </p>
              </div>
              <span className="shrink-0 text-sm">{item.price}</span>
            </li>
          ))}
        </ul>
        <p className="border-t border-[#eae8e2] px-5 py-2.5 text-xs text-[#90908a]">
          {on ? "Numbers hidden. Prices and descriptions stay put." : "QuietPlate is off."}
        </p>
      </div>
    </div>
  );
}
