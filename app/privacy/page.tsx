import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Vertmax",
  description: "How Vertmax collects, uses, and protects your data.",
};

const EFFECTIVE_DATE = "July 11, 2026";
const CONTACT_EMAIL = "shriyanthnandakumar@gmail.com";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-[18px] tracking-tight text-text-primary">
        {title}
      </h2>
      <div className="mt-3 space-y-3 font-body text-[15px] leading-relaxed text-text-muted">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-36 pb-24 sm:pt-44">
        <p className="eyebrow font-display text-[12px] text-volt">
          PRIVACY POLICY
        </p>
        <h1 className="mt-2 font-display text-[32px] tracking-tight text-text-primary sm:text-[40px]">
          Your data, plainly explained.
        </h1>
        <p className="mt-4 font-body text-[15px] text-text-muted">
          Effective {EFFECTIVE_DATE}. This policy covers the Vertmax iOS app
          and its widget.
        </p>

        <Section title="Overview">
          <p>
            Vertmax measures your vertical jump using your phone&apos;s
            camera and gives you a training program based on the result. We
            collect only what&apos;s needed to run the app and keep your
            results synced across devices — we don&apos;t sell your data,
            and we don&apos;t use third-party advertising or tracking SDKs.
          </p>
        </Section>

        <Section title="Information We Collect">
          <p>
            <span className="text-text-primary">Account information.</span>{" "}
            If you sign in, we use Google or Apple Sign-In (via Supabase
            Authentication) to create your account. We receive your name and
            email address (or, if you choose to hide your email with Apple,
            a private relay address) and a unique account identifier. We
            never see or store your Google or Apple password.
          </p>
          <p>
            <span className="text-text-primary">Camera and microphone.</span>{" "}
            Vertmax uses your camera to record short video clips to measure
            your jump. This video is analyzed on your device to calculate
            takeoff and landing — it is not uploaded to our servers or any
            third party. Clips include audio by default because of how
            iOS video recording works; we don&apos;t process or listen to
            it. You can revoke camera/microphone access anytime in iOS
            Settings.
          </p>
          <p>
            <span className="text-text-primary">Photo library.</span>{" "}
            With your permission, Vertmax can save generated jump clips to
            your photo library, or let you pick an existing video instead
            of recording a new one.
          </p>
          <p>
            <span className="text-text-primary">Training data.</span> Your
            jump measurements (numeric results, not video), training
            program, session completions, and streaks are stored in our
            database (hosted by Supabase) so they sync across your devices
            and survive a reinstall.
          </p>
          <p>
            <span className="text-text-primary">
              On-device widget data.
            </span>{" "}
            Your best jump and current streak are cached locally on your
            device (via an iOS App Group) so the home screen widget can
            display them. This never leaves your device.
          </p>
        </Section>

        <Section title="How We Use Your Information">
          <p>
            We use your data to: measure and track your vertical jump,
            assign and adapt your training program, sync your progress
            across devices, and maintain your account. We do not use your
            data for advertising, and we do not build advertising profiles.
          </p>
        </Section>

        <Section title="How Your Data Is Stored and Shared">
          <p>
            Your account and training data are stored with Supabase, our
            database and authentication provider, which acts as a data
            processor on our behalf. Access to your data is restricted to
            your own account by database-level security rules — no other
            user can read your data, and we don&apos;t share it with data
            brokers, ad networks, or analytics companies.
          </p>
          <p>
            Recorded jump videos stay on your device unless you explicitly
            save or share them yourself; we do not upload or store your raw
            video clips.
          </p>
        </Section>

        <Section title="Data Retention">
          <p>
            We keep your account and training data for as long as your
            account is active. If you&apos;d like your account and all
            associated data deleted, email us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-volt underline underline-offset-2"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            and we&apos;ll delete it within 30 days. An in-app delete-account
            option is planned for a future update.
          </p>
        </Section>

        <Section title="Your Choices">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Camera, microphone, and photo library access are all optional
              and can be turned off anytime in iOS Settings — the app will
              tell you what stops working without them.
            </li>
            <li>You can sign out of your account at any time in the app.</li>
            <li>
              You can request a copy or deletion of your data by emailing{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-volt underline underline-offset-2"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </li>
          </ul>
        </Section>

        <Section title="Children's Privacy">
          <p>
            Vertmax is not directed at children under 13, and we do not
            knowingly collect personal information from children under 13.
            If you believe a child has provided us with personal
            information, contact us and we&apos;ll delete it.
          </p>
        </Section>

        <Section title="Security">
          <p>
            We use industry-standard measures — encrypted connections in
            transit and database-level access controls — to protect your
            data. No method of storage or transmission is 100% secure, but
            we work to protect your information appropriately.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            If we make material changes to this policy, we&apos;ll update
            the effective date above and, where appropriate, notify you in
            the app.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            Questions about this policy or your data? Email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-volt underline underline-offset-2"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
