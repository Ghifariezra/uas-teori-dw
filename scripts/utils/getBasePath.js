export function getBasePath() {
    return location.hostname.includes("github.io")
        ? "/uas-teori-dw/"
        : "/";
}