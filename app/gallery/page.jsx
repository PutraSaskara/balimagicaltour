// app/gallery/page.jsx

"use client";

import { useState } from "react";
// Kita tetap butuh Image untuk fallback atau komponen lain di masa depan
import Image from "next/image"; 
import { galleryImages } from '@/data/galleryData'; 

import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryPage() {
    const [index, setIndex] = useState(-1);

    return (
        <div className="bg-background">
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <p className="text-primary font-semibold text-lg">Our Gallery</p>
                        <h1 className="text-5xl font-bold mt-2">Moments We've Captured</h1>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            A collection of beautiful moments from our guests' adventures in Bali. We hope these photos inspire your next journey with us.
                        </p>
                    </div>

                    {/* Komponen disederhanakan tanpa renderPhoto */}
                    <PhotoAlbum
                        photos={galleryImages}
                        layout="masonry"
                        targetRowHeight={150}
                        onClick={({ index: current_index }) => setIndex(current_index)}
                        // HAPUS BAGIAN DI BAWAH INI
                        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
                            <div style={wrapperStyle}>
                                {renderDefaultPhoto({ wrapped: true })}
                            </div>
                        )}
                    />

                    <Lightbox
                        index={index}
                        slides={galleryImages}
                        open={index >= 0}
                        close={() => setIndex(-1)}
                        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
                    />
                </div>
            </section>
        </div>
    );
}