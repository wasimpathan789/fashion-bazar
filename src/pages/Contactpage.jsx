import "./Contactpage.css";
import Layout from "../layout/Layout";
import PageBanner from "../component/PageBanner";
import { BsFillTelephoneFill } from "react-icons/bs";
import GoogleMapReact from "google-map-react";

const Contactpage = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <Layout>
      <PageBanner title={"contact"} path={"contact"} />
      <div className="contactpage flex">
        <div className="contactpage-left">
          <h1>Contact Information</h1>
          <div className="contact-phone-email flex gap-4 ">
            <div className="contact-phone flex flex-col justify-center items-center px-4 py-8 w-full bg-lightblue ">
              <div className="contact-phone-icon flex justify-center items-center">
                <BsFillTelephoneFill size={28} className="primary " />
              </div>
              <h3 className="text-center mt-4 ">Phone</h3>
              <p className="text-center mt-6">+91 9999999999</p>
              <p className="text-center mt-2">+91 9999999999</p>
            </div>
            <div className="contact-phone flex flex-col justify-center items-center px-4 py-8 w-full bg-lightpink">
              <div className="contact-phone-icon flex justify-center items-center">
                <BsFillTelephoneFill size={28} className="primary " />
              </div>
              <h3 className="text-center mt-4 ">Email</h3>
              <p className="text-center mt-6">fashionbazar@gmail.com</p>
              <p className="text-center mt-2">fashion.sale@gmail.com</p>
            </div>
          </div>
          <div className="contact-address py-4">
            <div className="contact-address-top flex gap-4 w-full ">
              <div>
                <div className="contact-phone-icon flex justify-center items-center ">
                  <BsFillTelephoneFill size={28} className="primary " />
                </div>
              </div>

              <div className="ml-2">
                <h3>Address</h3>
                <p className="mt-2 victor ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, beatae.
                </p>
              </div>
            </div>
            <div className="contact-address-bottom py-6">
              <iframe
                className="mt-12 w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30119.03742906564!2d77.13454319674027!3d19.331026739800688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd032f3923a4eff%3A0x76ff1bee28c5fe21!2sBasmat%2C%20Maharashtra%20431512!5e0!3m2!1sen!2sin!4v1692813412804!5m2!1sen!2sin"
                // width="600"
                height="250"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="contactpage-right ">
          <h1 className="text-center ">Get In Touch</h1>
          <form action="">
            <div className="flex formBlock flex-col w-full">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="py-3 px-4 w-full mt-2 poppins"
              />
            </div>
            <div className="flex formBlock flex-col w-full mt-4">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="py-3 px-4 w-full mt-2 poppins "
              />
            </div>
            <div className="flex formBlock flex-col  mt-4">
              <label htmlFor="">Message</label>
              <textarea
                type="text"
                placeholder="Type Your Message"
                className="py-3 px-4 w-full mt-2 poppins"
              />
            </div>
            <div className="mt-4 ">
              <button className="w-full py-3 bg-primary poppins text-lg pointer ">
                Send Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contactpage;
