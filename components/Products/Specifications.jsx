const Specifications = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className="bg-gray-50">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Label</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { label: "Box Style", value: "Customized, Tuck Flap Box, Pillow Box, Gable Style, Sleeve Style Box, Mailer Style Collapsible Mag Closure etc." },
                        { label: "Dimension", value: "Dimension or the size of the box is usually measured with the help of Length x Width X Height Formula (Height = Top to Bottom of the box), Width (Left to right of the box) and Length front to back of the box." },
                        { label: "Size", value: "All Custom Size and standard sizes are Available." },
                        { label: "Quantities", value: "100 to 500,000 boxes can be ordered in one month." },
                        { label: "Paper Stock", value: "10pt to 24pt (60lb to 400lb) Eco-Friendly Kraft, E-flute Corrugated, Bux Board, Cardstock, Uncoated Super White Cardboard and Rigid Stock." },
                        { label: "Printing Type", value: "Offset printing Method, Screen Printing, Plain, CMYK Colors, PMS (Pantone Matching System), Spot Colors." },
                        { label: "Finishing Or Add ons", value: "Soft Touch Lamination, Gloss Lamination, Matte Lamination, Gloss AQ, Gloss UV, Matte UV, Spot UV, Embossing Debossing and Foiling." },
                        { label: "Additional Options", value: "Creasing, Die Cutting, Gluing, Perforation, Blind Embossing, Window Patching, (Gold, silver, Copper, Red, Blue Foil Stamping)" },
                        { label: "Design Proofing", value: "Box Template (free), Flat View, 3D Mock-up, Physical Sampling (On request Paid)" },
                        { label: "Turnaround Time", value: "Standard Turnaround Time: After getting the artwork approved, it takes 9 to 11 business days for producing the boxes and further 24 to 48 Hours for the shipment to be delivered at your doorstep. Custom add on orders can take 2 to 4 days extra." },
                        { label: "Expedite Turnaround Time", value: "Once the job is sent for production after the approval of artwork the production will take at least 4 to 6 Biz days for printing and further 24 to 48 hours for delivery at your doorstep. Urgent deadlines can be achieved." },
                        { label: "Shipping services", value: "We use DHL, FedEx USPS and UPS to Ship boxes. Sea shipping is also an option that can be considered on specific requests." },
                    ].map((row, index) => (
                        <tr className={`border-b ${index % 2 ? "bg-[#E5E5E5]" : "bg-[#F1F1F1]"}`} key={row.label}>
                            <td className="py-3 px-1 lg:px-4 text-sm font-medium text-gray-700">{row.label}</td>
                            <td className="py-3 px-1 lg:px-4 text-sm">{row.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Specifications;
