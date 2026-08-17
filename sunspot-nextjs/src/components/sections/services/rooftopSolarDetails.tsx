import ServiceDetailsVideoPopup from "./serviceDetailsVideoPopup";

const RooftopSolarDetails = () => {
  return (
    <>
      <div className="details-image">
        <img src="/img/service/rooftop-solar.jpg" alt="Rooftop Solar System" />
      </div>
      <div className="details-content">
        <h2>Why Rooftop Solar Is Transforming Indian Homes</h2>
        <p className="mt-3">
          India receives over 300 sunny days a year in most regions — making
          rooftop solar one of the smartest investments a homeowner can make.
          With electricity tariffs rising 5–8% annually and the central
          government offering subsidies up to ₹78,000 under PM Surya Ghar, the
          economics have never been stronger. Solar Vipani connects you with
          verified installers across 500+ cities so you can compare quotes and
          go solar with confidence.
        </p>

        <h3>What Is Rooftop Solar?</h3>
        <p>
          A rooftop solar system converts sunlight into electricity using
          photovoltaic (PV) panels mounted on your roof. The panels generate DC
          electricity, which a solar inverter converts to AC power for your home
          appliances.
        </p>
        <p>
          A typical residential system in India ranges from 1kW to 10kW. A 3kW
          system — the most popular size for Indian households — generates
          roughly 12–15 units (kWh) per day, enough to power a 2–3 BHK home with
          standard appliances.
        </p>
        <p>
          There are three main system types: <strong>on-grid</strong> (connected
          to DISCOM, earns net metering credits), <strong>off-grid</strong>{" "}
          (fully independent with battery storage), and <strong>hybrid</strong>{" "}
          (grid-connected with battery backup). Most Indian homeowners choose
          on-grid systems because they qualify for government subsidies and net
          metering benefits.
        </p>

        <h3>Rooftop Solar Cost in India</h3>
        <p>
          The cost of a rooftop solar system in India ranges from ₹60,000 to
          ₹6,00,000+ depending on system size, panel type, and inverter quality.
          After central government subsidies, a 3kW system typically costs
          ₹1,15,000–₹1,40,000 out of pocket.
        </p>
        <p>
          Key cost factors include panel technology (mono vs poly), inverter
          type, mounting structure, wiring, and installation labour. Prices have
          dropped over 80% in the last decade, making solar more affordable than
          ever.
        </p>

        <div className="details-video-items">
          <ServiceDetailsVideoPopup />
          <div className="content">
            <h4>Benefits With Our Service</h4>
            <p>Switch to solar and enjoy these benefits:</p>
            <ul className="list">
              <li>
                <i className="fa-regular fa-circle-check" /> Reduce electricity
                bills by 80-90%
              </li>
              <li>
                <i className="fa-regular fa-circle-check" /> Government subsidy
                up to ₹78,000
              </li>
              <li>
                <i className="fa-regular fa-circle-check" /> 25-year panel
                performance warranty
              </li>
              <li>
                <i className="fa-regular fa-circle-check" /> Earn credits
                through net metering
              </li>
              <li>
                <i className="fa-regular fa-circle-check" /> Environmentally
                friendly energy
              </li>
            </ul>
          </div>
        </div>

        <h3>How Rooftop Solar Works</h3>
        <p>
          Solar panels use the photovoltaic effect to convert sunlight into DC
          electricity. An inverter converts this to AC power, which flows to
          your switchboard and powers your appliances. Any surplus feeds back to
          the grid through net metering, spinning your meter backwards and
          earning you credits on your electricity bill.
        </p>
        <p>
          Modern systems require minimal maintenance — occasional panel cleaning
          and an annual inverter check. Most panels carry a 25-year performance
          warranty.
        </p>

        <h3>Types of Rooftop Solar Systems</h3>
        <p>
          Choosing the right system type is one of the most important decisions.
          Here is how they compare:
        </p>

        <div className="table-responsive mt-3 mb-4">
          <table className="table table-bordered">
            <thead>
              <tr style={{ backgroundColor: "#f8f9fa" }}>
                <th>Feature</th>
                <th>On-Grid</th>
                <th>Off-Grid</th>
                <th>Hybrid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grid connection</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Battery storage</td>
                <td>No</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Net metering</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Subsidy eligible</td>
                <td>Yes</td>
                <td>No</td>
                <td>Partial</td>
              </tr>
              <tr>
                <td>Best for</td>
                <td>Most homes</td>
                <td>Remote areas</td>
                <td>Backup needs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          For most urban and semi-urban homes, an on-grid system offers the best
          value. If you face frequent power cuts, a hybrid system gives you grid
          savings plus battery backup.
        </p>

        <h3>Rooftop Solar by System Size</h3>
        <div className="table-responsive mt-3 mb-4">
          <table className="table table-bordered">
            <thead>
              <tr style={{ backgroundColor: "#f8f9fa" }}>
                <th>System Size</th>
                <th>Daily Output</th>
                <th>Roof Space</th>
                <th>Best For</th>
                <th>Price Range (before subsidy)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1kW</td>
                <td>4–5 units</td>
                <td>~100 sq ft</td>
                <td>1 BHK, low usage</td>
                <td>₹60,000–₹80,000</td>
              </tr>
              <tr>
                <td>2kW</td>
                <td>8–10 units</td>
                <td>~200 sq ft</td>
                <td>2 BHK, moderate usage</td>
                <td>₹1,10,000–₹1,40,000</td>
              </tr>
              <tr>
                <td>3kW</td>
                <td>12–15 units</td>
                <td>~300 sq ft</td>
                <td>2–3 BHK, popular choice</td>
                <td>₹1,50,000–₹1,90,000</td>
              </tr>
              <tr>
                <td>5kW</td>
                <td>20–25 units</td>
                <td>~500 sq ft</td>
                <td>Large homes, high AC usage</td>
                <td>₹2,50,000–₹3,20,000</td>
              </tr>
              <tr>
                <td>10kW</td>
                <td>40–50 units</td>
                <td>~1000 sq ft</td>
                <td>Villas, small businesses</td>
                <td>₹5,00,000–₹6,50,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Solar Inverters for Rooftop Systems</h3>
        <p>
          The inverter is the brain of your solar system — it converts DC power
          from panels into AC power for your home. Choosing the right inverter
          type matters as much as choosing the right panels.
        </p>
        <ul className="list mb-3">
          <li>
            <i className="fa-regular fa-circle-check" />{" "}
            <strong>On-grid inverters</strong> — feed excess power to the grid,
            most affordable option
          </li>
          <li>
            <i className="fa-regular fa-circle-check" />{" "}
            <strong>Off-grid inverters</strong> — work with batteries for
            complete grid independence
          </li>
          <li>
            <i className="fa-regular fa-circle-check" />{" "}
            <strong>Hybrid inverters</strong> — combine grid-tie and battery
            functionality
          </li>
        </ul>

        <h3>Rooftop Solar for Apartments</h3>
        <p>
          Installing solar in apartments comes with unique challenges — shared
          rooftop space, housing society approvals, and metering arrangements.
          However, many Indian housing societies are now adopting solar for
          common areas and individual flats.
        </p>
        <p>
          Under PM Surya Ghar, individual flat owners in apartments can apply
          for subsidy on their share of a rooftop system. The key is getting a
          resolution passed by the housing society and coordinating with your
          DISCOM for group net metering.
        </p>

        <div className="image-area mt-4">
          <div className="row g-4">
            <div className="col-lg-6 col-md-6">
              <div className="thumb">
                <img src="/img/service/solar-panels.jpg" alt="Solar Panels" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="thumb">
                <img
                  src="/img/service/solar-installation.jpg"
                  alt="Solar Installation"
                />
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-4">Our Installer Network</h3>
        <p>
          Solar Vipani maintains a verified network of solar installers across
          India. Every installer on our platform is vetted for licensing,
          insurance, and installation quality.
        </p>
        <ul className="list mb-3">
          <li>
            <i className="fa-regular fa-circle-check" /> Verified installers
            across 500+ districts
          </li>
          <li>
            <i className="fa-regular fa-circle-check" /> Coverage in 28 states
            and 8 union territories
          </li>
          <li>
            <i className="fa-regular fa-circle-check" /> Average system size:
            3.2kW for residential installations
          </li>
          <li>
            <i className="fa-regular fa-circle-check" /> All installers carry
            valid MNRE channel partner certification
          </li>
        </ul>
        <p>
          Fill one form and receive 2–3 competitive quotes from installers in
          your city — free, with no obligation.
        </p>

        <div className="alert alert-success mt-4">
          <strong>Get free solar quotes →</strong>
        </div>
      </div>
    </>
  );
};

export default RooftopSolarDetails;
