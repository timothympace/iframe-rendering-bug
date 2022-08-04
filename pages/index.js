export default function Home() {
  return (
    <>
      <p>Below is an iframe pointed at &quot;http://localhost:3000/iframe&quot;</p>
      <p>It is rendered in a HIDDEN div</p>
      <p>If you use devtools to examine the DOM, you can observe whether the page renders/hydrates properly.</p>
      <p>NOTE: This issue only occurs when this page is loaded from a different domain than localhost:3000 (e.g. must be cross origin)</p>
      <div style={{ display: 'none'}}><iframe src="http://localhost:3000/iframe" /></div>

      <p>
        To get the local development server up, clone the repo from: <a href="https://github.com/timothympace/iframe-rendering-bug">GitHub</a> and bring up the local dev server using &quot;yarn dev&quot;
      </p>
    </>
  )
}
