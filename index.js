import generateMessage from "./text.js";
const FORM_ID = "1FAIpQLScwKil-watvIwXz_vAZp7n0OBFAShSQ7HIWnoQ3sngr_1Ustw";
const ENTRY_ID = "1702265358";
const MESSAGE = "text";

if (!/^[A-Za-z0-9_-]+$/.test(FORM_ID)) {
  console.error("Set FORM_ID to the ID from your Google Forms link.");
  process.exit(1);
}

if (!/^\d+$/.test(ENTRY_ID)) {
  console.error("Set ENTRY_ID to the numeric part of the field ID.");
  process.exit(1);
}

if (!MESSAGE) {
  console.error("Set MESSAGE to the text to submit.");
  process.exit(1);
}

const submissionCount = 1000000000;
const delayMs = 700;

async function main() {
  const formUrl = new URL(
    `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`,
  );

  for (let index = 0; index < submissionCount; index += 1) {
    const body = new URLSearchParams({ [`entry.${ENTRY_ID}`]: generateMessage() }).toString();
    const response = await fetch(formUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      redirect: "manual",
    });

    console.log(`Submission ${index + 1}/${submissionCount}: HTTP ${response.status}`);

    if (index < submissionCount - 1) {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  console.log("Finished. Check the form responses to confirm they were recorded.");
}

main().catch((error) => {
  console.error(`Submission stopped: ${error.message}`);
  process.exitCode = 1;
});
