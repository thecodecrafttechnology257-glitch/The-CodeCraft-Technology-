document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userform");
  if (!form) return;

  const els = {
    name: document.getElementById("name"),
    lastname: document.getElementById("lastname"),
    mobile: document.getElementById("mobile"),
    email: document.getElementById("email"),
    message: document.getElementById("message-box"),
    captchaQuestion: document.getElementById("captcha-question"),
    captchaInput: document.getElementById("captcha-input"),
    captchaRefresh: document.getElementById("captcha-refresh"),
    captchaError: document.getElementById("captcha-error"),
    captchaValue: document.getElementById("captcha-value"),
    success: document.getElementById("form-success"),
    key: document.getElementById("web3forms-key"),
    submit: form.querySelector('button[type="submit"]')
  };

  const PLACEHOLDER_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";
  const WHATSAPP = "919821337127";

  const honeypot = document.createElement("input");
  honeypot.type = "checkbox";
  honeypot.name = "botcheck";
  honeypot.tabIndex = -1;
  honeypot.hidden = true;
  honeypot.setAttribute("aria-hidden", "true");
  form.appendChild(honeypot);

  const RULES = {
    name: function (value) {
      if (!value) return "First name is required.";
      if (value.length < 2) return "Enter at least 2 characters.";
      if (!/^[A-Za-z][A-Za-z\s.'-]*$/.test(value)) return "Use letters only.";
      return "";
    },
    lastname: function (value) {
      if (!value) return "";
      if (value.length < 2) return "Enter at least 2 characters.";
      if (!/^[A-Za-z][A-Za-z\s.'-]*$/.test(value)) return "Use letters only.";
      return "";
    },
    mobile: function (value) {
      if (!value) return "Mobile number is required.";
      const digits = value.replace(/\D/g, "");
      if (!/^\d{10}$/.test(digits)) return "Enter a valid 10-digit mobile number.";
      return "";
    },
    email: function (value) {
      if (!value) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) return "Enter a valid email address.";
      return "";
    },
    message: function (value) {
      if (!value) return "Message is required.";
      if (value.length < 10) return "Message must be at least 10 characters.";
      if (value.length > 500) return "Message must be 500 characters or fewer.";
      return "";
    }
  };

  function errorEl(field) {
    let el = field._errorSpan;
    if (el && el.isConnected) return el;
    el = document.createElement("span");
    el.className = "error-message";
    field.insertAdjacentElement("afterend", el);
    field._errorSpan = el;
    return el;
  }

  function setFieldState(field, message) {
    const el = errorEl(field);
    el.textContent = message;
    field.classList.toggle("input-invalid", Boolean(message));
    field.classList.toggle("input-valid", !message && field.value.trim() !== "");
  }

  function validateField(field) {
    const rule = RULES[field.name];
    if (!rule) return true;
    const message = rule(field.value.trim());
    setFieldState(field, message);
    return !message;
  }

  function validateCaptcha() {
    const value = els.captchaInput.value.trim();
    let message = "";
    if (!value) message = "Enter the verification code.";
    else if (value !== els.captchaValue.textContent) message = "Incorrect code. Please try again.";
    els.captchaError.textContent = message;
    els.captchaInput.classList.toggle("input-invalid", Boolean(message));
    els.captchaInput.classList.toggle("input-valid", !message && value !== "");
    return !message;
  }

  function clearStates() {
    [els.name, els.lastname, els.mobile, els.email, els.message].forEach(function (field) {
      field.classList.remove("input-invalid", "input-valid");
      if (field._errorSpan) field._errorSpan.textContent = "";
    });
  }

  function showMessage(text, isError) {
    els.success.textContent = text;
    els.success.style.display = "block";
    els.success.style.color = isError ? "#b00020" : "green";
    els.success.style.borderColor = isError ? "#b00020" : "green";
    els.success.style.background = isError ? "#fdecea" : "#e8f5e9";
  }

  function clearMessage() {
    els.success.textContent = "";
    els.success.style.display = "none";
  }

  function newCaptcha() {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    els.captchaQuestion.textContent = a + " + " + b + " = ?";
    els.captchaValue.textContent = String(a + b);
    els.captchaInput.value = "";
    els.captchaError.textContent = "";
    els.captchaInput.classList.remove("input-invalid", "input-valid");
  }

  function setLoading(isLoading) {
    els.submit.disabled = isLoading;
    els.submit.textContent = isLoading ? "Sending..." : "Submit";
  }

  function enquiryText() {
    return [
      "*New Contact Form Enquiry*",
      "First Name: " + els.name.value.trim(),
      "Last Name: " + (els.lastname.value.trim() || "-"),
      "Mobile: " + els.mobile.value.trim(),
      "Email: " + els.email.value.trim(),
      "Message: " + els.message.value.trim()
    ].join("\n");
  }

  function sendToWhatsApp() {
    const url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(enquiryText());
    window.open(url, "_blank", "noopener");
    form.reset();
    clearStates();
    newCaptcha();
    showMessage("Thanks! Your enquiry is ready. Please press send in WhatsApp to reach us.", false);
  }

  function sendToWeb3Forms(key) {
    setLoading(true);
    return fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form)
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          form.reset();
          clearStates();
          newCaptcha();
          showMessage("Thanks! Your message has been sent. We will reply soon.", false);
        } else {
          showMessage(data.message || "Something went wrong. Please try again.", true);
        }
      })
      .catch(function () {
        showMessage("Network error. Please check your connection and try again.", true);
      })
      .finally(function () {
        setLoading(false);
      });
  }

  [els.name, els.lastname, els.mobile, els.email, els.message].forEach(function (field) {
    field.addEventListener("blur", function () {
      validateField(field);
    });
    field.addEventListener("input", function () {
      if (field.classList.contains("input-invalid")) validateField(field);
    });
  });

  els.captchaInput.addEventListener("input", function () {
    if (els.captchaInput.classList.contains("input-invalid")) validateCaptcha();
  });
  els.captchaRefresh.addEventListener("click", newCaptcha);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearMessage();

    let firstInvalid = null;
    [els.name, els.lastname, els.mobile, els.email, els.message].forEach(function (field) {
      if (!validateField(field) && !firstInvalid) firstInvalid = field;
    });
    if (!validateCaptcha() && !firstInvalid) firstInvalid = els.captchaInput;

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    if (honeypot.checked) {
      showMessage("Submission blocked. Please try again.", true);
      return;
    }

    const key = (els.key.value || "").trim();
    if (!key || key === PLACEHOLDER_KEY) {
      sendToWhatsApp();
      return;
    }

    sendToWeb3Forms(key);
  });

  newCaptcha();
});
