import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Import icons from Lucide React

const FAQPage = () => {
  // State to manage which FAQ item is currently open within the selected topic
  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  // State to manage the currently selected topic from the left navigation
  const [selectedTopic, setSelectedTopic] = useState('General Questions'); // Default selected topic

  // Data structure for topics and their associated FAQs
  const faqData = [
    {
      topic: 'General Questions',
      faqs: [
        {
          question: 'What types of women clothing do you offer?',
          answer: 'We offer a wide range of women’s clothing including sarees, dresses, tops, skirts, and ethnic wear.',
        },
        {
          question: 'Do you have size charts available?',
          answer: 'Yes, size charts are available on each product page to help you choose the right fit.',
        },
        {
          question: 'Can I return or exchange products?',
          answer: 'Yes, we offer easy returns and exchanges within 7 days of delivery. Please check our Cancellation & Return policy for details.',
        },
      ],
    },
    {
      topic: 'Ordering & Payment',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit/debit cards, net banking, UPI, and cash on delivery (COD) for select locations.',
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Absolutely! We use secure payment gateways with SSL encryption to keep your data safe.',
        },
      ],
    },
    {
      topic: 'Shipping & Delivery',
      faqs: [
        {
          question: 'What are the delivery timelines?',
          answer: 'Delivery usually takes 4-7 business days depending on your location.',
        },
        {
          question: 'Do you offer free shipping?',
          answer: 'Yes, we offer free shipping on orders above ₹1000.',
        },
        {
          question: 'Can I track my order?',
          answer: 'Yes, you will receive a tracking link via email/SMS once your order is shipped.',
        },
      ],
    },
    {
      topic: 'Product Care',
      faqs: [
        {
          question: 'How should I wash my sarees and delicate fabrics?',
          answer: 'We recommend dry cleaning or gentle hand wash with mild detergent to maintain fabric quality.',
        },
        {
          question: 'Do your products come with care instructions?',
          answer: 'Yes, each product includes detailed care instructions on its page.',
        },
      ],
    },
  ];


  // Find the FAQs for the currently selected topic
  const currentTopicFAQs = faqData.find(data => data.topic === selectedTopic)?.faqs || [];

  // Reset openFAQIndex when the selected topic changes
  useEffect(() => {
    setOpenFAQIndex(null);
  }, [selectedTopic]);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen   p-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side: Topic Navigation */}
        <div className="w-full lg:w-1/4">
          <h2 className="text-xl font-bold mb-6 ">Topic Navigation</h2>
          <nav className="space-y-4 mb-12">
            {faqData.map((data, index) => (
              <button
                key={index}
                onClick={() => setSelectedTopic(data.topic)}
                className={`block w-full text-left py-2 px-4 rounded-md transition-colors duration-200
                  ${selectedTopic === data.topic
                    ? 'bg-green-500 text-white font-semibold'
                    : 'hover:text-white hover:bg-green-600'
                  }`}
              >
                {data.topic}
              </button>
            ))}
          </nav>

        </div>

        {/* Right Side: Common Questions (FAQs) */}
        <div className="w-full lg:w-3/4">
          <h1 className="text-4xl font-bold mb-8 ">{selectedTopic}</h1>
          <div className="space-y-4">
            {currentTopicFAQs.length > 0 ? (
              currentTopicFAQs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-6 cursor-pointer transition-all duration-300
                    ${openFAQIndex === index ? 'bg-green-300' : 'bg-green-100'}
                  `}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                    {openFAQIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-white" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                  {openFAQIndex === index && (
                    <p className="mt-4 ">{faq.answer}</p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-lg">No FAQs available for this topic yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
