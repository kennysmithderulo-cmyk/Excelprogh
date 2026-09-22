import Image from "next/image";
import { PageWrapper } from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <main className="w-full">
        {/* Hero */}
        <section className="px-4 py-12">
          <h1 className="text-3xl font-bold mb-2">Welcome to Excelprogh</h1>
          <p className="text-white/80 mb-6">
            Professional Excel and web solutions tailored to your business.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden bg-white/5">
              <Image
                src="/budget-tracker.jpg"
                alt="Budget Tracker"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-3">
                <p className="font-semibold">Budget Tracker</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden bg-white/5">
              <Image
                src="/customer-support.jpg"
                alt="Customer Support"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-3">
                <p className="font-semibold">Customer Support</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden bg-white/5">
              <Image
                src="/data-cleaning.jpg"
                alt="Data Cleaning"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-3">
                <p className="font-semibold">Data Cleaning</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden bg-white/5">
              <Image
                src="/data-analytics.jpg"
                alt="Data Analytics"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-3">
                <p className="font-semibold">Data Analytics</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden bg-white/5">
              <Image
                src="/hair-lounge.jpg"
                alt="Hair Lounge"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-3">
                <p className="font-semibold">Hair Lounge</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden bg-white/5">
              <Image
                src="/betslip.jpg"
                alt="Betslip"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-3">
                <p className="font-semibold">Betslip</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden bg-white/5">
              <Image
                src="/website-dev.jpg"
                alt="Website Development"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-3">
                <p className="font-semibold">Website Development</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden bg-white/5">
              <Image
                src="/virtual-assistant.jpg"
                alt="Virtual Assistant"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-3">
                <p className="font-semibold">Virtual Assistant</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden bg-white/5">
              <Image
                src="/inventory-invoice.jpg"
                alt="Inventory & Invoice"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-3">
                <p className="font-semibold">Inventory & Invoice</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden bg-white/5">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={800}
                height={800}
                className="w-full h-auto"
              />
              <div className="p-3">
                <p className="font-semibold">Profile</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
