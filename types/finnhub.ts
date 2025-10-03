// // types/finnhub.ts

// //
// // -------- RAW API TYPES (unsafe, external) --------
// // These represent what Finnhub *might* return.
// // Always validate before using.
// //

// export type FinnhubNewsRaw = {
//   id?: number;
//   headline?: string;
//   summary?: string;
//   source?: string;
//   url?: string;
//   datetime?: number;
//   category?: string;
//   related?: string;
//   image?: string;
// };

// export type FinnhubProfileRaw = {
//   name?: string;
//   ticker?: string;
//   exchange?: string;
//   [key: string]: unknown; // allow unexpected props
// };

// export type FinnhubSearchResultRaw = {
//   symbol?: string;
//   description?: string;
//   displaySymbol?: string;
//   type?: string;
// };

// export type FinnhubSearchResponseRaw = {
//   count?: number;
//   result?: FinnhubSearchResultRaw[];
// };


// //
// // -------- DOMAIN TYPES (safe for your app) --------
// // After validation/transformation, your app only deals with these.
// //

// export type MarketNewsArticle = {
//   id: string;
//   headline: string;
//   summary: string;
//   source: string;
//   url: string;
//   datetime: number;
//   category?: string;
//   related?: string;
//   image?: string;
// };

// export type StockWithWatchlistStatus = {
//   symbol: string;
//   name: string;
//   exchange: string;
//   type: string;
//   isInWatchlist: boolean;
// };

// //
// // -------- VALIDATION HELPERS (type guards / parsers) --------
// // These make raw API data safe to use.
// //

// export function parseNews(raw: FinnhubNewsRaw): MarketNewsArticle | null {
//   if (!raw.id || !raw.headline || !raw.url || !raw.datetime) return null;

//   return {
//     id: String(raw.id),
//     headline: raw.headline,
//     summary: raw.summary ?? "",
//     source: raw.source ?? "Unknown",
//     url: raw.url,
//     datetime: raw.datetime,
//     category: raw.category,
//     related: raw.related,
//     image: raw.image,
//   };
// }

// export function parseProfile(sym: string, raw: FinnhubProfileRaw): StockWithWatchlistStatus | null {
//   const symbol = sym.toUpperCase();
//   const name = raw?.name || raw?.ticker;
//   if (!name) return null;

//   return {
//     symbol,
//     name,
//     exchange: raw.exchange || "US",
//     type: "Common Stock",
//     isInWatchlist: false,
//   };
// }

// export function parseSearchResult(raw: FinnhubSearchResultRaw): StockWithWatchlistStatus | null {
//   const symbol = raw.symbol?.toUpperCase();
//   if (!symbol || !raw.description) return null;

//   return {
//     symbol,
//     name: raw.description,
//     exchange: raw.displaySymbol || "US",
//     type: raw.type || "Stock",
//     isInWatchlist: false,
//   };
// }
