import styles from "../styles/EventCalendar.module.css";

interface Event {
  id: number;
  date: string;
  city: string;
  address: string;
  category: "street" | "semi pro" | "pro";
}

const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className={styles.eventCard}>
      <img src="/default-event.jpg" alt="Event" className={styles.eventImage} />
      <p className={styles.eventDate}>{event.date}</p>
      <p className={styles.eventLocation}>
        {event.city}, {event.address}
      </p>
    </div>
  );
};

export default EventCard;
