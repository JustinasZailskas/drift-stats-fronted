import { useState } from "react";
import EventCard from "../components/EventCard";
import styles from "../styles/EventCalendar.module.css";

interface Event {
  id: number;
  date: string;
  city: string;
  address: string;
  category: "street" | "semi pro" | "pro";
}

const events: Event[] = [
  {
    id: 1,
    date: "2025-03-10",
    city: "Vilnius",
    address: "Gedimino pr. 1",
    category: "street",
  },
  {
    id: 2,
    date: "2025-04-15",
    city: "Kaunas",
    address: "Laisvės al. 10",
    category: "semi pro",
  },
  {
    id: 3,
    date: "2025-05-20",
    city: "Klaipėda",
    address: "Taikos pr. 5",
    category: "pro",
  },
  {
    id: 4,
    date: "2025-06-12",
    city: "Šiauliai",
    address: "Tilžės g. 7",
    category: "street",
  },
];

const EventCalendar = () => {
  const [category, setCategory] = useState<"street" | "semi pro" | "pro">(
    "street"
  );

  const filteredEvents = events.filter((event) => event.category === category);

  return (
    <div className={styles.eventCalendarContainer}>
      <h2>Įvykių kalendorius</h2>
      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value as "street" | "semi pro" | "pro")
        }
      >
        <option value="street">Street</option>
        <option value="semi pro">Semi Pro</option>
        <option value="pro">Pro</option>
      </select>

      <div className={styles.eventsContainer}>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
