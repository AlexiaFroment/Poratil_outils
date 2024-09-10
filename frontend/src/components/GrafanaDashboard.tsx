type GrafanaDashboardProps = {
  dashboardURL: string;
};

export const GrafanaDashboard: React.FC<GrafanaDashboardProps> = ({
  dashboardURL,
}) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <p>pomme</p>
      <iframe
        src={dashboardURL}
        width='100%'
        height='600px'
        frameBorder='0'
        title='Grafana Dashboard'
      />
    </div>
  );
};
