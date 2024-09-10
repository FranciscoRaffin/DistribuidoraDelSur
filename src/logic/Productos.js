const CATALOGO = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6vITfgnauZ31dWqm4SXguFwuH33pJjL-8Vm-E9no_qFAUoXD6e_I45k7lwP7wcVOYXxsM8p3p4rSx/pub?gid=414375140&single=true&output=csv"

export async function productos() {
    const csvData = await fetch(CATALOGO)
        .then((res) => res.text())
        .then((csv) =>
            csv.split("\n")
                .slice(1)
                .map((row) => {
                    const [id, marca, tipo, nombre, img, precio_lista, precio_final] = row.split(",");
                    return {id, marca, tipo, nombre, img, precio_lista, precio_final};
                })
        );

    return csvData;


}

