import { component$ } from '@builder.io/qwik';

export interface JavaScriptCrawlingProps {
  hasJavaScript: boolean;
  criticalJS?: string[];
  nonCriticalJS?: string[];
  progressiveEnhancement?: boolean;
}

export default component$<JavaScriptCrawlingProps>(({
  hasJavaScript,
  criticalJS = [],
  nonCriticalJS = [],
  progressiveEnhancement = true,
}) => {

  return (
    <>
      {/* JavaScript crawling hints */}
      <meta name="has-javascript" content={hasJavaScript.toString()} />
      
      {/* Progressive enhancement indicator */}
      <meta name="progressive-enhancement" content={progressiveEnhancement.toString()} />
      
      {/* Critical JavaScript files */}
      {criticalJS.length > 0 && (
        <meta name="critical-js" content={criticalJS.join(', ')} />
      )}
      
      {/* Non-critical JavaScript files */}
      {nonCriticalJS.length > 0 && (
        <meta name="non-critical-js" content={nonCriticalJS.join(', ')} />
      )}
      
      {/* Render blocking resources hint */}
      <meta name="render-blocking-resources" content="css, critical-js" />
      
      {/* JavaScript execution hints */}
      {hasJavaScript && (
        <>
          <meta name="js-execution" content="async" />
          <meta name="js-defer" content="true" />
        </>
      )}
    </>
  );
});