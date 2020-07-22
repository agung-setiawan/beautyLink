function beautylink(options) {
  // Set Element Identifier by Class Name
  let domElement = document.getElementById(options.domID);

  // Set element padding request by option
  if (typeof options.padding === "undefined" || options.padding == "") {
    domElement.style.padding = "10px";
  } else {
    domElement.style.padding = options.padding;
  }

  // Set element width request by option (px, rem, %)
  if (typeof options.width === "undefined" || options.width == "") {
    domElement.style.width = "100%";
  } else {
    domElement.style.width = options.width;
  }

  // Set element background type
  if (options.backgroundType == "solid") {
    if (typeof options.solidColor === "undefined" || options.solidColor == "") {
      domElement.style.backgroundColor = "#000";
    } else {
      domElement.style.backgroundColor = options.solidColor;
    }
  } else {
    // Set FirstPortion default if not have value
    if (
      typeof options.firstPortion === "undefined" ||
      options.firstPortion == ""
    ) {
      var firstPortion = "0";
    } else {
      var firstPortion = options.firstPortion;
    }

    // Set FirstPortion default if not have value
    if (
      typeof options.secondPortion === "undefined" ||
      options.secondPortion == ""
    ) {
      var secondPortion = "100";
    } else {
      var secondPortion = options.secondPortion;
    }

    // Set FirstPortion default if not have value
    if (typeof options.firstColor === "undefined" || options.firstColor == "") {
      var firstColor = "#A10254";
    } else {
      var firstColor = options.firstColor;
    }

    // Set FirstPortion default if not have value
    if (
      typeof options.secondColor === "undefined" ||
      options.secondColor == ""
    ) {
      var secondColor = "#EC731A";
    } else {
      var secondColor = options.secondColor;
    }

    if (options.backgroundType == "linear") {
      // Set degrees default if not have value
      if (typeof options.degrees === "undefined" || options.degrees == "") {
        var degValue = "90";
      } else {
        var degValue = options.degrees;
      }

      domElement.style.background = `linear-gradient(${degValue}deg, ${firstColor} ${firstPortion}%, ${secondColor} ${secondPortion}%)`;
    } else if (options.backgroundType == "radial") {
      domElement.style.background = `radial-gradient(cirlce, ${firstColor} ${firstPortion}%, ${secondColor} ${secondPortion}%)`;
    }
  }

  if (typeof options.fontColor === "undefined") {
    domElement.style.color = "#fff";
  } else {
    domElement.style.color = options.fontColor;
  }

  domElement.style.display = "flex";

  domElement.style.justifyContent = "center";

  domElement.style.textDecoration = "none";
}

module.exports.beautylink = beautylink;
