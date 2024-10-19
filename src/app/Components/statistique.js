"use client";

import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Statistique({
  width = "100%", // Ajustement responsive pour utiliser la largeur disponible
  height = 300,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 20
}) {
  const [data, setData] = useState([]);
  const svgRef = useRef();
  const containerRef = useRef();

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

  // Responsive rendering with D3
  useEffect(() => {
    if (data.length === 0) return;

    // Set width based on parent container width
    const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0;

    // D3 setup
    const svg = d3.select(svgRef.current)
      .attr('width', containerWidth)
      .attr('height', height);

    // Remove previous elements to prevent overlap
    svg.selectAll("*").remove();

    // D3 scales
    const x = d3.scaleBand()
      .domain(d3.range(data.length).map(i => `Mois ${i + 1}`)) // X-axis labels for each month
      .range([marginLeft, containerWidth - marginRight])  // SVG width
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data)])  // Data extent (min/max)
      .range([height - marginBottom, marginTop]);

    const tooltip = d3.select('body').append('div')
      .attr('class', 'absolute bg-green-200 rounded-lg p-2 hidden')
      .style('display', 'none');

    // Adding gradient
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

    // Drawing points
    svg.selectAll('.point')
      .data(data)
      .enter().append('circle')
      .attr('class', 'point')
      .attr('cx', (d, i) => x(`Mois ${i + 1}`) + x.bandwidth() / 2)
      .attr('cy', d => y(d))
      .attr('r', 5)
      .attr('fill', 'steelblue')
      .on('mouseover', (event, d) => {
        tooltip.style('display', 'block')
          .html(`Performance: ${d} <br> Pourcentage: ${((d / d3.sum(data)) * 100).toFixed(2)}%`)
          .style('left', `${event.pageX + 5}px`)
          .style('top', `${event.pageY - 28}px`);
      })
      .on('mouseout', () => tooltip.style('display', 'none'));

    // Drawing line with gradient
    const line = d3.line()
      .x((d, i) => x(`Mois ${i + 1}`) + x.bandwidth() / 2)
      .y(d => y(d));

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'url(#line-gradient)')
      .attr('stroke-width', 2)
      .attr('d', line);

    // X-axis labels
    svg.append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x));

    // Y-axis
    svg.append('g')
      .attr('transform', `translate(${marginLeft}, 0)`)
      .call(d3.axisLeft(y));

  }, [data, width, height]); // Re-render the chart when data or dimensions change

  return (
    <div ref={containerRef} className="w-full h-auto border border-black-500 p-5 rounded-lg shadow-lg w-64 h-40 p-4 m-2"> 
    <h1 className="text-[28px] p-2 m-4" >Statistique </h1>
      <svg ref={svgRef} className="w-full h-96" /> 
    </div>
  );
}
