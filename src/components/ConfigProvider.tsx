import { ConfigProvider } from "antd";

const ConfigProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#fff",
          fontFamily: "var(--space-gortesk), sans-serif",
          fontSize: 16,
        },
        components: {
          Form: {
            colorPrimary: "#fff",
            labelColor: "#fff",
          },
          Input: {
            colorPrimary: "#fff",
            colorTextPlaceholder: "#6a7282",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ConfigProviderWrapper;
