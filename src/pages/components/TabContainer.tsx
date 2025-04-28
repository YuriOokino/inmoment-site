"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { UseCases } from "./UseCases";

type Trigger = {
  value: string;
  text: string;
};

type UseTabsTriggerProps = {
  defaultTabValue: string;
  triggers: Trigger[];
  interval?: number;
};

const useTabsTrigger = ({
  defaultTabValue,
  triggers,
  interval = 6000,
}: UseTabsTriggerProps) => {
  const [activeTab, setActiveTab] = useState(defaultTabValue);

  useEffect(() => {
    const currentIndex = triggers.findIndex((t) => t.value === activeTab);
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % triggers.length;
      setActiveTab(triggers[nextIndex].value);
    }, interval);

    return () => clearInterval(timer);
  }, [activeTab, triggers, interval]);

  const renderTrigger = (trigger: Trigger) => (
    <TabsTrigger
      key={trigger.value}
      value={trigger.value}
      onClick={() => setActiveTab(trigger.value)}
      className="relative w-full max-w-xs px-4 py-5 text-center text-black bg-transparent border-none data-[state=active]:bg-transparent data-[state=active]:text-black"
      >
      <span>{trigger.text}</span>
      <div className="absolute inset-x-0 top-0 h-[0.15rem] bg-black/20 z-10">
        <motion.div
          className="h-full bg-black"
          initial={{ width: "0%" }}
          animate={{ width: activeTab === trigger.value ? "100%" : "0%" }}
          transition={{
            duration: activeTab === trigger.value ? 1.5 : 0.3,
            ...(activeTab === trigger.value
              ? { type: "spring", stiffness: 25, damping: 30 }
              : { ease: "easeInOut" }),
          }}
        />
      </div>
    </TabsTrigger>
  );

  return {
    activeTab,
    renderTrigger,
    setActiveTab,
  };
};

export function TabContainer() {
  const triggers = [
    { value: "tab-one", text: "Retail" },
    { value: "tab-two", text: "Financial" },
    { value: "tab-three", text: "Hospitality" },
    { value: "tab-four", text: "Healthcare" },
  ];

  const tabsTriggerState = useTabsTrigger({
    defaultTabValue: "tab-one",
    triggers,
    interval: 6000,
  });

  // Define featureSections for each tab
  const featureSectionsByTab = {
    "tab-one": [
      {
        heading: "+20% customer retention",
        description: "Driven by early churn detection and automated outreach powered by predictive feedback insights.",
      },
      {
        heading: "Real-time service routing",
        description: "Urgent cases were auto-tagged and escalated instantly to frontline teams using AI-prioritized workflows.",
      },
      {
        heading: "SKU-level sentiment analysis",
        description: "Identified product-level issues affecting conversion, allowing teams to adjust copy and promotions quickly.",
      },
    ],
    "tab-two": [
      {
        heading: "-35% time-to-resolution",
        description: "Achieved through predictive prioritization and smart routing across branches and service tiers.",
      },
      {
        heading: "Risk sentiment detection",
        description: "InMoment flagged regulatory risk and customer frustration using context-aware AI for faster escalation.",
      },
      {
        heading: "Advisor performance insights",
        description: "Aggregated unstructured feedback to uncover coaching moments and improve client experience at scale.",
      },
    ],
    "tab-three": [
      {
        heading: "+2x feedback volume",
        description: "Voice and chat-based input doubled guest response rates versus traditional post-stay surveys.",
      },
      {
        heading: "Emotion detection in real time",
        description: "InMoment surfaced critical dissatisfaction masked by polite language using nuanced tone modeling.",
      },
      {
        heading: "Location-specific alerts",
        description: "Feedback automatically linked to local operations helped hotel managers act fast on service disruptions.",
      },
    ],
    "tab-four": [
      {
        heading: "+60% improvement in CSAT",
        description: "Driven by AI-powered follow-up automation and predictive outreach to high-risk patients.",
      },
      {
        heading: "Care team performance mapping",
        description: "Aggregated patient feedback helped organizations identify strengths and pain points in bedside care.",
      },
      {
        heading: "Intelligent triage workflows",
        description: "InMoment routed urgent concerns directly to care teams, reducing delays and improving experience in critical touchpoints.",
      },
    ],
  };

  return (
    <section id="tabs-container" className="relative mb-10 px-40 bg-white">
      <Tabs value={tabsTriggerState.activeTab} className="flex flex-col gap-12">
        <div className="w-full">
          {triggers.map((trigger) => (
            <TabsContent key={trigger.value} value={trigger.value} className="w-full">
              <motion.div
                initial={{ y: "20%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-20%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <UseCases featureSections={featureSectionsByTab[trigger.value as keyof typeof featureSectionsByTab]} />
              </motion.div>
            </TabsContent>
          ))}
        </div>

        <TabsList className="flex w-full justify-between gap-4">
          {triggers.map(tabsTriggerState.renderTrigger)}
        </TabsList>
      </Tabs>
    </section>
  );
}
