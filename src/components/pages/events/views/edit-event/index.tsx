import { DataProvider } from "./data-provider"
import { EventContainer } from "./views/event-container"

export const EditEvent = () => {
  return (
    <DataProvider>
      <EventContainer/>
    </DataProvider>
  )
}
