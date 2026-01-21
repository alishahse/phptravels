const HotelPolicy = () => {
  return (
    <div className="bg-white rounded-2xl p-6 space-y-8">
      {/* HOTEL POLICY */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Hotel Policy</h2>

        {/* Check-in / Check-out */}
        <div className="flex flex-col sm:flex-row items-center gap-10 pb-4 border-b mb-4">
          <p className="font-semibold text-gray-700">Check-in and Check-out</p>
          <p>
            From <span className="font-semibold">02:00:00</span> To{" "}
            <span className="font-semibold">02:00:00</span>
          </p>
        </div>

        {/* Age Requirement */}
        <div className="flex flex-row items-center gap-10 pb-4 border-b mb-4">
          <p className="font-semibold text-black">Age Requirements</p>
          <p className="mx-5">
            The guest checking in must be at least{" "}
            <span className="font-semibold">18 years old</span>.
          </p>
        </div>

        {/* Policy Text */}
        <div className="grid grid-cols-12 pb-4 border-b border-gray-200 mb-4">
          <div className="col-span-4"></div>
          <p className="col-span-12 text-md  text-black mx-47">
            Please note that the property is implementing the online payment
            transaction for the advance purchase reservations. In this process,
            the property will send a link to the email of the card holder and
            this allows them to purchase the amount directly from their credit
            card. This process is to avoid credit card purchase error from our
            side and to protect the guests from credit card fraud. Please note
            that as per UAE law, guests are required to present a valid UAE ID
            or valid passport upon check-in. Please note that due to payment
            procedures, debit cards cannot be used at the time of booking. You
            must use a valid credit card at the time of booking. Debit cards can
            only be used upon arrival at the property. Upon check in, guests are
            kindly requested to present the same credit card used to make the
            reservation. If the same credit card is not available, the deposit
            amount will be refunded back to the card, and a different
            card/payment method will be required. The above is applicable for
            non-refundable bookings only. Breakfast for Children from 6 years
            old until 11 is chargeable at 60 AED. In accordance with government
            guidelines to minimise transmission of the Coronavirus (COVID-19),
            this property may request additional documentation from guests to
            validate identity, travel itinerary and other relevant information,
            during dates where such guidelines exist. In response to Coronavirus
            (COVID-19), additional safety and sanitation measures are in effect
            at this property. Food & beverage services at this property may be
            limited or unavailable due to Coronavirus (COVID-19). Due to
            Coronavirus (COVID-19), this property is taking steps to help
            protect the safety of guests and staff. Certain services and
            amenities may be reduced or unavailable as a result. Due to
            Coronavirus (COVID-19), this property has reduced reception and
            service operating hours. Spa and gym facilities at this property are
            unavailable due to Coronavirus (COVID-19). Guests are required to
            show a photo identification and credit card upon check-in. Please
            note that all Special Requests are subject to availability and
            additional charges may apply.
          </p>
        </div>
      </div>{" "}

      {/* CANCELLATION */}
      <div>
        <h2 className="text-xl font-bold">Cancellation</h2>
        <p className="col-span-12 text-md  text-black mx-47">
            In response to Coronavirus
            (COVID-19), additional safety and sanitation measures are in effect
            at this property. Food & beverage services at this property may be
            limited or unavailable due to Coronavirus (COVID-19). Due to
            Coronavirus (COVID-19), this property is taking steps to help
            protect the safety of guests and staff. Certain services and
            amenities may be reduced or unavailable as a result. Due to
            Coronavirus (COVID-19), this property has reduced reception and
            service operating hours. Spa and gym facilities at this property are
            unavailable due to Coronavirus (COVID-19). Guests are required to
            show a photo identification and credit card upon check-in. Please
            note that all Special Requests are subject to availability and
            additional charges may apply.
        </p>
      </div>
    </div>
  );
};

export default HotelPolicy;
