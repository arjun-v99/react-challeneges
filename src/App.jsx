import { useState } from "react";

export default function SignIn() {
  const [radio, setRadio] = useState("option1");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signInUser(formData) {
    console.log("Email : " + formData.get("email"));
    console.log("Pwd: " + formData.get("password"));
    console.log("Emplyment: " + formData.get("employmentStatus"));
  }

  return (
    <div className="flex min-h-screen bg-mist font-body">
      {/* ── Left panel – decorative ── */}
      <div className="hidden lg:flex w-[45%] bg-ink flex-col justify-between p-12 relative overflow-hidden">
        {/* Geometric circle accents */}
        <div className="absolute -top-28 -right-28 w-[420px] h-[420px] rounded-full border border-clay/15 pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-[300px] h-[300px] rounded-full border border-clay/10 pointer-events-none" />
        <div className="absolute bottom-20 -left-20 w-[340px] h-[340px] rounded-full border border-clay/8 pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-2.5">
          <div className="w-8 h-8 bg-ember rounded-md flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L14 13H2L8 2Z" fill="white" />
            </svg>
          </div>
          <span className="font-display font-bold text-[1.1rem] text-mist tracking-tight">
            Meridian
          </span>
        </div>

        {/* Headline */}
        <div className="relative z-10">
          <p className="font-display text-[2.4rem] font-extrabold text-mist leading-[1.15] tracking-[-0.03em] mb-6">
            Where ideas
            <br />
            <span className="text-clay">take shape.</span>
          </p>
          <p className="text-smoke text-[0.95rem] leading-relaxed max-w-[300px] font-light">
            A focused workspace built for makers who care about craft.
          </p>
        </div>

        {/* Testimonial */}
        <div className="relative z-10 border-t border-clay/12 pt-6">
          <p className="text-mist/60 text-sm italic leading-relaxed mb-3 font-light">
            "Switched three months ago and haven't looked back. The clarity is
            unreal."
          </p>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-clay to-ember shrink-0" />
            <div>
              <p className="text-mist text-[0.8rem] font-medium">Selin Aktaş</p>
              <p className="text-smoke text-[0.75rem]">Product Designer</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right panel – form ── */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-[400px]">
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2.5 mb-12">
            <div className="w-7 h-7 bg-ember rounded-[5px] flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14 13H2L8 2Z" fill="white" />
              </svg>
            </div>
            <span className="font-display font-bold text-base text-ink tracking-tight">
              Meridian
            </span>
          </div>

          {/* Heading */}
          <div className="mb-10">
            <h1 className="font-display text-[2rem] font-extrabold text-ink tracking-[-0.04em] leading-[1.1] mb-2">
              Welcome back.
            </h1>
            <p className="text-smoke text-[0.9rem] font-light">
              Sign in to continue to your workspace.
            </p>
          </div>

          {/* Form fields */}
          <form action={signInUser}>
            <div className="flex flex-col gap-4">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[0.78rem] font-medium text-ink uppercase tracking-widest mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  defaultValue="admin@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-ink/4 border border-transparent text-ink text-[0.95rem] outline-none transition-all duration-200 focus:bg-white focus:border-ember placeholder:text-smoke/50"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label
                    htmlFor="password"
                    className="text-[0.78rem] font-medium text-ink uppercase tracking-widest"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-[0.78rem] text-ember font-medium hover:underline"
                  >
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    name="password"
                    defaultValue="12345"
                    className="w-full pl-4 pr-10 py-3 rounded-lg bg-ink/4 border border-transparent text-ink text-[0.95rem] outline-none transition-all duration-200 focus:bg-white focus:border-ember placeholder:text-smoke/50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-smoke hover:text-ink transition-colors p-0.5 cursor-pointer"
                  >
                    {showPassword ? (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label
                    htmlFor="description"
                    className="text-[0.78rem] font-medium text-ink uppercase tracking-widest"
                  >
                    Description
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    name="description"
                    id="description"
                    className="w-full pl-4 pr-10 py-3 rounded-lg bg-ink/4 border border-transparent text-ink text-[0.95rem] outline-none transition-all duration-200 focus:bg-white focus:border-ember placeholder:text-smoke/50"
                  ></textarea>
                </div>
              </div>

              <div>
                <h3>Employment Status</h3>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      value: "Unemployed",
                      label: "Unemployed",
                    },
                    {
                      value: "Part-Time",
                      label: "Part-Time",
                    },
                    {
                      value: "Full-Time",
                      label: "Full-Time",
                    },
                  ].map(({ value, label }) => (
                    <label
                      key={value}
                      className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                        radio === value
                          ? "border-ember bg-ember/5"
                          : "border-ink/10 bg-ink/3 hover:border-ink/20"
                      }`}
                    >
                      <div className="relative flex items-center justify-center shrink-0">
                        <input
                          type="radio"
                          name="employmentStatus"
                          value={value}
                          checked={radio === value}
                          onChange={() => setRadio(value)}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
                            radio === value ? "border-ember" : "border-ink/25"
                          }`}
                        >
                          {radio === value && (
                            <div className="w-2.5 h-2.5 rounded-full bg-ember" />
                          )}
                        </div>
                      </div>
                      <div>
                        <p
                          className={`text-sm font-medium ${radio === value ? "text-ink" : "text-smoke"}`}
                        >
                          {label}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 accent-ember cursor-pointer"
                  name="remember"
                />
                <label
                  htmlFor="remember"
                  className="text-[0.85rem] text-smoke font-light cursor-pointer"
                >
                  Keep me signed in
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-1 py-3.5 bg-ink text-mist rounded-lg text-[0.95rem] font-medium tracking-wide cursor-pointer transition-colors duration-200 hover:bg-ember"
              >
                Sign in →
              </button>
            </div>
          </form>
          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-ink/10" />
            <span className="text-smoke text-[0.8rem]">or</span>
            <div className="flex-1 h-px bg-ink/10" />
          </div>

          {/* Google SSO */}
          <button
            type="button"
            className="w-full py-3 flex items-center justify-center gap-2.5 border border-ink/12 rounded-lg text-[0.9rem] text-ink cursor-pointer transition-all duration-200 hover:border-ink hover:bg-ink/3"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Sign up link */}
          <p className="text-center mt-8 text-[0.85rem] text-smoke font-light">
            No account yet?{" "}
            <a
              href="#"
              className="text-ink font-medium hover:text-ember transition-colors"
            >
              Create one →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
