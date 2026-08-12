import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({ usePathname: () => "/about" }));

import { MobileNavigation } from "@/components/layout/mobile-navigation";

describe("MobileNavigation", () => {
  it("opens, identifies the active route, and closes with Escape", async () => {
    const user = userEvent.setup();
    render(<MobileNavigation />);
    const trigger = screen.getByRole("button", { name: "Open navigation menu" });
    await user.click(trigger);
    expect(screen.getByRole("dialog", { name: "Navigation menu" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("aria-current", "page");
    const lastLink = screen.getByRole("link", { name: "Privacy Policy & Medical Disclaimer" });
    lastLink.focus();
    await user.tab();
    expect(screen.getByRole("button", { name: "Close navigation menu" })).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog", { name: "Navigation menu" })).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
