import React from 'react';
import PageHeader from '../components/PageHeader';
import PrinterCard from '../components/PrinterCard';
import cr30 from '../images/cr30.jpg';
import kossel from '../images/kossel.jpg';
import kobra from '../images/kobra.jpg';
const Printers = () => {
  const fleet = [
    {
      id: 1,
      model: "Creality CR-30",
      status: "OPERATIONAL",
      image: cr30,
      specs: [
        "Build Vol: 200 x 170 x Ꝏ mm",
        "Nozzle: 0.4mm Stainless Steel",
        "Bed: Textured Conveyor Belt",
        "Board: Creality V4.2.10.",
        "FW: Marlin 2.0"
      ],
      logs: [
        "Rebuilt build plate conveyor belt to fix leveling issue",
        "Reseated hotend housing to fix adhesion issues",
        "Replaced Thermistor for more accurate temp readings",
        "Monthly belt tensioning & lubrication",
        "Calibrated E-steps for PETG"
      ]
    },
    {
      id: 2,
      model: "ANYCUBIC Kossel Delta",
      status: "MAINTENANCE_REQUIRED",
      image: kossel,
      specs: [
        "Build Vol: 230x200mm",
        "Nozzle: 0.4mm Hardened Steel",
        "Bed: Glass Plate",
        "Board: Melzi 2.0",
        "FW: Marlin v3.11.0"
      ],
      logs: [
        "Routine nozzle replacement (Abrasive filaments)",
        "Firmware flashed to v3.11.0",
        "Replaced both motherboards after failure",
        "Replaced thermistor and heated bed"
      ]
    },
    {
      id: 3,
      model: "ANYCUBIC Kobra 2 Max",
      status: "OPERATIONAL",
      image: kobra,
      specs: [
        "Build Vol: 420x420x500mm",
        "Nozzle: 0.4mm Brass",
        "Bed: Magnetic PEI Sheet",
        "Board: Melzi 2.0",
        "FW: Marlin v2.9.0"
      ],
      logs: [
        "Routine nozzle replacement (Abrasive filaments)",
        "Firmware flashed to v2.9.0",
        "Replaced both motherboards after failure",
        "Replaced thermistor and heated bed"
      ]
    }
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <PageHeader title="3D PRINTER FLEET"/>
      <p>These are some of the machines in the fleet of printers that I maintain.</p>
      <div className="fleet-grid">
        {fleet.map((printer) => (
          <PrinterCard 
            key={printer.id}
            model={printer.model}
            status={printer.status}
            specs={printer.specs}
            image={printer.image}
            logs={printer.logs}
          />
        ))}
      </div>
    </div>
  );
};

export default Printers;