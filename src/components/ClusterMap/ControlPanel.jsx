import React, { PurComponents } from "react";

export default function ControlPanel() {
  return (
    <div className="control-panel">
      <h3>Create and Style Clusters</h3>
      <p>Use MapboxGL's built in functions to visualize points as clusters.</p>
      <div className="source-link">
        <a
          href="https://github.com/uber/react-map-gl/tree/5.2-release/examples/clusters"
          target="_new"
        >
          View Code
        </a>
      </div>
    </div>
  );
}
