import generateMessage from "./text.js";

const FORM_ID =
  "1FAIpQLScwKil-watvIwXz_vAZp7n0OBFAShSQ7HIWnoQ3sngr_1Ustw";

const ENTRY_ID = "1058785033";

async function main() {
  const formUrl = new URL(
    `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`
  );

  const message = generateMessage();

  const body = new URLSearchParams({
    [`entry.${ENTRY_ID}`]: message,
  });

  const response = await fetch(formUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    redirect: "manual",
  });

  console.log("Message:", message);
  console.log("HTTP Status:", response.status);
  console.log("Response URL:", response.url);
  console.log("Redirect:", response.headers.get("location"));

  if (response.status === 400) {
    console.log("Google Forms rejected the request.");
  } else if (response.status === 302 || response.status === 303) {
    console.log("Google Forms returned a redirect.");
  } else {
    console.log("Check the response status and form configuration.");
  }
}

main().catch((error) => {
  console.error("Submission error:", error.message);
  process.exitCode = 1;
});
