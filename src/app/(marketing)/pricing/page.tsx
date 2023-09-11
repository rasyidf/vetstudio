import { plansConfig } from "@/config/subscriptions";
import { Plan } from "./plans";


export function Component() {

  return (
    <div className="container container-md">
      <div
        className={"border-border w-full rounded-lg border px-3 py-4 backdrop-blur-[2px] md:p-6"}
      >
        <div className="grid gap-4 md:grid-cols-2 md:gap-0">
          <Plan
            {...plansConfig.free}
            className="md:border-border/50 md:border-r md:pr-4"
          />
          <Plan {...plansConfig.basic} className="md:pl-4 " />

          <Plan
            {...plansConfig.standard}
            className="md:border-border/50 md:border-r  mt-4  border-t md:pr-4"
          />
          <Plan {...plansConfig.pro} className="border-t mt-4 md:pl-4" />
          <Plan
            {...plansConfig.enterprise}
            className="md:border-border/50 col-span-full md:mt-4 md:border-t md:pt-4"
          />
        </div>
      </div>
    </div>
  );
}


Component.displayName = "PricingPage";