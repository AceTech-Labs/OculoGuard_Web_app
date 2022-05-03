// import DropDown from "../../components/DropDown";
import Button from "../../components/buttons/Button";
import { useRouter } from "next/router";
import { useState } from "react";

const Predictor = () => {
  const router = useRouter();
  const { id } = router.query;
  const [disease, setDisease] = useState(3);
  const [selectedFile, setSelectedFile] = useState(null);

  const uploadFile = (e) => {
    e.preventDefault();

    let data = new FormData();
    const header = {};
    data.append("file", selectedFile);
    header.Accept = "application/json";
    var endPoint = "";
    if (disease === 1) {
      endPoint = "";
    } else if (disease === 2) {
      endPoint = "";
    } else if (disease === 3 || disease === 4) {
      // endPoint = "https://dme-glau.herokuapp.com/diagnosis/dme-api";
      endPoint = "https://dme-glau.herokuapp.com/hello";
    }
    // endPoint = "http://127.0.0.1:5000/hello";
    fetch(endPoint, {
      method: "POST",
      headers: header,
      body: {},
      mode: "no-cors",
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <div className="flex justify-center mt-12">
        <div className="mb-3 xl:w-96">
          <select
            className="drop-down"
            aria-label="Default select example"
            onChange={(event) => {
              setDisease(event.target.value);
              console.log(disease);
            }}
          >
            <option value={1}>Prognosis</option>
            <option value={2}>Diabetic Retinopathy</option>
            <option selected value={3}>
              Macula Edema
            </option>
            <option value={4}>Galucoma</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
          <div className="m-4">
            <label className="inline-block mb-2 text-gray-500">
              Upload Image(jpg,png,svg,jpeg)
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                <div className="flex flex-col items-center justify-center pt-7 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Select a photo
                  </p>
                </div>
                <input
                  type="file"
                  className="opacity-0"
                  onChange={(event) => {
                    setSelectedFile(event.target.files[0]);
                    console.log(selectedFile);
                  }}
                />
              </label>
            </div>
          </div>
          <div className="flex p-2 space-x-4 justify-center">
            <button
              className="px-4 py-2 text-white bg-primary rounded shadow-xl"
              onClick={uploadFile}
            >
              Predict
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default Predictor;
