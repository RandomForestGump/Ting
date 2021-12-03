import React, { Suspense } from "react";

/**
 * Store the lazy loaded import in a local cache map
 * with the screen name as a key.
 *
 * React.lazy() does not have any internal caching
 * mechanisms at the time of writing this code, so
 * any state changes on ANY parent component, causes
 * React to think it's an entirely new component. React
 * will then unmount the current component and mount a
 * new one. This will destroy any local state for the
 * loaded component.
 *
 * Discovering this answer was a *ride*, so here you go
 * future me/people who will never look at this code.
 * I did it. Look at how simple that is. You wouldn't
 * believe how long it took me to figure this out.
 *
 * And I'll never tell.
 *
 *
 * More here:
 * https://stackoverflow.com/questions/56887650/react-lazy-loaded-component-loosing-its-state-gets-unmounted
 */
let Cache = new Map();

const ViewLoader = ({ screen, Loader, bustViewCache, children, ...props }) => {
  if (typeof screen === "string" && (bustViewCache || !Cache.has(screen))) {
    Cache.set(
      screen,
      React.lazy(() => import(`@dgn-src-ui/screens/${screen}`))
    );
  }

  const Screen = typeof screen === "string" ? Cache.get(screen) : screen;

  return (
    <Suspense fallback={Loader}>
      <Screen {...props} />
    </Suspense>
  );
};

export default ViewLoader;
