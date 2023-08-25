import React from "react";
import Layout from "../layout/Layout";
import PageBanner from "../component/PageBanner";

const Termspage = () => {
  const termsAndCondition = [
    {
      id: 1,
      q: "What Are Terms and Conditions?",
      a: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, perspiciatis, molestiae eius quod nemo unde ipsa dolorem nostrum mollitia repellat iure ut?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, perspiciatis, molestiae eius quod nemo unde ipsa dolorem nostrum mollitia repellat iure ut?",
    },
    {
      id: 2,
      q: "Does My Online Shop Need Terms and Conditions?",
      a: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, perspiciatis, molestiae eius quod nemo unde ipsa dolorem nostrum mollitia repellat iure ut? five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book.It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop",
    },
    {
      id: 3,
      q: "Does My Online Shop Need Terms and Conditions?",
      a: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, perspiciatis, molestiae eius quod nemo unde ipsa dolorem nostrum mollitia repellat iure ut?",
    },
    {
      id: 4,
      q: "What to Include in Terms and Conditions for Online Stores",
      a: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, perspiciatis, molestiae eius quod nemo unde ipsa dolorem nostrum mollitia repellat iure ut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, perspiciatis, molestiae eius quod nemo unde ipsa dolorem nostrum mollitia repellat iure ut?",
    },
  ];
  return (
    <Layout>
      <PageBanner title={"Terms & Condition"} />
      <div className="paddingClass ">
        {termsAndCondition.map((data, id) => (
          <div className="flex flex-col mt-6" key={id}>
            <p className="text-xl ">
              {data.id}. {data.q}
            </p>
            <span className="gray mt-2">{data.a}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Termspage;
