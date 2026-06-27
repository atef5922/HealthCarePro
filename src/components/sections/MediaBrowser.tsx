"use client";

import * as React from "react";
import { EventCard } from "@/components/cards/EventCard";
import { NewsCard } from "@/components/cards/NewsCard";
import { FilterTabs } from "@/components/sections/FilterTabs";
import { SearchInput } from "@/components/sections/SearchInput";
import { events } from "@/data/events";
import { news } from "@/data/news";

export function MediaBrowser() {
  const [query, setQuery] = React.useState("");
  const [tab, setTab] = React.useState("All");
  const categories = ["All", ...Array.from(new Set(news.map((item) => item.category))), "Events"];
  const filteredNews = news.filter((item) => {
    const matchesQuery = `${item.title} ${item.excerpt}`.toLowerCase().includes(query.toLowerCase());
    const matchesTab = tab === "All" || item.category === tab;
    return matchesQuery && matchesTab;
  });
  const showEvents = tab === "All" || tab === "Events";

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <SearchInput value={query} onChange={setQuery} placeholder="Search news and media" />
        <FilterTabs tabs={categories} active={tab} onChange={setTab} />
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredNews.map((item) => (
          <NewsCard key={item.slug} item={item} />
        ))}
        {showEvents && events.map((event) => <EventCard key={event.slug} event={event} />)}
      </div>
    </div>
  );
}
