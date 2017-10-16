// Saves options to chrome.storage
function save_options() {
  var passProtected = document.getElementById('password').value;
  var strainVulgar = document.getElementById('vulgar').checked;
  var strainViolent = document.getElementById('violent').checked;
  var strainPolitical = document.getElementById('political').checked;
  chrome.storage.sync.set({
    passProtected: passProtected,
    strainVulgar: strainVulgar,
    strainViolent: strainViolent,
    strainPolitical: strainPolitical
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options()
{
  // Default values
  chrome.storage.sync.get({
    passProtected: 'no',
    strainVulgar: true,
    strainViolent: true,
    strainPolitical: true
  }, function(items) {
    document.getElementById('password').value = items.passProtected;
    document.getElementById('vulgar').checked = items.strainVulgar;
    document.getElementById('violent').checked = items.strainViolent;
    document.getElementById('political').checked = items.strainPolitical;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);