chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "getFingerprint") {
    chrome.storage.local.get("fingerprint", data => {
      let fp = data.fingerprint;
      if (!fp) {
        fp = "pdfeditor-" + crypto.randomUUID();
        chrome.storage.local.set({ fingerprint: fp }, () => sendResponse(fp));
      } else {
        sendResponse(fp);
      }
    });
    return true;
  }

  if (msg.type === "getAdblockerStatus") {
    sendResponse(false);
    return true;
  }

  if (msg.type === "checkRedirect" || msg.type === "setRedirect") {
    sendResponse(true);
    return true;
  }
});

chrome.runtime.onMessageExternal?.addListener((msg, sender, sendResponse) => {
  if (msg.message === "wk_installed") {
    sendResponse({ installed: true, name: "pdfeditor" });
  }
});
