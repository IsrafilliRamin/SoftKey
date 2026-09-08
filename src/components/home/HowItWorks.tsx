const steps = [
  {
    number: "01",
    title: "Məhsulunu seç",
    description: "İstədiyin proqramı və ya açarı kataloqdan tap, seç.",
  },
  {
    number: "02",
    title: "Ödənişi et",
    description: "Kart və ya digər təhlükəsiz ödəniş üsulu ilə sifarişi tamamla.",
  },
  {
    number: "03",
    title: "Açarını al",
    description: "Lisenziya açarı dərhal hesabına və e-poçtuna göndərilir.",
  },
  {
    number: "04",
    title: "Aktivləşdir",
    description: "Açarı proqrama daxil et və istifadəyə başla.",
  },
];

export function HowItWorks() {
  return (
    <section id="nece-isleyir" className="border-b border-border py-14">
      <div className="container-page">
        <div className="mb-10 max-w-lg">
          <h2 className="font-display text-xl font-semibold sm:text-2xl">
            Necə işləyir?
          </h2>
          <p className="mt-1.5 text-sm text-text-muted">
            Sifarişdən aktivasiyaya qədər dörd sadə addım.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.number} className="relative flex flex-col gap-3">
              <span className="font-display text-3xl font-semibold text-text-faint">
                {step.number}
              </span>
              <h3 className="text-[15px] font-semibold text-text">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-4 hidden h-px w-6 bg-border-strong sm:block lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
