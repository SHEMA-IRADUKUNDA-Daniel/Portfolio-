import { Mail, MapPin, Clock3 } from "lucide-react";
import type { ContactIconsProps } from "../interface";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

const GithubIcon: React.FC<ContactIconsProps> = ({ className, onClick }) => (
  <svg
    className={className}
    onClick={onClick}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon: React.FC<ContactIconsProps> = ({ className, onClick }) => (
  <svg
    className={className}
    onClick={onClick}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current || loading) return;
    const formData = new FormData(form.current);

    const name = formData.get("user_name")?.toString().trim();
    const email = formData.get("user_email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");
    if (!name || !emailValid || !message) {
      setValidationError(true);
      setTimeout(() => setValidationError(false), 3000);
      return;
    }
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
      )
      .then(() => {
        setSuccess(true);

        form.current?.reset();

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((err) => {
        console.error(err);
        setError(true);

        setTimeout(() => setError(false), 3000);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);
  return (
    <section
      id="Contact"
      className="px-6 md:px-16 pt-5 py-10 bg-zinc-950 text-white"
    >
      {success && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
          Message sent successfully!
        </div>
      )}

      {error && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded">
          Failed to send message!
        </div>
      )}
      <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-4">
        Contact
      </p>

      <h2 className="text-5xl md:text-6xl font-serif mb-16">
        Let’s work <span className="text-primary">together</span>
      </h2>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* LEFT */}
        <div>
          <p className="text-zinc-400 leading-8 max-w-md mb-10">
            Have a project in mind? I’d love to hear about it. Send a message
            and I’ll get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-primary" size={18} />
              <div>
                <p className="text-sm text-zinc-500">Email</p>
                <a
                  href="mailto:danieliradukunda00@gmail.com"
                  className=" hover:text-primary underline  transition "
                  onClick={() => console.log("clicked")}
                >
                  danieliradukunda00@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-primary" size={18} />
              <div>
                <p className="text-sm text-zinc-500">Location</p>
                <p>Kigali, Rwanda</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Clock3 className="text-primary" size={18} />
              <div>
                <p className="text-sm text-zinc-500">Availability</p>
                <p>Open to freelance & full-time</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-10 self-center">
            <a
              href="https://github.com/SHEMA-IRADUKUNDA-Daniel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-6 h-6 text-primary cursor-pointer hover:text-white hover:scale-110 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/shema-iradukunda-daniel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="w-6 h-6 text-primary cursor-pointer hover:text-white hover:scale-110 transition-all" />
            </a>

            <a
              href="https://x.com/danieliradukun6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon className="w-6 h-6 text-primary cursor-pointer hover:text-white hover:scale-110 transition-all" />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {validationError && (
            <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-xl">
              Please fill in all fields before submitting.
            </p>
          )}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              className="rounded-2xl bg-white/10 border border-white/10 px-5 py-4 outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="your@email.com"
              className="rounded-2xl bg-white/10 border border-white/10 px-5 py-4 outline-none"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full rounded-2xl bg-white/10 border border-white/10 px-5 py-4 outline-none"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Tell me about your project"
            className="w-full rounded-2xl bg-white/10 border border-white/10 px-5 py-4 outline-none resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-2xl py-4 font-medium transition cursor-pointer ${
              loading
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-primary text-black hover:text-white"
            }`}
          >
            {loading ? "Sending..." : success ? "Message sent" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
