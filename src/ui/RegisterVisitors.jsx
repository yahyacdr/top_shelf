/* eslint-disable react/display-name */
import { memo, useEffect } from "react";
import { registerVisitor } from "../services/apiVisitors";
import { UAParser } from "ua-parser-js";
const RegisterVisitors = memo(() => {
  useEffect(() => {
    async function registerVisitorFunc() {
      // Get geolocation information using an external API
      const parser = new UAParser();
      const result = parser.getResult();
      const browser = result.browser.name;
      const os = getOS();
      const browserLanguage = navigator.language;
      const screenResolution = `${window.screen.width}x${window.screen.height}`;
      const region = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const referrerUrl = document.referrer;

      await registerVisitor([
        {
          browser,
          os,
          screenResolution,
          region,
          referrerUrl,
          language: browserLanguage,
        },
      ]);
    }

    registerVisitorFunc();
  }, []);

  return <div style={{ width: 0, height: 0, display: "none" }}></div>;
});

const getOS = () => {
  const { userAgent } = navigator;
  if (userAgent.includes("Win")) return "Windows";
  if (userAgent.includes("Mac")) return "MacOS";
  if (userAgent.includes("Linux")) return "Linux";
  if (userAgent.includes("Android")) return "Android";
  if (userAgent.includes("like Mac")) return "iOS";
  return "Unknown OS";
};

export default RegisterVisitors;
