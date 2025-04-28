"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar() {
  const useActive = useRelume();
  return (
    <section
      id="navbar"
      className="theme-1 z-[999] flex w-full items-center bg-background-primary md:min-h-18"
    >
      <div className="container mx-auto w-full max-w-[1200px] px-4">
        <div className="flex size-full items-center justify-between">
          <div className="grid min-h-16 grid-cols-2 items-center justify-between md:min-h-18 lg:min-h-full">
            <a href="#" className="flex items-center">
              <img
                src="./assets/Logo-wide.svg"
                alt="Company logo"
              />
            </a>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center justify-self-end lg:hidden"
              onClick={useActive.toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>
          <motion.div
            variants={{
              open: { height: "var(--height-open, 100dvh)" },
              close: { height: "var(--height-closed, 0)" },
            }}
            initial="close"
            exit="close"
            animate={useActive.animateMobileMenu}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-40 lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
          >
            <nav className="lg:flex lg:items-center">
              <a
                href="#"
                className="block py-3 text-left text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base lg:first:pt-2"
              >
                Solution
              </a>
              <a
                href="#"
                className="block py-3 text-left text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base lg:first:pt-2"
              >
                Product
              </a>
              <a
                href="#"
                className="block py-3 text-left text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base lg:first:pt-2"
              >
                Customers
              </a>
              <div
                onMouseEnter={useActive.openOnDesktopDropdownMenu}
                onMouseLeave={useActive.closeOnDesktopDropdownMenu}
              >
                <button
                  className="flex w-full items-center justify-between gap-2 py-3 text-left text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
                  onClick={useActive.openOnMobileDropdownMenu}
                >
                  <span>Platform</span>
                  <AnimatePresence>
                    <motion.div
                      animate={useActive.animateDropdownMenuIcon}
                      variants={{
                        rotated: { rotate: 180 },
                        initial: { rotate: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <RxChevronDown />
                    </motion.div>
                  </AnimatePresence>
                </button>
                <AnimatePresence>
                  <motion.nav
                    animate={useActive.animateDropdownMenu}
                    initial="close"
                    exit="close"
                    variants={{
                      open: {
                        visibility: "visible",
                        opacity: "var(--opacity-open, 100%)",
                        y: 0,
                        display: "block",
                      },
                      close: {
                        visibility: "hidden",
                        opacity: "var(--opacity-close, 0)",
                        y: "var(--y-close, 0%)",
                        display: "none",
                      },
                    }}
                    transition={{ duration: 0.3 }}
                    className="z-50 bg-background-primary lg:absolute lg:w-80 lg:border lg:border-border-primary lg:p-6 lg:[--y-close:25%]"
                  >
                    <div className="grid grid-cols-1 grid-rows-[max-content] gap-y-2 py-3 md:py-3 lg:gap-y-4 lg:py-0">
                      <a
                        href="#"
                        className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2 lg:py-1"
                      >
                        <div>
                          <img
                            className="size-6"
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Icon 1"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <p className="text-md font-semibold lg:text-base">
                            Page one
                          </p>
                          <p className="hidden text-sm md:block">
                            Lorem ipsum dolor sit amet consectetur elit
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2 lg:py-1"
                      >
                        <div>
                          <img
                            className="size-6"
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Icon 2"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <p className="text-md font-semibold lg:text-base">
                            Page two
                          </p>
                          <p className="hidden text-sm md:block">
                            Lorem ipsum dolor sit amet consectetur elit
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2 lg:py-1"
                      >
                        <div>
                          <img
                            className="size-6"
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Icon 3"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <p className="text-md font-semibold lg:text-base">
                            Page three
                          </p>
                          <p className="hidden text-sm md:block">
                            Lorem ipsum dolor sit amet consectetur elit
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2 lg:py-1"
                      >
                        <div>
                          <img
                            className="size-6"
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Icon 4"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <p className="text-md font-semibold lg:text-base">
                            Page four
                          </p>
                          <p className="hidden text-sm md:block">
                            Lorem ipsum dolor sit amet consectetur elit
                          </p>
                        </div>
                      </a>
                    </div>
                  </motion.nav>
                </AnimatePresence>
              </div>
            </nav>
            <div className="mt-6 flex flex-col gap-4 lg:mt-0 lg:ml-4 lg:flex-row lg:items-center">
              <Button 
                title="Button" 
                size="sm"
                style={{ backgroundColor: 'var(--color-primary-base)' }}
              >
                Button
              </Button>
              <Button title="Button" variant="secondary" size="sm">
                Button
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
