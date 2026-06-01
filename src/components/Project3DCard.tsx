"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { highlightTextParts } from "@/lib/highlightText";
import Image from "next/image";

type Project3DCardProps = {
  title: string;
  img?: string;
  desc: string;
  url?: string;
  badge: string;
};

export default function Project3DCard({
  title,
  img = "/profile.jpg", // fallback image if none provided
  desc,
  url,
  badge,
}: Project3DCardProps) {
  const renderHighlightedText = (text: string) =>
    highlightTextParts(text).map((part, index) =>
      part.kind ? (
        <span key={`${part.text}-${index}`} className={`focus-${part.kind}`}>
          {part.text}
        </span>
      ) : (
        <React.Fragment key={`${part.text}-${index}`}>{part.text}</React.Fragment>
      )
    );

  return (
    <CardContainer className="inter-var w-full" containerClassName="py-4">
      <CardBody className="group/card relative h-full min-h-[31rem] w-full rounded-lg border border-border bg-surface-1 p-5 shadow-[6px_6px_0_0_#27272a] transition-shadow hover:shadow-[10px_10px_0_0_#7c3aed] sm:min-h-[30rem]">
        <CardItem
          translateZ={50}
          className="flex w-full items-start justify-between gap-3"
        >
          <h2 className="text-xl font-bold leading-tight text-zinc-100">
            {renderHighlightedText(title)}
          </h2>
          <span className="shrink-0 rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-bold uppercase tracking-normal text-accent">
            {badge}
          </span>
        </CardItem>

        <CardItem translateZ={100} className="mt-5 w-full">
          <Image
            src={img}
            height={422}
            width={750}
            className="h-52 w-full rounded-lg border border-border object-cover group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>

        <CardItem
          as="p"
          translateZ={60}
          className="mt-5 min-h-24 text-sm leading-6 text-zinc-300"
        >
          {renderHighlightedText(desc)}
        </CardItem>

        <div className="mt-8 flex items-center justify-end">
          {url ? (
            <CardItem
              translateZ={35}
              as="a"
              href={url}
              target={url.startsWith("http") ? "_blank" : undefined}
              rel={url.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-full border border-border bg-surface-2 px-5 py-3 text-sm font-bold text-zinc-100 shadow-[4px_4px_0_0_#27272a] transition hover:bg-surface-3 hover:text-accent active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_0_#27272a]"
            >
              View project
            </CardItem>
          ) : (
            <CardItem
              translateZ={35}
              as="div"
              className="rounded-full border border-border bg-surface-2 px-5 py-3 text-sm font-bold text-zinc-500 cursor-not-allowed"
            >
              Private Repo
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
