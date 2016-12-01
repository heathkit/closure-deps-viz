/*
TODO:
- take an unmodified deps file as input
- preserve settings?
*/
let moduleToFile = {};
let deps = {};
function addDependency(path, provides, requires) {
  provides.forEach((mod) => moduleToFile[mod] = path);
  let filteredReqs = requires.filter((x) => {
    return x.startsWith('signals') 
  });
  if (filteredReqs.length > 0) {
    deps[path] = filteredReqs;
  }
}

addDependency("app.js", ['signals.app'], ['ng.jfk.Bubble', 'ng.jfk.ButterBar', 'ng.jfk.Checkbox', 'ng.jfk.Dialog', 'ng.jfk.InputDatePicker', 'ng.jfk.MenuButton', 'ng.jfk.Radio', 'ng.jfk.Select', 'ng.jfk.Tooltip', 'signals.AppBarController', 'signals.EmbedBrandingController', 'signals.MetricController', 'signals.ProjectDetailController', 'signals.ProjectViewController', 'signals.ReportController', 'signals.RootController', 'signals.ViewManagementController', 'signals.analytics.Service', 'signals.api.module', 'signals.config.Service', 'signals.dialogs.module', 'signals.directive.drilldown', 'signals.directive.leftAlignMenu', 'signals.directive.legend', 'signals.directive.projectKey', 'signals.directive.searchbox', 'signals.directive.timechart', 'signals.filter.module', 'signals.grid.module', 'signals.labs.module', 'signals.messages.module', 'signals.model.MetricMetadata', 'signals.navigation.Service', 'signals.notifications.module', 'signals.params.Service', 'signals.projectView.Service', 'signals.reports.Service', 'signals.search.Service', 'signals.suggestbox.module', 'signals.templates', 'signals.tour.module', 'signals.unifiedView.Service', 'signals.views.Service']);
addDependency("externs.js", [], []);
addDependency("filter.js", ['signals.filter', 'signals.filter.module'], ['apps.time', 'goog.date.DateTime']);
addDependency("filter_test.js", [], ['signals.filter']);
addDependency("root_controller.js", ['signals.RootController'], ['signals.analytics.Service', 'signals.labs.Labs', 'signals.navigation.Service', 'signals.tour.TourService', 'signals.views.Service', 'userfeedback.api']);
addDependency("root_controller_test.js", [], ['signals.RootController']);
addDependency("routes.js", [], ['signals.app']);
addDependency("utils.js", ['signals.utils'], ['apps.time', 'goog.i18n.DateTimeParse', 'signals.model.Project']);
addDependency("utils_test.js", [], ['signals.utils']);
addDependency("appbar/appbar_controller.js", ['signals.AppBarController'], ['signals.analytics.Service', 'signals.messages.Service', 'signals.params.Service', 'signals.unifiedView.Service', 'signals.unifiedView.ViewTypes', 'signals.views.Service']);
addDependency("appbar/appbar_controller_test.js", [], ['signals.AppBarController', 'signals.app', 'signals.unifiedView.ViewTypes']);
addDependency("components/analytics/analytics_service.js", ['signals.analytics', 'signals.analytics.Service'], []);
addDependency("components/analytics/analytics_service_test.js", [], ['signals.app']);
addDependency("components/api/api.js", ['signals.api.module'], ['signals.api.METRIC_FETCHER_SERVICE_NAME', 'signals.api.METRIC_HISTORY_SERVICE_NAME', 'signals.api.MetricFetcher', 'signals.api.MetricHistory', 'signals.api.SEARCH_SERVICE_NAME', 'signals.api.SearchService']);
addDependency("components/api/metric-fetcher-service.js", ['signals.api.METRIC_FETCHER_SERVICE_NAME', 'signals.api.MetricFetcher'], []);
addDependency("components/api/metric-fetcher-service_test.js", [], ['signals.api.mocks.fetcher', 'signals.app']);
addDependency("components/api/metric-history-service.js", ['signals.api.METRIC_HISTORY_SERVICE_NAME', 'signals.api.MetricHistory'], []);
addDependency("components/api/metric-history-service_test.js", [], ['signals.api.MetricHistory', 'signals.api.mocks.history', 'signals.api.module', 'signals.app']);
addDependency("components/api/search-service.js", ['signals.api.SEARCH_SERVICE_NAME', 'signals.api.SearchService'], []);
addDependency("components/api/search-service_test.js", [], ['signals.api.SearchService', 'signals.api.mocks.search', 'signals.api.module', 'signals.app']);
addDependency("components/api/mocks/fetcher_mock.js", ['signals.api.mocks.fetcher'], []);
addDependency("components/api/mocks/history_mock.js", ['signals.api.mocks.history'], []);
addDependency("components/api/mocks/search_mock.js", ['signals.api.mocks.search'], []);
addDependency("components/config/config_service.js", ['signals.config.Service'], []);
addDependency("components/config/config_service_test.js", [], ['signals.app']);
addDependency("components/labs/labs.js", ['signals.labs.module'], ['signals.labs.Labs']);
addDependency("components/labs/labs_service.js", ['signals.labs.Flags', 'signals.labs.Labs'], []);
addDependency("components/menu/left_align_menu_directive.js", ['signals.directive.leftAlignMenu'], []);
addDependency("components/messages/messages.js", ['signals.messages.module'], ['signals.messages.MessagesController', 'signals.messages.Service']);
addDependency("components/messages/messages_controller.js", ['signals.messages.MessagesController'], ['ng.jfk.ButterBar', 'signals.messages.Service']);
addDependency("components/messages/messages_controller_test.js", [], ['signals.app', 'signals.messages.MessagesController']);
addDependency("components/messages/messages_service.js", ['signals.messages.Message', 'signals.messages.Service'], ['goog.array', 'goog.string', 'signals.config.Service']);
addDependency("components/messages/messages_service_test.js", [], ['signals.app']);
addDependency("components/messages/messages_test.js", [], ['signals.app']);
addDependency("components/metadata/metric_metadata.js", ['signals.model.MetricMetadata'], ['goog.array', 'goog.object', 'signals.labs.Labs']);
addDependency("components/navigation/navigation_service.js", ['signals.navigation', 'signals.navigation.Service', 'signals.navigation.ViewContext'], ['signals.labs.Labs', 'signals.model.Project', 'signals.params.Service', 'signals.utils']);
addDependency("components/navigation/navigation_service_test.js", [], ['signals.app', 'signals.utils']);
addDependency("components/notifications/notifications.js", ['signals.notifications.module'], ['signals.notifications.NotificationController', 'signals.notifications.NotificationService']);
addDependency("components/notifications/notifications_controller.js", ['signals.notifications.NotificationController'], ['signals.notifications.Message']);
addDependency("components/notifications/notifications_service.js", ['signals.notifications.Message', 'signals.notifications.NotificationService'], []);
addDependency("components/notifications/notifications_service_test.js", [], ['signals.notifications.module']);
addDependency("components/params/params_service.js", ['signals.params', 'signals.params.Service'], []);
addDependency("components/params/params_service_test.js", [], ['signals.app']);
addDependency("components/project/project.js", ['signals.model.Project', 'signals.model.ProjectTypes', 'signals.model.ValidProductAreas'], []);
addDependency("components/project/project_key_directive.js", ['signals.directive.projectKey'], ['signals.utils']);
addDependency("components/project/project_test.js", [], ['signals.utils']);
addDependency("components/project-tree/project-tree-service.js", ['signals.projectTree.ProjectTree', 'signals.projectTree.module'], ['signals.labs.Labs', 'signals.model.Project', 'signals.model.ProjectTypes']);
addDependency("components/project-tree/project-tree-service_test.js", [], ['signals.model.Project', 'signals.projectTree.ProjectTree']);
addDependency("components/projectviews/projectview-service.js", ['signals.projectView.Service'], ['goog.Uri', 'goog.date.Date', 'signals.messages.Service', 'signals.params.Service']);
addDependency("components/projectviews/projectview-service_test.js", [], ['signals.app', 'signals.projectView.Service']);
addDependency("components/reports/reports-service.js", ['signals.reports.Service', 'signals.reports.Service.Report'], ['goog.Uri', 'goog.array', 'goog.i18n.DateTimeFormat', 'signals.messages.Service', 'signals.params.Service']);
addDependency("components/reports/reports-service_test.js", [], ['signals.app']);
addDependency("components/search-box/search_box.js", ['signals.directive.searchbox'], []);
addDependency("components/search-box/search_box_test.js", [], ['signals.app']);
addDependency("components/search-box/search_service.js", ['signals.search.Service'], ['signals.labs.Labs']);
addDependency("components/search-box/search_service_test.js", [], ['signals.app']);
addDependency("components/search-box/suggestbox.js", ['signals.suggestbox.SuggestBoxController', 'signals.suggestbox.module'], ['signals.tour.module']);
addDependency("components/search-box/suggestbox_test.js", [], ['signals.app']);
addDependency("components/sticky/sticky.js", ['signals.sticky.module'], ['signals.sticky.STICKY_DIRECTIVE_NAME', 'signals.sticky.stickyDirective']);
addDependency("components/sticky/sticky_directive.js", ['signals.sticky.STICKY_DIRECTIVE_NAME', 'signals.sticky.stickyDirective'], ['goog.dom.animationFrame']);
addDependency("components/unifiedviews/unified_view_service.js", ['signals.unifiedView.Service', 'signals.unifiedView.ViewType', 'signals.unifiedView.ViewTypes', 'signals.unifiedView.ViewsOfType'], ['signals.labs.Flags', 'signals.navigation.ViewContext', 'signals.projectView.Service', 'signals.reports.Service', 'signals.views.Service']);
addDependency("components/unifiedviews/unified_view_service_test.js", [], ['signals.app', 'signals.unifiedView.ViewTypes']);
addDependency("components/views/view_data.js", ['signals.model.ViewData'], ['signals.model.MetricMetadata']);
addDependency("components/views/view_data_test.js", [], ['signals.model.ViewData']);
addDependency("components/views/view_service.js", ['signals.views.Service'], ['signals.messages.Service', 'signals.model.ViewData', 'signals.utils']);
addDependency("components/views/view_service_test.js", [], ['signals.app']);
addDependency("dialogs/dialogs.js", ['signals.dialogs.module'], ['signals.dialogs.GridViewDialog', 'signals.suggestbox.module']);
addDependency("dialogs/grid_view_dialog.js", ['signals.dialogs.GridViewDialog', 'signals.dialogs.GridViewDialogController'], ['signals.model.ValidProductAreas', 'signals.search.Service', 'signals.utils', 'signals.views.Service']);
addDependency("dialogs/grid_view_dialog_test.js", [], ['signals.app', 'signals.model.ValidProductAreas']);
addDependency("embed-branding/embed_branding_controller.js", ['signals.EmbedBrandingController'], []);
addDependency("embed-branding/embed_branding_controller_test.js", [], ['signals.EmbedBrandingController', 'signals.app']);
addDependency("grid/grid.js", ['signals.grid.module'], ['signals.GridController', 'signals.grid.GRID_ROW_DIRECTIVE_NAME', 'signals.grid.GridRowDirective', 'signals.projectTree.module', 'signals.sticky.module']);
addDependency("grid/grid_controller.js", ['signals.GridController'], ['goog.array', 'goog.object', 'goog.string', 'signals.api.MetricFetcher', 'signals.labs.Labs', 'signals.messages.Service', 'signals.model.GridView', 'signals.model.Project', 'signals.navigation.Service', 'signals.navigation.ViewContext', 'signals.params.Service', 'signals.projectTree.ProjectTree', 'signals.utils', 'signals.views.Service']);
addDependency("grid/grid_controller_test.js", [], ['goog.array', 'ng.testing.promiseUtils', 'signals.GridController', 'signals.app', 'signals.model.Project']);
addDependency("grid/grid_row_directive.js", ['signals.grid.GRID_ROW_DIRECTIVE_NAME', 'signals.grid.GridRowDirective'], []);
addDependency("grid/gridview.js", ['signals.model.GridView'], []);
addDependency("grid/gridview_test.js", [], ['signals.app', 'signals.model.GridView']);
addDependency("metric-detail/charts.js", ['signals.directive.timechart'], ['apps.time', 'google.visualization.AnnotationChart', 'google.visualization.events']);
addDependency("metric-detail/charts_test.js", [], ['signals.app']);
addDependency("metric-detail/drilldown.js", ['signals.directive.drilldown'], []);
addDependency("metric-detail/drilldown_test.js", [], ['signals.app']);
addDependency("metric-detail/legend.js", ['signals.directive.legend'], []);
addDependency("metric-detail/legend_test.js", [], ['signals.app']);
addDependency("metric-detail/metric_controller.js", ['signals.MetricController'], ['apps.time', 'goog.date.Date', 'goog.date.DateTime', 'goog.date.Interval', 'goog.i18n.DateTimeFormat', 'signals.filter', 'signals.messages.Service', 'signals.model.MetricMetadata', 'signals.model.Project', 'signals.navigation.Service', 'signals.navigation.ViewContext', 'signals.utils']);
addDependency("metric-detail/metric_controller_test.js", [], ['signals.MetricController', 'signals.app']);
addDependency("project-detail/project_detail_controller.js", ['signals.ProjectDetailController'], ['goog.array', 'goog.object', 'goog.structs.Set', 'signals.messages.Service', 'signals.model.Project', 'signals.navigation.Service', 'signals.navigation.ViewContext', 'signals.utils']);
addDependency("projectviews/projectview.js", ['signals.ProjectViewController'], ['google.visualization.DataTable', 'google.visualization.LineChart', 'google.visualization.Table', 'google.visualization.events', 'signals.messages.Service', 'signals.navigation.Service', 'signals.navigation.ViewContext', 'signals.projectView.Service']);
addDependency("projectviews/projectview_test.js", [], ['goog.i18n.DateTimeFormat', 'ng.testing.promiseUtils', 'signals.ProjectViewController']);
addDependency("reports/report.js", ['signals.ReportController'], ['signals.messages.Service', 'signals.navigation.Service', 'signals.navigation.ViewContext', 'signals.reports.Service']);
addDependency("reports/report_test.js", [], ['goog.i18n.DateTimeFormat', 'signals.ReportController']);
addDependency("tour/tour-controller.js", ['signals.tour.TourController'], []);
addDependency("tour/tour-controller_test.js", [], ['signals.tour.module']);
addDependency("tour/tour-directive.js", ['signals.tour.TOUR_DIRECTIVE_NAME', 'signals.tour.tourDirective'], ['signals.tour.TourController']);
addDependency("tour/tour-item-directive.js", ['signals.tour.Item', 'signals.tour.TOUR_ITEM_DIRECTIVE_NAME', 'signals.tour.tourItemDirective'], []);
addDependency("tour/tour-overlay-directive.js", ['signals.tour.Overlay', 'signals.tour.TOUR_OVERLAY_DIRECTIVE_NAME', 'signals.tour.tourOverlayDirective'], ['goog.color.alpha']);
addDependency("tour/tour-overlay-directive_test.js", [], ['signals.tour.module']);
addDependency("tour/tour-popup-directive.js", ['signals.tour.Popup', 'signals.tour.TOUR_POPUP_DIRECTIVE_NAME', 'signals.tour.TourPopup', 'signals.tour.tourPopupDirective'], []);
addDependency("tour/tour-service.js", ['signals.tour.TourService'], ['jfk.PopupPosition', 'jfk.PromoBubble', 'signals.tour.Item']);
addDependency("tour/tour-service_test.js", [], ['ng.testing.browserTrigger', 'signals.tour.module']);
addDependency("tour/tour-step-directive.js", ['signals.tour.TOUR_STEP_DIRECTIVE_NAME', 'signals.tour.tourStepDirective'], []);
addDependency("tour/tour-step-directive_test.js", [], ['signals.tour.module']);
addDependency("tour/tour.js", ['signals.tour.module'], ['signals.tour.TOUR_DIRECTIVE_NAME', 'signals.tour.TOUR_ITEM_DIRECTIVE_NAME', 'signals.tour.TOUR_OVERLAY_DIRECTIVE_NAME', 'signals.tour.TOUR_POPUP_DIRECTIVE_NAME', 'signals.tour.TOUR_STEP_DIRECTIVE_NAME', 'signals.tour.TourService', 'signals.tour.tourDirective', 'signals.tour.tourItemDirective', 'signals.tour.tourOverlayDirective', 'signals.tour.tourPopupDirective', 'signals.tour.tourStepDirective']);
addDependency("view-management/view_management_controller.js", ['signals.ViewManagementController', 'signals.ViewManagementController.View'], ['goog.array', 'signals.messages.Service', 'signals.model.Project', 'signals.navigation.Service', 'signals.navigation.ViewContext', 'signals.reports.Service', 'signals.utils', 'signals.views.Service']);
addDependency("view-management/view_management_test.js", [], ['apps.time.Constants', 'ng.testing.promiseUtils', 'signals.ViewManagementController']);

let metrics = {}
let backDeps = {}
for (let file in deps) {
  let files = deps[file].filter((x) => moduleToFile[x]).map((x) => moduleToFile[x]);
  deps[file] = files;
  files.forEach((x) => {
    if(!backDeps[x]) {
      backDeps[x] = [] 
    }
    backDeps[x].push(file);
  });
  metrics[file] = {}
}

let heights = {};
function findHeight(node) {
  if (!deps[node] || deps[node].length == 0) {
    heights[node] = 0;
    return 0;
  }
  let children = deps[node].map((x) => findHeight(x))
  heights[node] = Math.max(...children) + 1;
  return heights[node]
}
findHeight("app.js");

function findMetrics(node, depth) {
  if (!deps[node] || deps[node].length == 0) {
    metrics[node] = { 
      height: 0,
      depth: depth,
      weight: 1,
    };
    return metrics[node];
  }

  let children = deps[node].map((x) => findMetrics(x, depth+1));
  metrics[node] = {
    depth: depth,
    height: Math.max(...children.map((x) => x.height)) + 1,
    weight: children.map((x) => x.weight).reduce((a,b) => a+b, 0),
  };
  return metrics[node];
}

// TODO: Allow setting the entry point.
findMetrics("app.js", 0);

let graphSettings = `
  graph [
    nodesep=0.5;
    ranksep=0.6
    rankdir=LR
    concentrate=true
    splines=true
    overlap=scale
    clustermode=global
  ];
  node [
    shape=box
    style=rounded
  ];
  edge [
    headport=w
    tailport=e
    arrowsize=1.5
    color=grey
  ]
`

// Print out the dot file
console.log('digraph G {');
console.log(graphSettings);
for (let file in metrics) {
  
  if (metrics[file].height == 0) {
    console.log(`  "${file}" [style=filled;color=cyan]`);
  } else if (metrics[file].height == 1) {
    console.log(`  "${file}" [style=filled;color=lightblue]`);
  }
}
for (let file in deps) {
  // Collapse ranks
  deps[file].forEach((x) => console.log(`  "${file}" -> "${x}";`));
}
console.log('}');

