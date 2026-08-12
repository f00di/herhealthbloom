import Link from "next/link";
import { ArrowIcon } from "@/components/ui/icons";

export default function NotFound() {
  return <div className="not-found container"><p className="eyebrow">404 error</p><h1>We couldn’t find that page</h1><p>The address may have changed, or the page may no longer be available.</p><div className="button-row"><Link className="button button-primary" href="/">Return home</Link><Link className="text-link" href="/articles">Browse articles <ArrowIcon /></Link></div></div>;
}
