

export default function searchArray(array, text) {
    if (text) {
        const newArray = array.filter(pod => pod.title.toLowerCase().includes(text.toLowerCase()));
        console.log(newArray);
        
    } else {
        
        return array;
    }
}