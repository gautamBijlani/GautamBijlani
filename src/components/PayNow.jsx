import React from "react";
import "./PayNow.css";
import QR from "../assets/QR.jpeg";

const PayNow = () => {
  return (
    <main className="payNowPage">
      <section className="payNowHero">
        <p className="payNowEyebrow">GAUTAM BIJLANI PHOTOGRAPHY</p>
        <h1>Make Your Payment</h1>
        <p className="payNowSubtitle">
          Secure your booking and preserve your special moments with us.
        </p>
      </section>

      <section className="paymentSection">
        <div className="paymentCard">
          {/* QR SECTION */}
          <div className="qrSection">
            <p className="sectionLabel">SCAN & PAY</p>

            <div className="qrWrapper">
              <img src={QR} alt="Payment QR Code" />
            </div>

            <p className="scanText">
              Scan the QR code using your preferred UPI or banking app to make
              your payment.
            </p>
          </div>

          {/* BANK DETAILS */}
          <div className="bankSection">
            <p className="sectionLabel">BANK DETAILS</p>

            <h2>Gautam Bijlani</h2>

            <div className="bankDetails">
              <div className="detailRow">
                <span>Bank</span>
                <strong>Bandhan Bank</strong>
              </div>

              <div className="detailRow">
                <span>Branch</span>
                <strong>
                  Mahmurganj, Shahpuri Heights,
                  <br />
                  Rathyatra, Varanasi
                </strong>
              </div>

              <div className="detailRow">
                <span>Account No.</span>
                <strong>50180025199500</strong>
              </div>

              <div className="detailRow">
                <span>IFSC</span>
                <strong>BDBL0001723</strong>
              </div>
            </div>

            <div className="paymentNote">
              <span>NOTE</span>
              <p>
                Please share your payment screenshot with us after completing
                the transaction for confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PayNow;