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

function redirectToStore(androidStoreUrl, iosStoreUrl) {
    const deviceType = getDeviceType();
    const pathAndQuery = window.location.pathname + window.location.search + window.location.hash;
    
    if (deviceType === "Android") {
        window.location.href = androidStoreUrl + pathAndQuery;
    } else if (deviceType === "iOS") {
        window.location.href = iosStoreUrl + pathAndQuery;
    } else {
        window.location.href = "https://www.dmart.in/" + pathAndQuery;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    redirectToStore(
        "https://play.google.com/store/apps/details?id=in.dmart", // Android Play Store URL
        "https://apps.apple.com/in/app/dmart-online-grocery-shop/id1121933197" // iOS App Store URL
    );
});
