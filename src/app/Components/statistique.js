"use client";

import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Statistique({
    width = window.innerWidth, // Utiliser 100% de la largeur de la fenêtre
    height = 350,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 20,
    marginLeft = 20
}) {
    const [data, setData] = useState([]);
    const svgRef = useRef(); // Create a ref for the SVG element

    // Fetch data from the API when the component mounts
    useEffect(() => {
        axios.get('/api/')  // Corriger la route de l'API
            .then(response => {
                setData(response.data);  // Supposer que response.data est un tableau de chiffres
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        if (data.length === 0) return;

        // D3 setup
        const svg = d3.select(svgRef.current) // Select the SVG using the ref
            .attr('width', width)
            .attr('height', height);

        // D3 scales
        const x = d3.scaleBand()
            .domain(d3.range(data.length).map(i => `Mois ${i + 1}`)) // X-axis labels for each month
            .range([marginLeft, width - marginRight])  // SVG width
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data)])  // Data extent (min/max)
            .range([height - marginBottom, marginTop]);  // SVG height

        const tooltip = d3.select('body').append('div')  // Ajouter un tooltip à la page
            .attr('class', 'absolute bg-green-200 rounded-lg p-2 hidden')  // Utiliser Tailwind pour le style
            .style('display', 'none');

        // Ajouter le dégradé
        svg.append('defs').append('linearGradient')
            .attr('id', 'line-gradient')
            .attr('x1', '0%')
            .attr('y1', '0%')
            .attr('x2', '100%')
            .attr('y2', '100%')
            .selectAll('stop')
            .data([
                { offset: '0%', color: 'steelblue' },
                { offset: '100%', color: 'lightblue' }
            ])
            .enter().append('stop')
            .attr('offset', d => d.offset)
            .attr('stop-color', d => d.color);

        // Dessiner les points
        svg.selectAll('.point')
            .data(data)
            .enter().append('circle')
            .attr('class', 'point')
            .attr('cx', (d, i) => x(`Mois ${i + 1}`) + x.bandwidth() / 2) // Position X
            .attr('cy', d => y(d)) // Position Y
            .attr('r', 5) // Rayon des cercles
            .attr('fill', 'steelblue') // Couleur des cercles
            .on('mouseover', (event, d) => {
                tooltip.style('display', 'block')
                    .html(`Performance: ${d} <br> Pourcentage: ${((d / d3.sum(data)) * 100).toFixed(2)}%`) // Afficher les détails
                    .style('left', `${event.pageX + 5}px`)
                    .style('top', `${event.pageY - 28}px`);
            })
            .on('mouseout', () => tooltip.style('display', 'none'));

        // Dessiner la ligne avec le dégradé
        const line = d3.line()
            .x((d, i) => x(`Mois ${i + 1}`) + x.bandwidth() / 2) // X-coordinate for each point
            .y(d => y(d));  // Y-coordinate for each point

        svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', 'url(#line-gradient)') // Utiliser le dégradé
            .attr('stroke-width', 2) // Épaisseur de la ligne
            .attr('d', line);

        // Ajouter les étiquettes des mois sur l'axe X
        svg.append('g')
            .attr('transform', `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom(x).tickFormat(d => d)); // Utiliser le format de mois pour l'axe

        // Ajouter l'axe Y
        svg.append('g')
            .attr('transform', `translate(${marginLeft}, 0)`)
            .call(d3.axisLeft(y));

    }, [data]); // Re-render the chart when data changes

    return (
        <svg ref={svgRef} className="w-full h-96" /> // Attach ref to the SVG element
    );
}
