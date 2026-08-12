import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "@/components/forms/contact-form";

afterEach(() => vi.unstubAllGlobals());

async function completeForm() {
  const user = userEvent.setup();
  await user.type(screen.getByLabelText(/Name/), "QA Reader");
  await user.type(screen.getByLabelText(/Email/), "reader@example.com");
  await user.type(screen.getByLabelText(/Message/), "This is a general website question.");
  return user;
}

describe("ContactForm", () => {
  it("opens a prefilled email draft without claiming delivery", async () => {
    const open = vi.fn();
    vi.stubGlobal("open", open);
    render(<ContactForm contactEmail="hello@example.com" />);
    const user = await completeForm();
    await user.click(screen.getByRole("button", { name: "Prepare email" }));
    expect(open).toHaveBeenCalledWith(expect.stringMatching(/^mailto:hello@example\.com\?/), "_self");
    expect(screen.getByRole("status")).toHaveTextContent("Review the message there and send it");
    expect(screen.getByLabelText(/Name/)).toHaveValue("QA Reader");
  });

  it("shows a transparent unavailable state when no public email is configured", () => {
    render(<ContactForm contactEmail={null} />);
    expect(screen.getByText("Contact email not yet published.")).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
