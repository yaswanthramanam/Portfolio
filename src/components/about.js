import React from "react";

function Index(props) {
  return (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
        {/*  */}
      </div>
      <div>
        <p className="mb-4">
          I embarked on my journey as a{" "}
          <span class="text-white font-semibold">Java Developer</span>, honing
          my skills in{" "}
          <span class="text-white font-semibold">web development </span>
          for over four years. Additionally, I delved into{" "}
          <span class="text-white font-semibold">.NET </span> web development
          for five months, broadening my expertise. From monolithic applications
          to <span class="text-white font-semibold">Cloud Microservices </span>,
          I've adapted, mastering technologies like{" "}
          <span class="text-white font-semibold">Docker </span>
          and <span class="text-white font-semibold">Kubernetes</span>. Startups
          like <span class="text-white font-semibold">Keka HR </span>
          offered invaluable insights, fostering my passion for dynamic
          environments.
        </p>
        <p className="mb-4">
          Transitioning from a{" "}
          <span class="text-white font-semibold">Junior Java Developer </span>
          to a proficient{" "}
          <span class="text-white font-semibold">
            Full Stack .NET Developer
          </span>
          , I excel in crafting{" "}
          <span class="text-white font-semibold">Cloud Applications</span>.
          Leveraging frameworks like{" "}
          <span class="text-white font-semibold">Angular </span>
          and <span class="text-white font-semibold">.NET</span>, I've delivered
          notable projects like the{" "}
          <span class="text-white font-semibold"> Configure Price Quote </span>{" "}
          and
          <span class="text-white font-semibold"> Order Enrty </span>
          for <span class="text-white font-semibold">Netcracker</span>. This
          journey signifies my evolution as a versatile technologist, adept at
          tackling challenges across diverse domains.
        </p>
        <p>
          I find solace in diverse pursuits. As the former founder of{" "}
          <span class="text-white font-semibold">Bookstube</span>, a platform
          for bibliophiles, first ever productive social media application.
          Beyond coding, I enjoy reading philosophical literature which makes me
          a better leader.
        </p>
      </div>
    </section>
  );
}

export default Index;
