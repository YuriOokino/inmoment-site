"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Footer() {
  return (
    <footer
      id="section-footer"
      data-theme="theme-3"
      className="py-16 md:py-24 lg:py-36 bg-[var(--bg-primary)]"
    >
      <div className="container mx-auto w-full max-w-[1200px] px-4">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="rb-6 max-w-lg">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Ready to tranform your CX?
            </h1>
            <p>
            Get started with InMoment today and unlock actionable insights across your entire customer experience. Our team is ready to help you drive meaningful improvements.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8 lg:mt-0">
            <Button 
              title="Button"
              style={{ backgroundColor: 'var(--color-primary-base)' }}
            >
              Request a Demo
            </Button>
            <Button title="Button" variant="secondary">
              Sign Up
            </Button>
          </div>
        </div>
        <div className="py-12 md:py-18 lg:py-20">
          <div className="h-px w-full bg-black" />
        </div>
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Column One</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link One
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Two
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Three
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Four
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Five
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Column Two</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Six
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Seven
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Eight
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Nine
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Ten
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Column Three</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Eleven
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Twelve
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Thirteen
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Fourteen
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Fifteen
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Column Four</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Sixteen
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Seventeen
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Eighteen
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Nineteen
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Twenty
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Column Five</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Twenty One
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Twenty Two
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Twenty Three
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Twenty Four
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Twenty Five
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Column Six</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Twenty Six
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Twenty Seven
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Twenty Eight
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Twenty Nine
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Link Thirty
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="rb-6 col-span-1 flex flex-col items-start justify-between pb-6 sm:flex-row sm:items-center md:pb-8 lg:col-span-2">
          <a href="#">
            <img
              src="./assets/Logo-wide.svg"
              alt="Logo image"
              className="mb-6 inline-block sm:mb-0"
            />
          </a>
          <p className="text-sm">© 2025 InMoment. All rights reserved.</p>
        </div>
        <div className="h-px w-full bg-black" />
      </div>
    </footer>
  );
}
