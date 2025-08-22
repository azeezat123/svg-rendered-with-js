// This is your data source — an array of shape objects, each with properties like type, position, color, and tags
const shapesData = [
  { id: "c1", type: "circle", cx: 60, cy: 60, r: 46, fill: "#ADD8E6", tags: ["pastel"], label: "blue" },
  { id: "r1", type: "rect", x: 138, y: 22, width: 140, height: 80, fill: "#0000FF", tags: ["vibrant"], label: "blue" },
  { id: "c2", type: "circle", cx: 355, cy: 60, r: 46, fill: "#90EE90", tags: ["pastel"], label: "green" },
  { id: "r2", type: "rect", x: 426, y: 22, width: 140, height: 80, fill: "#008000", tags: ["vibrant", "neon"], label: "green" },
  { id: "c3", type: "circle", cx: 645, cy: 60, r: 46, fill: "#800080", tags: ["vibrant"], label: "purple"},
];

// This function handles the actual drawing of shapes
// shapeArray is just a placeholder name — it could be anything (like "dataShapes" or "shapes")
// When you call renderShapes(shapesData) - (your data source array name), this placeholder will represent your Data Array inside the function
function renderShapes (shapeArray) {
    const svg = document.querySelector(".viz");

    // Clear out all previous shapes before drawing new ones, to prevent stacking
    svg.innerHTML = "";

    shapeArray.forEach((shape) => {
        // You can declare a variable without assigning it right away
        // We're using let svgShape here, and later we'll assign it a value depending on the shape type
        let svgShape;

        // This is how you create an SVG shape (like circle or rect) using JavaScript
        if (shape.type === "circle") {
            svgShape = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svgShape.setAttribute("cx", shape.cx);
            svgShape.setAttribute("cy", shape.cy);
            svgShape.setAttribute("r", shape.r);
        }
        else if (shape.type === "rect") {
            svgShape = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            svgShape.setAttribute("x", shape.x);
            svgShape.setAttribute("y", shape.y);
            svgShape.setAttribute("width", shape.width);
            svgShape.setAttribute("height", shape.height);
        }

        // Here we assign attributes like class and fill color to each shape
        svgShape.setAttribute("class", "shape");
        svgShape.setAttribute("fill", shape.fill);
        svgShape.setAttribute("title", shape.label);

        // Finally, add the shape into the SVG container
        svg.appendChild(svgShape);
    });
};

// === Button Logic ===

// When the "Show All" button is clicked, we call renderShapes with the full shapesData array

// ❗️ If the arrow function has **no parameter**, you must still include the () and the curly braces {}
// In this case, no parameter is needed — we're just calling a function
document.getElementById('showAll').addEventListener("click", () => {
    renderShapes(shapesData);
});

// When "Show pastel" is clicked...
document.getElementById('showPastel').addEventListener("click", () => {

  // This filters only shapes that include the "pastel" tag
  // tag is the name of the current item in the array — it’s a single parameter
  // ✅ If there’s only one parameter, bracket around it are optional: (shape) or just shape
  // ✅ But we are using curly braces {} here, because we’re writing a full return block
  const pastel = shapesData.filter((tag) => {
    return tag.tags.includes("pastel");
  });

  // This selects all existing SVG shapes before we draw again
  const hidden = document.querySelectorAll(".shape");

  // Loop through all existing shapes and hide them first
  // element is a single parameter, so parentheses () are not required (but still allowed)
  // ✅ We're using curly braces here even though it’s just one line
  // That’s OK — curly braces are **always allowed** for clarity
  hidden.forEach(element => {
    element.classList.add("hidden");
  });

  // Now draw only the filtered pastel shapes
  renderShapes(pastel);
});

// for vibrant
document.getElementById('showVibrant').addEventListener("click", () => {
  const vibrant = shapesData.filter((tag) => {
    return tag.tags.includes("vibrant");
  });
  const hidden = document.querySelectorAll(".shape");
  hidden.forEach(element => {
    element.classList.add("hidden");
  });
  renderShapes(vibrant);
});
