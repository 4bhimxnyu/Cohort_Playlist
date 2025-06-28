async function validateIP() {
    const response = await fetch("https://api.ipify.org/?format=json");
    const data = await response.json();
    const result = await fetch(`https://api.ipinfo.io/lite/${data.ip}?token=b75f4b11a81ed4`);
    const ipData = await result.json();
    document.getElementById("ip").innerHTML = `IP Address: ${ipData.ip} <br> asn: ${ipData.asn} <br> Continent: ${ipData.continent} <br> Country: ${ipData.country}`;
    console.log(ipData);
}