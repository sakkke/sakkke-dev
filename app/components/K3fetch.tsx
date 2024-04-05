import Image from "next/image";

export default function K3fetch() {
  return (
    <div className="grid grid-cols-none md:grid-cols-[auto_1fr] mb-[var(--global-line-height)]">
      <Image
        src="/icon.png"
        width={256}
        height={256}
        alt="Icon of sakkke"
        className="justify-self-center md:justify-self-auto"
        style={{ imageRendering: "pixelated" }}
      />
      <div>
        <pre className="h-full my-0">
          <code className="h-full leading-none overflow-x-auto text-[var(--ctp-macchiato-text)]">
            <span className="text-[var(--ctp-macchiato-blue)]">sakkke</span>@
            <span className="text-[var(--ctp-macchiato-blue)]">sakkke-dev</span>
            {"\n"}-----------------{"\n"}
            <span className="text-[var(--ctp-macchiato-pink)]">OS</span>: Alpine
            Linux v3.19 on Windows 10 x86_64{"\n"}
            <span className="text-[var(--ctp-macchiato-pink)]">Shell</span>: ash
            {"\n"}
            <span className="text-[var(--ctp-macchiato-pink)]">Terminal</span>:
            Windows Terminal{"\n"}
            <span className="text-[var(--ctp-macchiato-pink)]">CPU</span>: 12th
            Gen Intel i7-1250U (12) @ 1.881GHz{"\n"}
            {"\n"}
            <span className="bg-[var(--ctp-macchiato-surface1)]">{"   "}</span>
            <span className="bg-[var(--ctp-macchiato-red)]">{"   "}</span>
            <span className="bg-[var(--ctp-macchiato-green)]">{"   "}</span>
            <span className="bg-[var(--ctp-macchiato-yellow)]">{"   "}</span>
            <span className="bg-[var(--ctp-macchiato-blue)]">{"   "}</span>
            <span className="bg-[var(--ctp-macchiato-pink)]">{"   "}</span>
            <span className="bg-[var(--ctp-macchiato-teal)]">{"   "}</span>
            <span className="bg-[var(--ctp-macchiato-subtext1)]">{"   "}</span>
            {"\n"}
            <span className="bg-[var(--ctp-macchiato-surface2)]">{"   "}</span>
            <span className="bg-[var(--ctp-macchiato-red)]">{"   "}</span>
            <span className="bg-[var(--ctp-macchiato-green)]">{"   "}</span>
            <span className="bg-[var(--ctp-macchiato-yellow)]">{"   "}</span>
            <span className="bg-[var(--ctp-macchiato-blue)]">{"   "}</span>
            <span className="bg-[var(--ctp-macchiato-pink)]">{"   "}</span>
            <span className="bg-[var(--ctp-macchiato-teal)]">{"   "}</span>
            <span className="bg-[var(--ctp-macchiato-subtext0)]">{"   "}</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
