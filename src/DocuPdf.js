import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const DocuPdf = ({poema}) => {
    const lorem = "lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    return (
        <Document>
            <Page size="A4">
                <View
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    >
                        <Text style={{color: "#3388af", fontSize: "42px"}}>
                            {poema ? poema.title : "..."}
                        </Text>
                        <Text>Por {poema ? poema.poet.name : "..."}</Text>
                        <image
                        src="https://picsum.photos/600/400"
                        alt="random image"
                        style={{maxWidth: "600px", maxHeight: "400"}}
                        />
                        <Text
                        style={{
                            color:"gray",
                            fontStyle:"italic",
                            fontSize: "10px",
                        }}
                        >
                            {lorem}
                        </Text>
                        <Text style={{maxWidth: "50ch"}}>{poema ? poema.content : null}
                        </Text>


                </View>

            </Page>
        </Document>
    )
}
export default DocuPdf;