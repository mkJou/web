import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import brandsData from '@/data/brandsData'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className="align-center mx-auto max-w-3xl items-center justify-center px-4 pt-36 pb-0 text-center sm:px-6 xl:max-w-5xl xl:px-0">
        <span>Hey there! Welcome to my page.</span>
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Joalex Urdaneta
        </h1>
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Web Developer
          </span>
        </h2>
        <div>
          <p className="wrap justify-center px-40 pt-3">
            I’m a web developer specializing in building (and occasionally designing) exceptional
            digital experiences. Currently, I’m focused on building accessible, human-centered
            products.
          </p>
          {/*<p className="wrap justify-center px-40 pt-3">
            I’m a software engineer specializing in building (and occasionally designing)
            exceptional digital experiences. Currently, I’m focused on building accessible,
            human-centered products at{' '}
            <a href="https://upstatement.com/" target="_blank" rel="noreferrer">
              Upstatement
            </a>
            .
          </p>*/}
        </div>

        <div className="justfy-align-text align-center flex animate-[wiggle_1s_ease-in-out_infinite] items-center justify-center pt-40 pb-0">
          <a
            className="align-center flex transform items-center space-x-2 duration-300 hover:scale-110"
            href="#about"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>
            <div id="keep-doing">Keep doing</div>
          </a>
        </div>
      </div>
      <div className="inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="-mb-1 w-full fill-gray-100 dark:fill-gray-800"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
        </svg>
      </div>

      <section
        id="about"
        className="align-center m-auto flex h-screen items-center bg-gray-100 dark:bg-gray-800"
      >
        <div className="container mx-auto mx-auto max-w-3xl px-4 px-6 py-8 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="items-center lg:flex">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-6xl md:leading-14">
                About me
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                Self-taught Web developer, committed, passionate and motivated by his field with a
                great capacity for self-learning in whatever is necessary to develop a solution,
                combining my complementary training with my commitment to high performance and
                organized work.
              </p>

              {/*<p class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                Hi I am jane , software engineer{' '}
                <a class="font-bold text-blue-600 dark:text-blue-400" href="#">
                  @BakaTeam
                </a>{' '}
                , Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in sed non alias,
                fugiat, commodi nemo ut fugit corrupti dolorem sequi ex veniam consequuntur id,
                maiores beatae ipsa omnis aliquam?
              </p>*/}

              <div className="py-6">
                <ul className="grid grid-cols-2 items-center gap-4">
                  {brandsData.map((brand) => (
                    <li key={brand.framework} className="flex items-center gap-2">
                      <div>{brand.svg}</div>
                      <span>{brand.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 inline-flex w-full overflow-hidden rounded-lg shadow sm:mt-0 sm:w-auto">
                <a
                  href="resume.pdf"
                  className="inline-flex w-full transform items-center justify-center bg-gradient-to-r from-blue-700 to-blue-900 px-5 py-3 text-base font-medium text-white transition-colors duration-150 hover:from-blue-600 hover:to-blue-600 sm:w-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 h-6 w-6 fill-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span className="mx-2">Download resume</span>
                </a>
              </div>
              {/*<div class="-mx-2 mt-6 flex items-center">
                <a class="mx-2" href="#" aria-label="Twitter">
                  <svg
                    class="h-5 w-5 fill-current text-gray-700 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
                  </svg>
                </a>

                <a class="mx-2" href="#" aria-label="Facebook">
                  <svg
                    class="h-5 w-5 fill-current text-gray-700 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
                  </svg>
                </a>

                <a class="mx-2" href="#" aria-label="Linkden">
                  <svg
                    class="h-5 w-5 fill-current text-gray-700 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
                  </svg>
                </a>

                <a class="mx-2" href="#" aria-label="Github">
                  <svg
                    class="h-5 w-5 fill-current text-gray-700 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                  </svg>
                </a>
              </div>*/}
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center justify-center lg:justify-end">
                <div className="max-w-lg">
                  <img
                    className="h-80 w-80 flex-shrink-0 rounded-full object-cover dark:shadow-xl sm:h-[28rem] sm:w-[28rem]"
                    src="/static/images/joalex.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<div className="mx-auto max-w-3xl divide-y divide-gray-200 px-4 dark:divide-gray-700 sm:px-6 xl:max-w-5xl xl:px-0">
        <div id="latest" className="space-y-2 pt-3 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}*/}
    </>
  )
}
