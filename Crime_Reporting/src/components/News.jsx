import React from 'react';

const News = () => {
  const redirectToNewsPage = () => {
    window.location.href = 'https://www.hindustantimes.com/india-news/pm-narendra-modis-kuwait-visit-from-today-to-interact-with-indian-diaspora-meet-emir-details-101734742839486.html';
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        News and Blog Of Recent Crimes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div
          className="cursor-pointer rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300"
          onClick={redirectToNewsPage}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/ba35/064a/3ffedca9b6945ac4724a095111efc8f1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LxNDFJ7EU5s6VErRL1KM3Ssj1iLHqCj6BIRlYoR52Id-DQS5OMEE-54K11ZkhWlBRC2aaMIJsykIGGYcYznhx0GSsY-uodJNDtip0L6-nVKDqAhVJqIB8ADkcDJDNhpSdGyP3z-cbS-eONIvjbdvUOEQlwEJ4BGgW--KEtOvhS1CUJ7UFt9gvu3yzHrO8dtog6QcamxnXmXZCRWRc-bB8BwZiSjPRK48EvheO8hdCWz8NCJrhmDrxLRUj0WsZi0dPBnRnlfvJQHyelRh5acCwTqAWU978NuvwVS2JVBosxPQuCLuhyjKS5mCkyUghdje1W9MEQrNyYa1mnInzQDefw__" // Replace with actual image URL
            alt="CCTV footage: Thief uses child as a cover while lifting bike in Karachi"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              CCTV footage: Thief uses child as a cover while lifting bike in Karachi
            </h3>
          </div>
        </div>

        {/* Second Box */}
        <div
          className="cursor-pointer rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300"
          onClick={redirectToNewsPage}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/7213/3c22/499e1eb118e53f72b34dc45206020727?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3HI8beECHESjzATL4rrMtlDqRM5NZBVZQmBSa5Vaj7Va1BaBHvzjvq5AbKWPrRR3JYCbLrGHuKX5Lfda6TbBZJ47U2twAZiM23KuUf2vWEh3cDlpI-UXmb-~xDSCKl4tsvv~tFy6VZnB6jQm7UXvzNWSC9UMnR9NNeuG-LGhZc2HxPOW-UTXiY4BNU2~YcrdrKYYqAgUefUFCstFkwFCbyRJAHbP7h2-AkFsi3mHxscnmECY62qdtm~PMJ9~UeZhP3NzAxheTFOwAlvksxTBRcn7jwptmZ9NtjDalpjWZx3y9whh3-7sLyscAxntwrOBnw9V3PReXKNCCES5OwCjQ__" // Replace with actual image URL
            alt="Lyari gang war criminals among 25 arrested in Karachi"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Lyari gang war criminals among 25 arrested in Karachi
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
