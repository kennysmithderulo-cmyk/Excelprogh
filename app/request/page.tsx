"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Mail, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

const supabase = createClient();

export default function RequestPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Save to Supabase
    const { error: dbError } = await supabase.from("client_requests").insert([
      {
        business_name: formData.businessName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        budget: formData.budget,
        details: formData.details,
        status: "New",
      },
    ]);

    if (dbError) {
      setStatus("error");
      return;
    }

    // Send email notification (non-blocking)
    try {
      await fetch("/api/notify-new-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_name: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          details: formData.details,
        }),
      });
    } catch (err) {
      console.error("Email notification failed:", err);
      // Don't fail the whole request if email fails
    }

    setStatus("success");
    setFormData({
      businessName: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      details: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Form */}
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Request a Service</h1>
          <p className="text-gray-600 mb-8">
            Tell us about your project. We’ll review and send you a quote.
          </p>

          {status === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
              Thank you! Your request has been sent. We’ll contact you soon.
            </div>
          )}

          {status === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
              Something went wrong. Please try again or contact us directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 border border-blue-100 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business name
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your business or organization"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="+233 XX XXX XXXX"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select a service</option>
                <option>E-commerce & Product Websites</option>
                <option>Inventory, Sales & Invoicing</option>
                <option>Client Records & Appointments</option>
                <option>Reports & Business Dashboards</option>
                <option>Data Cleaning & Preparation</option>
                <option>Virtual Assistant & Customer Support</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Budget (optional)
              </label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="e.g. GHS 800–1,200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project details
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Describe what you need, any deadlines, and special requirements."
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Send Request"}
            </button>
          </form>

          {/* Direct contact */}
          <div className="mt-8 bg-white rounded-2xl p-6 border border-blue-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Or contact us directly
            </h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:excelprogh@gmail.com" className="text-blue-600 hover:underline">
                    excelprogh@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+233556699262" className="text-blue-600 hover:underline">
                    +233 55 669 9262
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">WhatsApp</p>
                  <a
                    href="https://wa.me/233556699262"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
      }
