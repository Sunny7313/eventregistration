// QR code URLs for different events
const qrCodes = {
  coding:
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Coding%20Event%20Payment",
  hackathon:
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Hackathon%20Event%20Payment",
  ideathon:
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Ideathon%20Event%20Payment",
};

// Get DOM elements
const eventSelect = document.getElementById("event");
const qrCodeImg = document.getElementById("qrCode");
const form = document.getElementById("registrationForm");
const fileInput = document.getElementById("payment");
const fileInputButton = document.querySelector(".file-input-button");
const fileName = document.getElementById("file-name");
const numMembersSelect = document.getElementById("numMembers");
const memberDetailsContainer = document.getElementById("memberDetails");
const amountToPay = document.getElementById("amountToPay");

// Update QR code when event changes
eventSelect.addEventListener("change", function () {
  const selectedEvent = this.value;
  if (selectedEvent && qrCodes[selectedEvent]) {
    qrCodeImg.src = qrCodes[selectedEvent];
    qrCodeImg.alt = `Payment QR Code for ${selectedEvent}`;
  } else {
    qrCodeImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Select%20an%20event";
    qrCodeImg.alt = "Payment QR Code";
  }
});

// Handle file input
fileInput.addEventListener("change", function (e) {
  if (this.files && this.files[0]) {
    fileName.textContent = this.files[0].name;
  } else {
    fileName.textContent = "";
  }
});

// Trigger file input when button is clicked
fileInputButton.addEventListener("click", function () {
  fileInput.click();
});

// Generate member details fields based on number of members
numMembersSelect.addEventListener("change", function () {
  const numMembers = parseInt(this.value);
  memberDetailsContainer.innerHTML = "";

  for (let i = 1; i <= numMembers; i++) {
    const memberFields = `
      <div class="form-group">
        <label for="member${i}_name">Member ${i} Name</label>
        <input type="text" id="member${i}_name" name="member${i}_name" required />
      </div>
      <div class="form-group">
        <label for="member${i}_degree">Member ${i} Degree</label>
        <input type="text" id="member${i}_degree" name="member${i}_degree" required />
      </div>
      <div class="form-group">
        <label for="member${i}_department">Member ${i} Department</label>
        <input type="text" id="member${i}_department" name="member${i}_department" required />
      </div>
      <div class="form-group">
        <label for="member${i}_year">Member ${i} Year</label>
        <input type="number" id="member${i}_year" name="member${i}_year" required />
      </div>
      <div class="form-group">
        <label for="member${i}_email">Member ${i} Email</label>
        <input type="email" id="member${i}_email" name="member${i}_email" required />
      </div>
      <div class="form-group">
        <label for="member${i}_phone">Member ${i} Phone</label>
        <input type="tel" id="member${i}_phone" name="member${i}_phone" required />
      </div>
    `;
    memberDetailsContainer.insertAdjacentHTML("beforeend", memberFields);
  }

  // Update amount to pay
  const amount = numMembers * 100;
  amountToPay.textContent = `Amount to Pay: ₹${amount}`;
});
