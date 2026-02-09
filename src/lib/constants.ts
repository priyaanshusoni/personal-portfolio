import { Mail, MapPin, Phone } from "lucide-react";

export const CONTACT_INFO = {
  email: {
    icon: Mail,
    label: "Email",
    value: "priyanshusoni.dev@gmail.com",
    method: "mailto:priyanshusoni.dev@gmail.com",
  },
  phone: {
    icon: Phone,
    label: "Phone",
    value: "+91 9509542525",
    method: "tel:+919509542525",
  },
  address: {
    icon: MapPin,
    label: "Address",
    value: "Jaipur, Rajasthan, India",
    method: "https://maps.app.goo.gl/1234567890",
  },
};