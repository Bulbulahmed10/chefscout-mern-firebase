import React, { useRef } from "react";
import Banner from "../../components/shared/banner/Banner";
import { useReactToPrint } from "react-to-print";
import { GrDocumentDownload } from "react-icons/gr";

const data = [
  {
    questions:
      "Tell us the differences between uncontrolled and controlled components.",
    answer:
      "A controlled component is bound to a value, and its changes will be handled in code by using event-based callbacks. Here, the input form element is handled by the react itself rather than the DOM. In this, the mutable state is kept in the state property and will be updated only with setState() method.Controlled components have functions that govern the data passing into them on every onChange event occurs. This data is then saved to state and updated with setState() method. It makes component have better control over the form elements and data. It is similar to the traditional HTML form inputs. Here, the form data is handled by the DOM itself. It maintains their own state and will be updated when the input value changes. To write an uncontrolled component, there is no need to write an event handler for every state update, and you can use a ref to access the value of the form from the DOM.",
  },
  {
    questions: "How to validate React props using PropTypes?",
    answer:
      "React provides a built-in utility called PropTypes to validate the props passed to a component. PropTypes is a typechecking library that helps to catch bugs in the early stages of development. It enables the developer to define the expected data types and shape of the props to be passed to a component. PropTypes can be used to define required props, default values, and even custom validation functions. By using PropTypes, developers can improve the stability and maintainability of their code by ensuring that components receive the correct data type and structure of the props they expect.",
  },
  {
    questions: "Tell us the difference between nodejs and express js?",
    answer:
      "JavaScript on the server side to build scalable and high-performance web applications. Node.js uses the V8 JavaScript engine from Google and provides a non-blocking, event-driven architecture that makes it well-suited for building real-time applications.Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features for building web applications, including routing, middleware, and templates. Express.js makes it easier for developers to build web applications by providing a simple and flexible API for handling HTTP requests and responses.",
  },
  {
    questions: "What is a custom hook, and why will you create a custom hook?",
    answer:
      "A custom hook is a JavaScript function in React that allows you to reuse stateful logic across multiple components. Custom hooks allow you to extract repetitive code from components and make it more reusable.In React, hooks are functions that allow you to use state and other React features in functional components. Custom hooks are simply hooks that you create yourself.You might want to create a custom hook in React if you find yourself duplicating code across multiple components. For example, if you have several components that all need to fetch data from an API and manage the loading and error states, you can create a custom hook to handle that logic and reuse it across all of those components.",
  },
];

const Blog = () => {
  const conponentPDF = useRef();

  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",
  });
  return (
    <div ref={conponentPDF}>
      <Banner
        bannerText="Blog"
        bannerImage="https://images.unsplash.com/photo-1656497119922-068c6a5e1193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
      />
      <div
        onClick={generatePDF}
        className="flex items-center justify-center mt-8 font-mono text-xl font-semibold border border-blue-500 w-fit m-auto py-2 px-4 rounded-md cursor-pointer hover:bg-blue-200">
        <p>Download PDF</p>
        <GrDocumentDownload />
      </div>
      <div className="p-4 md:p-8 lg:p-14">
        {data &&
          data.map((singleData, index) => {
            return (
              <div key={index} className="mb-4">
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                  <div className="collapse-title text-xl font-medium">
                    {singleData.questions}
                  </div>
                  <div className="collapse-content">
                    <p>{singleData.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
