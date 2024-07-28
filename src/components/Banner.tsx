import { SaxxieLeaf } from "./SaxxieLeaf";
import { ShinyName } from "./ShinyName";

export function Banner() {
  return (
    <section
      role="banner"
      className="xs:flex-col-reverse m-auto flex max-w-screen-xl items-start justify-around 
         md:flex-row"
    >
      <div className="self-center">
        <ShinyName />
        <BannerLinks />
      </div>
      <div className="xs:min-w-full self-top mx-4 grow-[0.8] md:min-w-0 ">
        <SaxxieLeaf />
      </div>
    </section>
  );
}

function BannerLinks() {
  return (
    <div className="flex flex-col items-start gap-y-2">
      <BannerLink href="#socials">
        Community <span className="text-accent">∧</span> Social
      </BannerLink>
      {/*<BannerLink href="#projects">Projects</BannerLink> */}
      <BannerLink href="#contact">
        Contact <span className="text-accent">∨</span> Collab
      </BannerLink>
      <BannerLink href="#referral">Referrals</BannerLink>
    </div>
  );
}

type BannerLinkProps = {
  href: string;
  children: React.ReactNode;
};
function BannerLink(props: BannerLinkProps) {
  const { href, children } = props;
  return (
    <a
      href={href}
      className="transition-pl bg-text from-text to-primary bg-clip-text
        text-xl text-transparent duration-300 hover:bg-gradient-to-t sm:text-2xl md:pl-6 hover:md:pl-12"
    >
      {children}
    </a>
  );
}
