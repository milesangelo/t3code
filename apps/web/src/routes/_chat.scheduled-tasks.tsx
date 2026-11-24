import { createFileRoute } from "@tanstack/react-router";

import { ScheduledTasksSettings } from "../components/settings/ScheduledTasksSettings";
import { SettingsScopeProvider } from "../components/settings/SettingsScopeContext";
import { validateScheduledTasksSearch } from "../components/settings/scheduledTasksSettings.logic";

function ScheduledTasksRoute() {
  const target = Route.useSearch();
  return (
    <SettingsScopeProvider search={{}} onChange={() => {}}>
      <ScheduledTasksSettings {...target} />
    </SettingsScopeProvider>
  );
}

export const Route = createFileRoute("/_chat/scheduled-tasks")({
  validateSearch: validateScheduledTasksSearch,
  component: ScheduledTasksRoute,
});
