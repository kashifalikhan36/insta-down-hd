'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What content can I download?',
    answer: 'You can download videos, photos, reels, IGTV videos, stories, and carousel posts from public Instagram accounts.',
  },
  {
    question: 'Is this service free?',
    answer: 'Yes, our service is completely free to use with no hidden charges.',
  },
  {
    question: 'Do I need an Instagram account?',
    answer: 'No, you don\'t need an Instagram account to use our service.',
  },
  {
    question: 'What devices are supported?',
    answer: 'Our service works on all devices including smartphones, tablets, and computers.',
  },
  {
    question: 'Is there a download limit?',
    answer: 'There are no strict limits, but we recommend reasonable usage to ensure service availability for everyone.',
  },
];

export default function FAQSection() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}