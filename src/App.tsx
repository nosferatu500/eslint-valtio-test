import React, { useState } from "react";
import { proxy, useSnapshot } from "valtio";

interface EventsState {
  exporting: boolean;
  packing: boolean;
  saving: boolean;
  initialized: boolean;
}

const EventsStore = proxy<EventsState>({
  exporting: false,
  packing: false,
  saving: false,
  initialized: false,
});

const Loader: React.FC<{ text: string }> = () => {
  return (
    <div className="AppLoading-Container">
      {/* Some other things */}
    </div>
  );
};

export const Workspace: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { initialized, saving, packing, exporting } = useSnapshot(EventsStore);

  return (
    <>
      {(loading || !initialized) && <Loader text="Loading..." />}
      {saving && <Loader text="Saving..." />}
      {packing && <Loader text="Packing..." />}
      {exporting && <Loader text="Exporting..." />}
    </>
  );
};
