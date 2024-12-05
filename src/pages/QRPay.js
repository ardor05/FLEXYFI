import React, { useState, useEffect, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react"; // Import QRCodeCanvas
import Webcam from "react-webcam";  // Import react-webcam for camera
import jsQR from "jsqr";


const QRPay = () => {
  const [isPaying, setIsPaying] = useState(false);
  const [amount, setAmount] = useState("");
  const [scannedData, setScannedData] = useState(null);
  const [walletAddress, setWalletAddress] = useState("H89Siv45QpSaAWmcMDyMhqSrt3vs1w7D3Gzcp814htD4"); // Store Phantom wallet address
  const webcamRef = useRef(null);

  const handleScan = (data) => {
    if (data) {
      const parsedData = JSON.parse(data);
      setScannedData(parsedData);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleReceive = () => {
    if (amount && walletAddress) {
      const qrData = JSON.stringify({
        walletAddress,  // Phantom wallet address
        amount,         // Amount to receive in USDe
      });
      return <QRCodeCanvas value={qrData} size={256} />;
    } else {
      alert("Please enter an amount to receive.");
    }
  };

  const handleVideoCapture = () => {
    try {
      const video = webcamRef.current?.getScreenshot();
      if (video) {
        const imageData = video.split(",")[1];  // Extract image data from base64 URL
        const qrResult = jsQR(imageData, 320, 240);  // Width and height for image processing
        if (qrResult) {
          handleScan(qrResult.data);
        } else {
          console.warn("QR code not detected.");
        }
      }
    } catch (error) {
      console.error("Error capturing QR code:", error);
    }
  };
  

  useEffect(() => {
    if (isPaying) {
      const interval = setInterval(handleVideoCapture, 500);  // Capture every 500ms
      return () => clearInterval(interval);  // Clean up interval on component unmount or state change
    }
  }, [isPaying]);

  return (
    <div style={styles.container}>
      <h2>QR Pay</h2>

      <div style={styles.buttonGroup}>
        <button onClick={() => setIsPaying(true)} style={styles.button}>
          Pay
        </button>
        <button onClick={() => setIsPaying(false)} style={styles.button}>
          Receive
        </button>
      </div>

      {isPaying ? (
        <div style={styles.cameraContainer}>
          <h3>Scan QR to Pay</h3>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              facingMode: "environment",
            }}
            style={styles.cameraFeed}
          />
          {scannedData && (
            <div style={styles.scannedData}>
              <p>Scanned Data:</p>
              <pre>{JSON.stringify(scannedData, null, 2)}</pre>
            </div>
          )}
        </div>
      ) : (
        <div style={styles.receiveContainer}>
          <h3>Enter Amount to Receive</h3>
          <input
            type="number"
            placeholder="Enter amount in USDe"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
          />
          {amount && <div style={styles.qrCodeContainer}>{handleReceive()}</div>}
        </div>
      )}

      {walletAddress && (
        <div style={styles.walletInfo}>
          <p><strong>Wallet Connected</strong></p>
          <p>{walletAddress}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  buttonGroup: {
    margin: "20px 0",
  },
  button: {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "white",  // White background
    color: "black",            // Black font color
    border: "1px solid black", // Optional: to give it a border
  },
  cameraContainer: {
    marginTop: "20px",
  },
  cameraFeed: {
    width: "100%",
    height: "auto",
    maxWidth: "500px",
    margin: "0 auto",
    border: "2px solid black",  // Optional: border around camera feed
  },
  scannedData: {
    marginTop: "20px",
    whiteSpace: "pre-wrap",
    textAlign: "left",
  },
  receiveContainer: {
    marginTop: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    margin: "10px 0",
    borderRadius: "5px",
    width: "100%",
    maxWidth: "300px",
  },
  qrCodeContainer: {
    marginTop: "20px",
  },
  walletInfo: {
    marginTop: "20px",
    fontSize: "14px",
    color: "gray",
  },
};

export default QRPay;
