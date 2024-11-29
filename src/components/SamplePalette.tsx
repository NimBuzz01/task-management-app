import React from "react";

const SamplePalette = () => {
  return (
    <div>
      <h1 className="text-h1 my-4">Task Management App</h1>
      <h1 className="text-h1 my-4">Typography</h1>
      <div>
        <h1 className="heading-h1">Heading H1 - Light</h1>
        <h2 className="heading-h2">Heading H2 - Semi Bold</h2>
        <h3 className="heading-h3">Heading H3 - Medium</h3>
        <p className="body-b2">Body Text B2 - Regular</p>
        <p className="body-b1">Body Text B1 - Medium</p>
        <span className="caption-c1">Caption C1 - Regular</span>
      </div>
      <h1 className="text-h1 my-4">Colors</h1>
      <div className="max-w-80">
        <div className="bg-custom-primary-500 text-custom-primary-50">
          Primary
        </div>
        <div className="bg-custom-secondary-500 text-custom-secondary-50">
          Secondary
        </div>
        <div className="bg-custom-tertiary-500 text-custom-tertiary-50">
          Tertiary
        </div>
        <div className="bg-custom-dark-500 text-custom-dark-50">Dark</div>
        <div className="bg-custom-status-danger-500 text-custom-status-danger-50">
          Danger
        </div>
        <div className="bg-custom-status-warning-500 text-custom-status-warning-50">
          Warning
        </div>
        <div className="bg-custom-status-success-500 text-custom-status-success-50">
          Success
        </div>
        <div className="bg-custom-status-info-500 text-custom-status-info-50">
          Info
        </div>
        <div className="bg-custom-generic-white-bg text-custom-generic-black">
          Generic
        </div>
      </div>
    </div>
  );
};

export default SamplePalette;
