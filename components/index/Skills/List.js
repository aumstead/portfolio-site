function List() {
  return (
    <div style={{ marginTop: "1.5rem" }}>
      <h6
        style={{
          fontSize: "1.8rem",
          fontWeight: "500",
          fontStyle: "italic",
          color: "#FCA417",
        }}
      >
        Carter Logistics
      </h6>
      <p style={{ fontSize: "1.8rem", marginTop: ".5rem" }}>
        I work on a greenfield application that will be used to invoice
        customers. Carter transports freight for companies such as Honda,
        Toyota, etc. and the new billing app takes truck, freight, and route
        data along with customer rates and invoice settings to automate the
        billing process.
      </p>
      <p style={{ fontSize: "1.8rem", marginTop: ".5rem" }}>
        I am essentially a solo dev on this app so I wear a number of hats. The
        one I'd highlight is application architecture. This app has the most
        processing and complex logic of anything I've worked on before and
        performance could've easily gotten out of hand. In fact, the heaviest
        page started taking around 8-20 seconds to load. I got that down to well
        under 1 second, with a typical loading time of 300-500ms.
      </p>
      <p style={{ fontSize: "1.8rem", marginTop: ".5rem" }}>
        While that optimization was mostly one of EF queries, design choices
        also played a large role as some processing is offloaded to a background
        task using Hangfire. But where the architecture shines most is in the
        ease at which I'm able to add and update features. Development is
        largely painless and even enjoyable.
      </p>
      <h6
        style={{
          fontSize: "1.8rem",
          fontWeight: "500",
          fontStyle: "italic",
          marginTop: "1.5rem",
          color: "#FC3A4D",
        }}
      >
        HealthStream
      </h6>
      <p style={{ fontSize: "1.8rem", marginTop: ".5rem" }}>
        HealthStream is a mature software company with a well-carved out space
        in the healthcare education sector. About half the hospitals in the US
        use them to train and credential staff.
      </p>
      <p style={{ fontSize: "1.8rem", marginTop: ".5rem" }}>
        I worked on the legacy money-maker and a team that was responsible for a
        few key pages and features of the app. I worked on the full planning and
        release of a new credential for nurses which resulted in about $800,000
        in revenue in its first quarter.
      </p>
      <p style={{ fontSize: "1.8rem", marginTop: ".5rem" }}>
        Looking back, one of my largest takeaways from the experience at
        HealthStream was seeing what a mature software development lifecycle
        looks like. Deploying code for millions of users at HealthStream is
        quite different from deploying the line-of-business applications I've
        worked on at other jobs.
      </p>
      <h6
        style={{
          fontSize: "1.8rem",
          fontWeight: "500",
          fontStyle: "italic",
          marginTop: "1.5rem",
          color: "#12B0FF",
        }}
      >
        Indiana Department of Transportation
      </h6>
      <p style={{ fontSize: "1.8rem", marginTop: ".5rem" }}>
        INDOT was a great start to my career as a professional developer. I was
        finally writing production level code for an app used by government
        employees and the general public. It was very exciting and I felt very
        accomplished by being given the opportunity to work there.
      </p>
    </div>
  );
}

export default List;
