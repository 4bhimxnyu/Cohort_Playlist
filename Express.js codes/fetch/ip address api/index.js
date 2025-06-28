async function validateIP() {
    const response = await fetch("https://api.ipify.org/?format=json");
    const data = await response.json();
    const result = await fetch(`https://api.ipinfo.io/lite/${data.ip}?token=b75f4b11a81ed4`);
    const ipData = await result.json();
    console.log(ipData);
}