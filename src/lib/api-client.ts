import { wait } from "@/lib/utils";

type ApiResult = {
  ok: boolean;
  message: string;
};

async function mockSubmit(message: string): Promise<ApiResult> {
  await wait(850);
  return {
    ok: true,
    message
  };
}

export async function submitAppointment() {
  // Replace with a POST request to the hospital appointment API when backend is ready.
  return mockSubmit("Appointment request submitted. Our coordination team will call you shortly.");
}

export async function submitQuery() {
  // Replace with a CRM or helpdesk integration when backend is ready.
  return mockSubmit("Your query has been received. We will respond as soon as possible.");
}

export async function submitFeedback() {
  // Replace with patient experience API when backend is ready.
  return mockSubmit("Thank you for your feedback. It helps us improve patient care.");
}

export async function submitResume() {
  // Replace with HR applicant tracking API when backend is ready.
  return mockSubmit("Your application has been submitted to the HR team.");
}

export async function portalLogin() {
  // Replace with secure patient portal authentication when backend is ready.
  await wait(900);
  return {
    ok: true,
    message: "Demo login successful. Reports would appear here after backend integration."
  };
}
