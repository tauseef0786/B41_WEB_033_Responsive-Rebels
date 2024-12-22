import React from "react";
import Banner from "../Banner";
let arr = [
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80",
  'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
];

function AboutUs() {
  return (
    <>
    <Banner/>
    <div className="min-h-screen bg-white">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What We Do?
              </h2>
              <p className="text-gray-600">
                We are dedicated to creating safer communities through
                innovative technology and collaborative engagement. Our platform
                provides comprehensive solutions for community safety
                monitoring, reporting, and response coordination.
              </p>
            </div>
            <div className="relative h-64 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80"
                alt="Team working on computers"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Register Your Area",
                description: "Sign up and create your community profile",
              },
              {
                title: "Set Up Monitoring",
                description: "Configure your safety monitoring preferences",
              },
              {
                title: "Community Connection",
                description: "Connect with neighbors and local authorities",
              },
              {
                title: "Stay Safe Together",
                description:
                  "Receive alerts and participate in community safety",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Connect With A Safe Community
            </h2>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80"
              alt="Community members"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Safety Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Enhancing Community Safety Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
                alt="Safety monitoring dashboard"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Real-time Monitoring
                  </h3>
                  <p className="text-gray-600">
                    24/7 surveillance and alert system
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Instant Notifications
                  </h3>
                  <p className="text-gray-600">
                    Immediate alerts for community members
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Community Reporting</h3>
                  <p className="text-gray-600">
                    Easy incident reporting and tracking
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Public and Private Links for Case Sharing:</h3>
                  <p className="text-gray-600">
                  Allow users to generate links for sharing case details publicly or privately with authorized individuals.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Community Crime Statistics</h3>
                  <p className="text-gray-600">
                  Provide visualizations of local crime statistics, including maps, charts, and trends over time.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Anonymous Reporting Option</h3>
                  <p className="text-gray-600">
                  Users can report crimes anonymously to encourage more submissions without fear of retaliation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News and Blog Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            News and Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {arr.map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={item}
                  alt={`Blog post ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Latest Community Safety Updates
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Stay informed about the latest developments in community
                    safety...
                  </p>
                  <a
                    href="#"
                    className="text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default AboutUs;
