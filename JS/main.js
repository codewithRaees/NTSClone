const tabsitems = document.querySelectorAll('.tabbtn')
const tabcontent = document.querySelectorAll('.tabContainer')
const accordian = document.querySelectorAll('.accordian')



// Select tab content item

function selectItem(e){
    console.log("Hi")
    //Remover Border from All
    removerborder();
    removershow();
    // Add border to current tab
    this.classList.add('tab-border')
// Grab content from DOM
const tabcontentitem=document.querySelector(`#${this.id}-container`)
//Add show class
tabcontentitem.classList.add('show')
}
console.log("Hi")

// Function for Border removal
function removerborder()
{
    tabsitems.forEach(item => item.classList.remove('tab-border'))
}
function removershow()
{
    tabcontent.forEach(item => item.classList.remove('show'))
}

// Listen for Tab click
tabsitems.forEach(item => item.addEventListener('click', selectItem))


// Accordian Function
function removeactiveAccordian()
{
    accordian.forEach(item => item.classList.remove('active'))
    accordian.forEach(item => item.classList.remove('titlebg'))
}
function ShowAccordian(e)
{
    removeactiveAccordian()
    this.classList.add('active')
    this.classList.add('titlebg')


}
accordian.forEach(item => item.addEventListener('click', ShowAccordian))

