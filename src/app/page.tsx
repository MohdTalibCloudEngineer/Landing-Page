import CallButon from "@/components/CallButon";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="p-5">
      <Navbar />
      <Hero
        imagePath={
          "https://cdn.dorik.com/63aa71fb60d62300118309c9/63aa724660d62300118309d2/images/%E2%80%94Pngtree%E2%80%94business-coaching-and-online-discussion_8955819_eps2j3bc.png"
        }
        title={"What You’ll Disc in Thisover"}
        subtitle={"One-on-one Strategy Call"}
        points={[
          {
            heading: "#1 Unlimited Supply of Leads",
            description:
              "How to generate an unlimited supply of leads and prospects or find high-paying clients for any online or brick-and-mortar business on a consistent basis.",
          },
          {
            heading: "#2 Convert Leads into Paying Customers",
            description:
              " Improve your selling skills even if you have never sold in the past. Everyone is a salesperson. You only have to get a little better at it to be hugely successful.",
          },
          {
            heading: "#3 Leverage Your Resources",
            description:
              "How a Solopreneur, Freelancer, and New-Business owner can leverage their time and money to create the lifestyle they always wanted.",
          },
        ]}
      />
      <CallButon />
      <Faq />
    </main>
  );
}
