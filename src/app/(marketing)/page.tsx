import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useNavigate, Link, isRouteErrorResponse, useRouteError } from "react-router-dom";


const features = [
  {
    title: "Manajemen Tanpa Batas",
    description: "Mudahkan pengelolaan klinik hewan dengan sistem yang terintegrasi dan lengkap. Tidak perlu khawatir tentang mencatat atau mencari informasi, semuanya ada di satu tempat!"
  },
  {
    title: "Sistem Terintegrasi",
    description: "Nikmati kemudahan dengan sistem terintegrasi untuk klinik Anda. Semua informasi, dari rekam medis hingga manajemen persediaan, tersedia dalam satu platform yang efisien."
  },
  {
    title: "Asisten Cerdas",
    description: "Dapatkan bantuan dari asisten cerdas kami dalam proses diagnosis klinis dan pengambilan keputusan farmasi. Menyediakan rekomendasi berbasis bukti untuk perawatan yang lebih efektif dan akurat."
  },
  {
    title: "Keamanan Data Terjamin",
    description: "Jaga keamanan data pasien hewan Anda dengan fitur keamanan tingkat lanjut. Dapatkan perlindungan yang kuat untuk rekam medis dan informasi kesehatan pasien."
  },
  {
    title: "Pemberitahuan dan Pengingat",
    description: "Tidak pernah lewatkan janji atau perawatan penting! Nikmati fitur pemberitahuan dan pengingat janji temu dengan klien, jadwal vaksinasi, dan tindakan medis lainnya."
  },
  {
    title: "Pelaporan dan Analisis Terperinci",
    description: "Pantau kinerja klinik Anda dengan pelaporan dan analisis terperinci. Dapatkan wawasan mendalam  untuk membantu Anda membuat keputusan yang lebih cerdas dan strategis."
  },
];

export function Component() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CTASection />
    </>
  );
}


Component.displayName = "IndexPage";

function CTASection() {
  const { t } = useTranslation("marketing");
  const navigate = useNavigate();
  return <section id="call-to-action" className="container py-8 md:py-12 lg:py-24">
    <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
      <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        {t('cta.start')}
      </h2>
      <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        {t('cta.description')}
      </p>
      <Button
        onClick={() => navigate("/login")}
      >
        {t('navbar.register', { ns: "common" })}
      </Button>

    </div>
  </section>;
}

function FeatureSection() {
  const { t } = useTranslation("marketing");
  return <section
    id="features"
    className="container dark:bg-transparent"
  >
    <div className="py-8 space-y-6 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          {t('features.title')}
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {t('features.subtitle')}
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature) => (
          <div key={`${feature.title}-card`} className="relative p-2 overflow-hidden border rounded-lg bg-background">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto text-center md:max-w-[58rem]">
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {t('features.description')}
        </p>
      </div>
    </div>
  </section>;
}

function HeroSection() {
  const { t } = useTranslation("marketing");
  return <section className="pt-6 pb-8 space-y-6 md:pb-12 md:pt-10 lg:py-32">
    <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
      <Link
        to={siteConfig.links.twitter}
        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
        target="_blank"
      >
        {t('hero.subtitle')}
      </Link>
      <h1 className="text-3xl font-heading sm:text-5xl md:text-6xl lg:text-7xl">
        {t('hero.title')}
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        {t('hero.description')}
      </p>
      <div className="space-x-4">
        <Link to="/login" className={cn(buttonVariants({ size: "lg" }))}>
          {t('hero.cta')}
        </Link>
        <Link
          to={siteConfig.links.whatsapp}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          {t('hero.democta')}
        </Link>
      </div>
    </div>
  </section>;
}

export function ErrorBoundary() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? (
    <h1>
      {error.status} {error.statusText}
    </h1>
  ) : (
    <h1>{(error instanceof Error) ? (error.message || JSON.stringify(error)) : "Erorr"}</h1>
  );
}

ErrorBoundary.displayName = "SampleErrorBoundary";