successfulSampleValue = String.raw`
    {
        "error_schema": {
            "error_code": "TRE-00-000",
            "error_message": {
                "indonesian": "Sukses",
                "english": "Success"
            }
        },
        "output_schema": {
            "request_id": "1270aa41500dd302",
            "data": {
                "deal_id": "MAN202403220004",
                "identity_type": "3",
                "identity_number": "0540001031",
                "rule_category": "ALL_IDR_00_B_SPOT",
                "accumulation_rule": 1,
                "accumulation_group": "ALL",
                "accumulation_amount": 2909999854.5,
                "flag_underlying_document": "Y",
                "threshold": 100000,
                "period": "202405"
            }
        }
    }
`;
failedSampleValue = String.raw`
    {
        "error_schema": {
            "error_code": "TRE-18-001",
            "error_message": {
                "indonesian": "Gagal validasi field input",
                "english": "Field Input Validation Failed"
            }
        },
        "output_schema": {
            "request_id": "70b5038315847d91",
            "data": [
                "buyAmount: numeric value out of bounds (<13 digits>.<2 digits> expected)"
            ]
        }
    }
`;

emojiList = [
  "φ(*￣0￣)",
  "╰(*°▽°*)╯",
  "(●ˇ∀ˇ●)",
  "(￣y▽￣)╭ Ohohoho.....",
  "(〃￣︶￣)人(￣︶￣〃)",
  "o((>ω< ))o",
  "ƪ(˘⌣˘)ʃ",
  "(╹ڡ╹ )",
  "(¬‿¬)",
  "(✿◕‿◕✿)",
  "( ͡• ͜ʖ ͡• )",
  "¯_(ツ)_/¯",
  "XD",
];

// elements
processButton = document.getElementById("processButton");
copyButton = document.getElementById("copyButton");
resetButton = document.getElementById("resetButton");
successfulInputArea = document.getElementById("successfulInputArea");
failedInputArea = document.getElementById("failedInputArea");
outputArea = document.getElementById("outputArea");
alertSection = document.getElementById("alertSection");
sampleButton = document.getElementById("sampleButton");

// listeners
processButton.addEventListener("click", process);
copyButton.addEventListener("click", copyOutput);
resetButton.addEventListener("click", resetAll);
sampleButton.addEventListener("click", copySample);

// functions
function customRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const appendErrorAlert = (message) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    '<div class="alert alert-danger mb-2 alert-dismissible fade show" role="alert">',
    "   <h6>Oops! Process failed XD</h6>",
    `   <subtitle>${message}</subtitle>`,
    '   <button id="closeAlertButton" type="button" class="btn-close" onClick=closeAlert()></button>',
    "</div>",
  ].join("");

  alertSection.append(wrapper);
};
const appendSuccessAlert = (message) => {
  const wrapper = document.createElement("div");
  const idx = customRandom(1, emojiList.length);
  wrapper.innerHTML = [
    '<div class="alert alert-success mb-2 alert-dismissible fade show" role="alert">',
    `   <subtitle>Generated successfully! ${emojiList[idx]}</subtitle>`,
    '   <button id="closeAlertButton" type="button" class="btn-close" onClick=closeAlert()></button>',
    "</div>",
  ].join("");

  alertSection.append(wrapper);
};

function closeAlert() {
  alertSection.innerHTML = "";
}

function copyOutput() {
  outputArea.select();
  navigator.clipboard.writeText(outputArea.value);
}
function resetAll() {
  location.reload();
}
function copySample() {
  closeAlert();
  successfulInputArea.innerHTML = successfulSampleValue;
  failedInputArea.innerHTML = failedSampleValue;
}

function process() {
  closeAlert();
  try {
    successfulInputAreaContent = successfulInputArea.value;
    output_keys = Object.keys(JSON.parse(successfulInputAreaContent).output_schema.data);
    output_structure = ''

    output_keys.forEach(key => {
        output_structure += `
            + "|" + resp.output_schema.data.${key} `
    });

    result = String.raw`
    const resp = pm.response.json();
    const status_code = resp.error_schema.error_code;
    
    pm.test((resp.error_schema.error_code == 'TRE-00-000') 
        ? 
            (pm.request.body 
            + "|" + JSON.stringify(resp)
            + "|" + resp.error_schema.error_code
            + "|" + resp.error_schema.error_message.indonesian
            + "|" + resp.error_schema.error_message.english
            + "|" + resp.output_schema.request_id ${output_structure}) 
        : 
            (pm.request.body + 
            + "|" + JSON.stringify(resp)
            + "|" + resp.error_schema.error_code
            + "|" + resp.error_schema.error_message.indonesian
            + "|" + resp.error_schema.error_message.english
            + "|" + resp.output_schema.request_id 
            + "|" + resp.output_schema.data));`;
            
    outputArea.innerHTML = result;
    appendSuccessAlert();
  } catch (error) {
    appendErrorAlert(error);
  }
}
