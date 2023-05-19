function ergun() {
    let sphericity = document.getElementById('sphericity').value        // sphericity
    let dp = document.getElementById('dp').value/1000                   // particle diameter in m
    let e = document.getElementById('e').value                          // bed porosity
    let rho_p = document.getElementById('rho_p').value                  // particle density
    let m = document.getElementById('m').value/3600                     // gas flowrate
    let rho_g = document.getElementById('rho_g').value                  // gas density             
    let mu_g = document.getElementById('mu_g').value/1000               // gas viscosity - cP to Pa*s
    let dc = document.getElementById('dc').value                        // column diameter
    let L = document.getElementById('L').value                          // column height
    
    let flowrate = (m/rho_g);
    let V = flowrate/(3.1415926535*Math.pow(dc/2,2));                // gas velocity from geometry and density

    let deltaP = (150*mu_g*Math.pow((1-e),2)*V)/(Math.pow(sphericity,2)*Math.pow(dp,2)*Math.pow(e,3))+((1.75*rho_g*(1-e)*V*Math.abs(V))/(sphericity*dp*Math.pow(e,3)));
    let deltaPtotal = deltaP*L;

    document.getElementById('vflow-output').innerHTML = (flowrate*3600).toFixed(2)+' m<sup>3</sup>/h';

    document.getElementById('sflow-output').innerHTML = V.toFixed(2)+' m/s';

    document.getElementById('pdrop-output').innerHTML = (deltaP/100000).toFixed(5)+' bar';

    document.getElementById('totalp-output').innerHTML = (deltaPtotal/100000).toFixed(5)+' bar';
}

function reload() {
    window.location.reload()
}