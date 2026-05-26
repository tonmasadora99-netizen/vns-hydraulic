'use client';

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Tag } from "lucide-react";
import ProductTags from "@/components/products/ProductTags";

const specData = [
  { dn: 5, inch: "3/16", size: -3, id: 4.8, od: 13.4, opBar: 415, opPsi: 6000, test: 830, burst: 1650, bending: 90, weight: 0.310 },
  { dn: 6, inch: "1/4", size: -4, id: 6.4, od: 15.0, opBar: 400, opPsi: 5800, test: 800, burst: 1600, bending: 100, weight: 0.385 },
  { dn: 8, inch: "5/16", size: -5, id: 7.9, od: 16.6, opBar: 350, opPsi: 5075, test: 700, burst: 1400, bending: 115, weight: 0.450 },
  { dn: 10, inch: "3/8", size: -6, id: 9.5, od: 19.0, opBar: 330, opPsi: 4800, test: 660, burst: 1320, bending: 130, weight: 0.555 },
  { dn: 12, inch: "1/2", size: -8, id: 12.7, od: 22.2, opBar: 275, opPsi: 4000, test: 550, burst: 1100, bending: 180, weight: 0.660 },
  { dn: 16, inch: "5/8", size: -10, id: 15.9, od: 25.4, opBar: 250, opPsi: 3625, test: 500, burst: 1000, bending: 200, weight: 0.795 },
  { dn: 19, inch: "3/4", size: -12, id: 19.0, od: 29.3, opBar: 215, opPsi: 3100, test: 430, burst: 850, bending: 240, weight: 0.955 },
  { dn: 25, inch: "1", size: -16, id: 25.4, od: 38.1, opBar: 165, opPsi: 2400, test: 325, burst: 650, bending: 300, weight: 1.370 },
  { dn: 31, inch: "1 1/4", size: -20, id: 31.8, od: 48.3, opBar: 125, opPsi: 1800, test: 250, burst: 500, bending: 420, weight: 2.025 },
  { dn: 38, inch: "1 1/2", size: -24, id: 38.1, od: 54.6, opBar: 90, opPsi: 1300, test: 180, burst: 360, bending: 500, weight: 2.750 },
  { dn: 51, inch: "2", size: -32, id: 50.8, od: 67.3, opBar: 80, opPsi: 1160, test: 160, burst: 320, bending: 630, weight: 3.480 },
];

export default function HydraulicHoseDetail2SN() {
  const t = useTranslations('ProductDetail.HydraulicHose');
  return (
    <section className="bg-white py-12 text-black font-sans border-t border-zinc-100 mt-16">
      <div className="mx-auto max-w-[1200px]">
        <style jsx>{`
          @keyframes slide-in-from-left {
            from { transform: translateX(-60px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slide-in-from-right {
            from { transform: translateX(60px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes fade-in-scale {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-slide-left { animation: slide-in-from-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-slide-right { animation: slide-in-from-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-scale { animation: fade-in-scale 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        `}</style>

        {/* Top Content: Image and Description */}
        <div className="grid gap-10 lg:grid-cols-2 items-start mb-16">

          {/* Left Side: Product Image */}
          <div className="flex flex-col items-center lg:items-start animate-slide-left">
            <div className="relative w-full max-w-[480px] mx-auto lg:mx-0">
              {/* Header Badge (Floating) */}
              {/* <button 
                onClick={() => {
                  window.scrollBy({ top: 500, behavior: "smooth" });
                }}
                className="absolute -top-6 inset-x-0 flex justify-center z-10 whitespace-nowrap group transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-scale" style={{ animationDelay: '0.4s', opacity: 0 }}
              >
                <div className="flex items-center gap-2 rounded-xl bg-white px-6 py-2 text-xl font-black shadow-[0_8px_20px_rgba(0,0,0,0.3)] ring-1 ring-[#af0000]/20 group-hover:bg-zinc-50 transition-colors">
                  รายละเอียดสินค้า
                  <svg 
                    className="w-5 h-5 text-[#af0000] animate-bounce" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button> */}

              <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-white">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/products/products/2_SN-removebg-preview.png"
                    alt="Hydraulic Hose 2SN"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Category Tag */}
            <div className="mt-4 flex justify-center w-full max-w-[480px]">
              <div className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg block text-center">{t('badge2SN')}</div>
            </div>
          </div>

          {/* Right Side: Product Description */}
          <div className="pt-4 lg:pt-0 animate-slide-right">
            <h1 className="text-3xl font-black text-black mb-2">Hydraulic Hose</h1>
            <h2 className="text-3xl font-black mb-6">
              2SN <span className="text-[#af0000]">DIN EN 853</span> SAE 100 R2AT
            </h2>

            <ul className="space-y-4 text-lg font-bold text-zinc-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                {t('bullet1')}
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                {t('bullet2_2SN')}
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                {t('bullet3')}
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                {t('bullet4')}
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                {t('bullet5')}
              </li>
            </ul>
            {/* Social icons */}
            <div className="mt-8 flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100037191445975" target="_blank" rel="noopener noreferrer" className="group transition-all hover:scale-110 active:scale-95">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-lg">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </a>
              <a href="https://line.me/ti/p/~tonmasadora" target="_blank" rel="noopener noreferrer" className="group transition-all hover:scale-110 active:scale-95">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06c755] text-white shadow-lg">
                  <div className="flex flex-col items-center justify-center scale-75">
                    <span className="text-[10px] font-black leading-none">LINE</span>
                    <div className="h-[2px] w-8 bg-white/30 my-[2px]" />
                    <span className="text-[10px] font-black leading-none">OFFICIAL</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Tags Section */}
            <ProductTags tags={["HYDRAULIC HOSE", "สายไฮดรอลิค", "2SN", "SAE 100 R2AT", "DIN EN 853", "สายแรงดันสูง", "สายน้ำมันไฮดรอลิค"]} categoryHref="/products/hydraulic-hose" />
          </div>
        </div>

        {/* Technical Data Table */}
        <div className="overflow-x-auto rounded-xl shadow-2xl border border-zinc-200">
          <table className="w-full min-w-[1000px] text-center border-collapse">
            <thead>
              <tr className="bg-[#af0000] text-white">
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>Dn</th>
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>Inch</th>
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>Size</th>
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>i.d.<br /><span className="text-xs font-normal">mm</span></th>
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>o.d.<br /><span className="text-xs font-normal">mm</span></th>
                <th className="py-2 px-2 border-r border-white/20 border-b border-white/20" colSpan={2}>Operating pressure</th>
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>Test pressure<br /><span className="text-xs font-normal">bar</span></th>
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>Standard bursting<br /><span className="text-xs font-normal">bar min</span></th>
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>Min. bending radius<br /><span className="text-xs font-normal">mm</span></th>
                <th className="py-4 px-2" rowSpan={2}>Weight approx. radius<br /><span className="text-xs font-normal">kg/m</span></th>
              </tr>
              <tr className="bg-[#af0000] text-white">
                <th className="py-2 px-2 border-r border-white/20">bar</th>
                <th className="py-2 px-2 border-r border-white/20">psi</th>
              </tr>
            </thead>
            <tbody>
              {specData.map((row, idx) => (
                <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-zinc-50'} hover:bg-red-50 transition-colors`}>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.dn}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.inch}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.size}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.id}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.od}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.opBar}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.opPsi}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.test}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.burst}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.bending}</td>
                  <td className="py-4 font-bold">{row.weight.toFixed(3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
