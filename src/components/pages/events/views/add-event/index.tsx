import { AddEventProvider } from "./data-provider"
import { EventContainer } from "./views/event-container"

export const AddEvent = () => {
  return (
   <AddEventProvider>
      <EventContainer />
    </AddEventProvider>
  )
}
