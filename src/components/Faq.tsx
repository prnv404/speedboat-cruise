'use client';

import { useState } from 'react';

const faqData = [
    {
        question: "How do I book, and what is the cancellation policy?",
        answer: (
            <div className="space-y-4">
                <p><strong>Booking is easy!</strong> You can check availability and book directly through our website form or WhatsApp.</p>
                <div>
                    <p className="font-semibold text-emerald-600 mb-1">Cancellation:</p>
                    <p>We understand plans change. You get a <strong>100% Full Refund</strong> if you cancel at least 24 hours before your trip.</p>
                </div>
                <div>
                    <p className="font-semibold text-emerald-600 mb-1">In our side:</p>
                    <p> The rare case we have to cancel due to bad weather or safety reasons, you will receive an immediate full refund.</p>
                </div>
            </div>
        )
    },
    {
        question: "What is included in the ride?",
        answer: (
            <div className="space-y-4">
                <p>Our packages are all-inclusive with no hidden charges. You get:</p>
                <ul className="space-y-2">
                    {[
                        "Private 7-Seater Speed Boat (Just for your group).",
                        "Certified Captain & Life Jackets for everyone.",
                        "Guided Tour with insights on local culture and nature.",
                        "Eco-friendly engines that protect the backwaters."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-500 mt-1">✅</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    },
    {
        question: "What is the best time for a Speed Boat ride?",
        answer: (
            <div className="space-y-4">
                <p>For the most magical experience, we recommend:</p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <span className="text-2xl">🌅</span>
                        <div>
                            <span className="block font-bold text-gray-900">Sunrise (6:30 AM)</span>
                            <span className="text-sm text-gray-600">Best for calm waters, birdwatching, and pure silence.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <span className="text-2xl">🌇</span>
                        <div>
                            <span className="block font-bold text-gray-900">Sunset (5:00 PM)</span>
                            <span className="text-sm text-gray-600">Best for golden views and a cooler breeze.</span>
                        </div>
                    </li>
                </ul>
                <p className="text-xs text-gray-500 italic mt-2">Note: We operate daily from 6:00 AM to 6:30 PM.</p>
            </div>
        )
    },
    {
        question: "Is the ride safe for kids and seniors?",
        answer: (
            <div className="space-y-2">
                <p><strong>Absolutely.</strong> We are rated as a Family-Friendly service.</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 marker:text-emerald-500">
                    <li>Our boats are stable and comfortable for all ages.</li>
                    <li>We have specific Life Jackets for Kids.</li>
                    <li>Our captains maintain a safe speed for families and the elderly.</li>
                </ul>
            </div>
        )
    },
    {
        question: "Do you have any tips for a better experience?",
        answer: (
            <p>Yes! Since the water reflects sunlight, we highly recommend bringing <strong>Sunglasses</strong> for a comfortable view.</p>
        )
    }
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase font-bold mb-3 block">
                        Common Queries
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full" />
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`group rounded-2xl border transition-all duration-300 ${openIndex === index
                                    ? 'bg-emerald-50 border-emerald-500/50 shadow-md'
                                    : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                                aria-expanded={openIndex === index}
                            >
                                <span className={`text-base sm:text-lg font-medium transition-colors ${openIndex === index ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                                    }`}>
                                    {item.question}
                                </span>
                                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${openIndex === index
                                        ? 'bg-emerald-500 border-emerald-500 text-white rotate-180'
                                        : 'border-gray-300 text-gray-500 group-hover:border-gray-400 group-hover:text-gray-700'
                                    }`}>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqData.map(item => ({
                            "@type": "Question",
                            "name": item.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": typeof item.answer === 'string' ? item.answer : "Check our website for details." // Simplified for object content
                            }
                        }))
                    })
                }}
            />
        </section>
    );
}
