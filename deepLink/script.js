function getDeviceType() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    
    if (/iPad|iPhone|iPod|Macintosh/.test(userAgent) && ('ontouchend' in document)) {
        return "iOS";
    }
    
    return "Unknown";
}

function openAppOrStore(androidStoreUrl, iosStoreUrl) {
    const deviceType = getDeviceType();
    
    if (deviceType === "Android") {
        setTimeout(() => {
            window.location.href = androidStoreUrl;
        }, 2000);
    } else if (deviceType === "iOS") {
        setTimeout(() => {
            window.location.href = iosStoreUrl;
        }, 2000);
    } else {
        window.location.href = "https://www.dmart.in/";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    openAppOrStore(
        "https://play.google.com/store/apps/details?id=in.dmart", // Android Play Store URL
        "https://apps.apple.com/in/app/dmart-online-grocery-shop/id1121933197" // iOS App Store URL
    );
});
