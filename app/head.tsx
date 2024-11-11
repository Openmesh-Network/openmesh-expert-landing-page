export default function Head() {
  return (
    <>
      <title>Openmesh Academy</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Openmesh Academy" />
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_ENVIRONMENT === "PROD" ? process.env.NEXT_PUBLIC_BASE_PATH : ""}/openmesh.svg`} />
    </>
  );
}
