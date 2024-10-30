import { useState } from "react";

export default function VenueAdd({ onAddVenue }) {
    const [newVenue, setNewVenue] = useState({
        venueId: "",
        venueName: "",
        venueSeater: "",
        isVenueAC: false,
        venueCity: "",
        venueState: ""
    });

    const handleAdd = () => {
        onAddVenue({ ...newVenue, venueId: Number(newVenue.venueId), venueSeater: Number(newVenue.venueSeater) });
        setNewVenue({ venueId: "", venueName: "", venueSeater: "", isVenueAC: false, venueCity: "", venueState: "" });
    };

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
            <input type="number" placeholder="Venue ID" value={newVenue.venueId} onChange={(e) => setNewVenue({ ...newVenue, venueId: e.target.value })} required />
            <input type="text" placeholder="Venue Name" value={newVenue.venueName} onChange={(e) => setNewVenue({ ...newVenue, venueName: e.target.value })} required />
            <input type="number" placeholder="Seater Capacity" value={newVenue.venueSeater} onChange={(e) => setNewVenue({ ...newVenue, venueSeater: e.target.value })} required />
            <select value={newVenue.isVenueAC} onChange={(e) => setNewVenue({ ...newVenue, isVenueAC: e.target.value === "true" })}>
                <option value="true">AC</option>
                <option value="false">Non-AC</option>
            </select>
            <input type="text" placeholder="City" value={newVenue.venueCity} onChange={(e) => setNewVenue({ ...newVenue, venueCity: e.target.value })} required />
            <input type="text" placeholder="State" value={newVenue.venueState} onChange={(e) => setNewVenue({ ...newVenue, venueState: e.target.value })} required />
            <button type="submit">Add Venue</button>
        </form>
    );
}
