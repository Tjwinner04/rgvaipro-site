import Link from "next/link";
import { SolutionIcon, type SolutionIconName } from "./icons";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: SolutionIconName;
};

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
        <SolutionIcon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline-offset-4 group-hover:underline"
      >
        Learn more
      </Link>
    </article>
  );
}
