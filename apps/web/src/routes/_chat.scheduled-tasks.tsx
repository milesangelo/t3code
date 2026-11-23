import { createFileRoute } from "@tanstack/react-router";

import { ScheduledTasksSettings } from "../components/settings/ScheduledTasksSettings";
import { validateScheduledTasksSearch } from "../components/settings/scheduledTasksSettings.logic";

function ScheduledTasksRoute() {
  const target = Route.useSearch();
  return <ScheduledTasksSettings {...target} />;
}

export const Route = createFileRoute("/_chat/scheduled-tasks")({
  validateSearch: validateScheduledTasksSearch,
  component: ScheduledTasksRoute,
});
