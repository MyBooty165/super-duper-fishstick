body {
  font-family: Arial, sans-serif;
}

.calculator {
  width: 270px;
  margin: auto;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
  padding: 10px;
}

.display {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
}

.display input {
  width: 100%;
  border: none;
  font-size: 36px;
  text-align: right;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
}

button {
  font-size: 24px;
  border-radius: 50%;
  border: none;
  background-color: #e0e0e0;
  color: #666;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  padding: 20px;
}

button:hover {
  background-color: #ccc;
}
