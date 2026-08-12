import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { FAQAccordion } from "@/components/ui/faq-accordion";

describe("FAQAccordion", () => {
  it("renders crawlable answers and uses a native keyboard-operable disclosure", async () => {
    const user = userEvent.setup();
    const { container } = render(<FAQAccordion items={[{ question: "Is this advice?", answer: "No, this is educational information." }]} />);
    expect(screen.getByText("No, this is educational information.")).toBeInTheDocument();
    const details = container.querySelector("details");
    expect(details).not.toHaveAttribute("open");
    await user.click(screen.getByText("Is this advice?"));
    expect(details).toHaveAttribute("open");
  });
});
