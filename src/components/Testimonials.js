import React from "react";
import "../styles/testimonials.scss";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: '01',
    name: "Kobby",
    body: "Working and being an ally with Solomon has been awesome. For the past twelve years of knowing him, he has always been supporting and motivating me. He is a good team player whether in a supporting role or in a leadership role.",
    role: "Sofware engineer",
  },
  {
    id: '02',
    name: "Brady",
    body: "Solomon is a chronic leaner. He is a fantastic friend and a coworker. When I was finding it difficult to cope with work, he was willing to assist me. ",
    role: "WebApp Developer",
  },
  {
    id: '03',
    name: "Lam",
    body: "Nnyabe Solomon is a discipline and at the same time a jovial man who does not joke with his work and time. The least said about him the better. ",
    role: "Pastor",
  },
];

export function Testimonials() {
  return (
    <div className="testimonials">
    {
      testimonials.map(value=>{
        return (<TestimonialCard key={value.id} value={value}></TestimonialCard>)
      })
      
    }
  </div>
  );
}
