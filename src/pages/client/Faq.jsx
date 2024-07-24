import React from 'react';

const Faq = () => {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200">

      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden md:block">
          <span>Get connected with us:</span>
        </div>
        <div className="flex justify-center items-center">
          <a
            href="#!"
            className="mr-6 text-neutral-600 dark:text-neutral-200"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          {/* Add aria-labels and aria-hidden for other social media icons similarly */}
          {/* ... */}
        </div>
      </div>

      <div className="mx-6 pt-8 pb-4 text-center">
        <div className="mb-6">
          <h5 className="mb-2 font-bold uppercase">Explore Our World</h5>
          <p className="mb-4">
            Embark on an adventure of a lifetime and uncover hidden
            wonders. Your journey begins now!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
          {/* Adventure Section */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
              Adventures
            </h5>
            <ul className="mb-0 list-none">
              {/* Adventure Links */}
            </ul>
          </div>

          {/* Challenges Section */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
              Challenges
            </h5>
            <ul className="mb-0 list-none">
              {/* Challenge Links */}
            </ul>
          </div>

          {/* Get Started Section */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
              Get Started
            </h5>
            <ul className="mb-0 list-none">
              {/* Get Started Links */}
            </ul>
          </div>
        </div>

        <div className="relative mb-7">
          <form action="">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 mb-6">
              <div className="md:ml-auto">
                <p className="font-bold">Sign up for our newsletter</p>
              </div>

              <div className="md:mr-auto">
                <label htmlFor="inputSignUp" className="sr-only">
                  Your email address
                </label>
                <input
                  type="email"
                  id="inputSignUp"
                  placeholder="Your address"
                  className="w-full block rounded-lg border dark:border-none dark:bg-neutral-700 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div className="md:mr-auto">
                <button
                  type="submit"
                  className="inline-block rounded bg-indigo-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-indigo-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-indigo-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700 flex justify-center items-center">
        <span>© 2023 Copyright: </span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tw-elements.com/"
        >
          Tailwind Elements
        </a>
      </div>

    </footer>
  );
};

export default Faq;
