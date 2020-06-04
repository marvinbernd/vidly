import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn:
      "https://ee3b26fd91574f069958f8ed5d85038f@o399637.ingest.sentry.io/5258406",
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
