import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
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
  const navigate = useNavigate();
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            to={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Upgrade your clinics management experience
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Manage your vet clinic with ease
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Clinic management software that enhances your practice and makes it easy to run your clinic.
          </p>
          <div className="space-x-4">
            <Link to="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
            <Link
              to={siteConfig.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Plan a Demo
            </Link>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            VetStudio is a full-featured clinic management software that includes several features to help you manage your clinic.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {features.map((feature) => (
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nesciunt aut, facilis itaque tenetur assumenda repudiandae dignissimos omnis non esse tempora soluta praesentium repellat officiis maxime necessitatibus ex, amet possimus?
          </p>
        </div>
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Let&apos;s get started,
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ipsum, minus sed recusandae soluta eaque eligendi maiores illo debitis tenetur ipsa vel, optio ex necessitatibus illum deserunt omnis, similique accusamus.

            .{" "}
          </p>
          <Button
            onClick={() => navigate("/auth")}
          >
            Register
          </Button>

        </div>
      </section>
    </>
  );
}


Component.displayName = "IndexPage";

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