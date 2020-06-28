const Log = () => {
const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(today);
}
export default Log;