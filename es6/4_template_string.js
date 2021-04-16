// การใช้ backtick `` กด ALT ค้างไหวแล้วกด 9,6 ที่ numpad
const content = "Hello My site"
const htmlContent=`
Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
Expedita optio dignissimos laborum fugiat? Cumque, 
quaerat blanditiis veritatis voluptatum facere est ipsam voluptatibus, 
doloremque neque ab repellendus, optio impedit ad earum.
${content} and ${5+6+6} //นำมาคำนวนก็ได้นะ
`

console.log(htmlContent);