const tipcalc = () =>{
    const amount = document.getElementById('bill_amount').value;
    const perc = document.getElementById('tip_perc').value;

    let tip = amount*(perc / 100);

    let total = tip + Number(amount)
    
    document.getElementById('tip_total').value=tip;
    document.getElementById('total_billed').value = total;
}