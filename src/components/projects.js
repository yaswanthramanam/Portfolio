import React from "react";

function Index(props) {
  return (
    <section
      id="projects"
      class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul class="group/list">
          <li class="mb-12">
            <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div class="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    href="https://www.netcracker.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Junior Developer for Configure Price Quote
                      <span class="inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </h3>
                <div class="text-slate-500 text-sm">
                  NetCracker · Mar 23 - Present
                </div>
                <p class="mt-2 text-sm leading-normal">
                  After a great learning withb Order Entry, my company promoted
                  me to work on Cloud Applications after giving best results I
                  could give to the company at Order Entry.
                </p>
                <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Docker
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Kubernetes
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Spring Boot
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Redis
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      RabbitMQ
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Kafka
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      OpenSearch
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Cassandra
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      PostgreSQL
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      GWT
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Axon Framework
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li class="mb-12">
            <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div class="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    // href="https://spotify-profile.herokuapp.com/"
                    // target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Spotify Profile (opens in a new tab)"
                  >
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Bookstube
                      {/* <span class="inline-block">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </span> */}
                    </span>
                  </a>
                </h3>
                <div class="text-slate-500 text-sm">
                  Bookstube · Oct 22 - Apr 23
                </div>
                <p class="mt-2 text-sm leading-normal">
                  First Productive Social Media application, for book lovers.
                </p>

                <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      PHP
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      MySQL
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="mb-12">
            <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div class="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    href="https://www.netcracker.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Junior Developer for Order Entry
                      <span class="inline-block">
                        {/* Theme */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </h3>
                <div class="text-slate-500 text-sm">
                  NetCracker · Sep 22 - Jan 23
                </div>
                <p class="mt-2 text-sm leading-normal">
                  As a Newbie to the company, I was surprised with the amount of
                  exposure I got working for OrderEntry, one of the core
                  Components in Netcracker in the BSS domain.
                </p>
                <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Spring Boot
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Redis
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      RabbitMQ
                    </div>
                  </li>

                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      OpenSearch
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Cassandra
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      PostgreSQL
                    </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      GWT
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div class="mt-12">
          <a
            class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full{" "}
              <span class="inline-block">
                Résumé
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Index;
