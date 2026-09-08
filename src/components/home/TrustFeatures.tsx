import { ZapIcon, LockIcon, ShieldIcon, HeadsetIcon } from "@/components/ui/icons";

const features = [
  {
    icon: ZapIcon,
    title: "Ani rəqəmsal təhvil",
    description:
      "Ödəniş təsdiqləndikdən dərhal sonra açarınız hesabınızda və e-poçtunuzdadır.",
  },
  {
    icon: ShieldIcon,
    title: "100% orijinal lisenziya",
    description:
      "Bütün açarlar rəsmi distribyutorlardan alınır və aktivasiyadan əvvəl yoxlanılır.",
  },
  {
    icon: LockIcon,
    title: "Təhlükəsiz ödəniş",
    description:
      "Kart məlumatlarınız bizdə saxlanmır, ödəniş şifrələnmiş kanalla aparılır.",
  },
  {
    icon: HeadsetIcon,
    title: "7/24 dəstək",
    description:
      "Aktivasiya zamanı hər hansı çətinlik yaransa, komandamız həmişə yanınızdadır.",
  },
];

export function TrustFeatures() {
  return (
    <section className="border-b border-border py-14">
      <div className="container-page grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-cyan">
              <feature.icon width={20} height={20} />
            </span>
            <h3 className="text-[15px] font-semibold text-text">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
