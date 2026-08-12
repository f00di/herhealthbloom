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
  it("announces a successful server response and clears the fields", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => ({ message: "Your message has been sent." }) }));
    render(<ContactForm />);
    const user = await completeForm();
    await user.click(screen.getByRole("button", { name: "Send message" }));
    expect(await screen.findByText("Your message has been sent.")).toHaveAttribute("role", "status");
    expect(screen.getByLabelText(/Name/)).toHaveValue("");
  });

  it("announces delivery configuration errors without claiming success", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, json: async () => ({ message: "Message delivery is not configured yet." }) }));
    render(<ContactForm />);
    const user = await completeForm();
    await user.click(screen.getByRole("button", { name: "Send message" }));
    expect(await screen.findByRole("alert")).toHaveTextContent("Message delivery is not configured yet.");
    expect(screen.getByLabelText(/Name/)).toHaveValue("QA Reader");
  });
});
