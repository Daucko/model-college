'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { ShowcaseItem, VideoItem } from '@/types/showcase';

const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    title: 'Campus Life',
    category: 'campus',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDntmNCCCPaV1lu2BrgNoqZfwIV2zKN51H7T9qDi0JrBBSvltnYjRDqUQxronpIHoIl_AqAHKyjBaaOFF2sD7V9VUJ0vDxp75bCkD4tpVkEkk7Wy8bh-nlyZ9lGdng_5rfB0AfGv1WFTGgceJaXEMk-l2eUuCAkYJBzoWXZf3NWj6oh2THIXcIXqvuC791RJkV0wsqQWrBADUdlcRemAs3DfTWh0lccYH30rqOS2kDytuVEIiwpjJwxSJIQCzYuW-bY-dKIigjEAfV2',
    alt: 'Primary school students in classroom',
    cols: 'col-span-2 row-span-2',
    type: 'image',
  },
  {
    id: 2,
    title: 'Arts & Culture',
    category: 'arts',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8bjb_aIOqc9g2Jp-8Ti089b6eNwcNEIWTtwLYHRjzes_MUqCEGcQVrRy5WqieOJ98m9ZvfHDMA4EIEE6sntVgF3Aw2jUd1V5jHafigmZGF8SgSgYx2KCvH0Sd-9Su2d8z_8n3VSbmP-8bOtcdpmtKlMeJ4U1DSW3zr_4AXN4QCgLnmpQClPYFR0m0WkZ41xzgJfoIiOJ1UNDguNJRAJSiewyIFogkbNOjyQLAKXPga_j0wT0iYTrebdua8n8-lyPh0YTaiVYFL7_z',
    alt: 'Child painting',
    cols: 'col-span-1 row-span-1',
    type: 'image',
  },
  {
    id: 3,
    title: 'Video Tour',
    category: 'video',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCoqLfTlVM9J9IaIxpui_enDQbIwrHhffZf5nwijceNSMPNoHW-MBGJGXT4omz3uVRdlUCQIkJUV_UTAUFP9Lh6slpcXhlN1jKemr23HONAi_4qRB1e_pKgSy57oLOeX_YsjS3PwqZ5Zoj82QLFQ6SX1AhGCYYFRyAjOnJIKxhyUsjPkQeSKUbYwiud0NwaTGphsxwLA6QsdckuuftHA0mCgxkODcQhGmQD6xw14oNOFqyksxcKqxh7G5oqEKix7jSwDzy0vNhIOiuZ',
    alt: 'Students in library',
    cols: 'col-span-1 row-span-1',
    type: 'video',
  },
  {
    id: 4,
    title: 'Early Years',
    category: 'early-years',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBL4G0QO89TUzaBXlWNzYbTU0OXF5e-g_jeMebSF2FzrpNroZ5fIoiS3opQaD8B7hOzC0Bz0YYp4_tskpNS_DWF692SSMWIE7_grQK4tr3udlIxFb-_aUSE_ZlrYAZuLeX7u13dnMHOE_6zakm7wD32BLrlECWbKGtZ96uAe42eFYTlkUTHUeDflWHPt_BVUAEM-rjZYc1gbBSQlo_UhkAoVxrJHzx3R-pfza8Fgvz5juG37Q9Y7P-Qx1Iesr8_OXhimgrgNl0hmpq_',
    alt: 'Children playing with blocks',
    cols: 'col-span-1 row-span-1',
    type: 'image',
  },
  {
    id: 5,
    title: 'Sports',
    category: 'sports',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBXLdP4YZX-_0KNuOOJ85h_SvGtQ4dDCOoIkpkLkdR5ThXzd0hG3t0rzdO93XsY8R8a_ZAWgdQXSRqZYx1MkF4J8VhkYjUaHUsCvkjuq4GIYkbPXEpELnwTjcBAoZGjjPDMTfYGUaCTcg3vZcjPdq_JY26QiDVbPpy9TEcpwX_ZRqryCfNcTzOX-nkpXsREWfdsxnB9MHwdo2BokYvmXwbK-A19_KC3tZ6Uvx9d9pGvuk_22KBsncNZ9axkvS1a6agnKVEf1_f9NaIc',
    alt: 'Students in a sports event',
    cols: 'col-span-1 row-span-1',
    type: 'image',
  },
];

const videoItems: VideoItem[] = [
  {
    id: 1,
    title: 'Campus Tour Highlights',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbKna-N6U7zwnxDXefRt1GnyVvhX2gSdhM2-L-PcVAyNe8O23W_MR8uMcY7RcVWi6sxYfnr8ICsWv0gDseCJYLuO9KdXdrGInDbx683lIneMat7OTGauijx4BxNlGBEHOzSFkg5Fffge-6UKtavfW61tfBlXUdnkabIWNMqqlPOVvdtUBLdUw3guPYL3Cez7RgpnSoLUiQGprciAMAzF4-zcW3-QiuiuP1PYlOg9D_-VZy5bUmuijqnObLfSryG5YKnAJ5pkjRmT-C',
    alt: 'A video thumbnail showing a campus drone shot',
  },
  {
    id: 2,
    title: 'Student Testimonials',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_K3sS5g25SQ70awaN5P21lPd3IVNc_ZdnrLaZ75khxL1-BXWkXHVRXh2TUhqVcuGplt43m3ZugcIkFI8MddNfCvP-o5F4bfo4tjgVszk1XLALNorlVlFPEVZwVvzP5nLmJXh-TmPrRY0B-d6xR8EnqPTNeSGC0kx5cnUsBfS1FNgctmcJD1BF0Vbv72Fq8teq3YcKQnf4b1rzEhagrgaXF6fe3KQHMdp2IubrBu8sShE5QkEwrv1_5cXSiEO0eeKeM6DL2Re3II4n',
    alt: 'A video thumbnail of students talking to the camera',
  },
  {
    id: 3,
    title: 'Annual Day 2023 Highlights',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBm7717dRf7OWXJIeUuypin8rBM32-Y4pfdo5SPUdRELhE4tr4xCfxvHjGp469sifLu6rmhm0lm66GkPVHffel1-GA8gpusvzjabs4HOm9xLK4w0yqeaIfGoiUxL-xkan27oVAuzBF8xASO678nMrRK8xFqfeGO544BiyDwJdNgqirlayDyNXjlUQUINPQ-7ziRHX3LGViBJZMcxyxsTKCVYTvGt0SKF6kBMd_SyJzuBEAvwNi7a9Hgdhi06WoOJ4LzMZ4AjXvvfmQ2',
    alt: 'A video thumbnail showing highlights from Annual Day',
  },
];

type CategoryType =
  | 'all'
  | 'campus'
  | 'arts'
  | 'sports'
  | 'early-years'
  | 'video';

export function Showcase() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const filteredItems =
    activeCategory === 'all'
      ? showcaseItems
      : showcaseItems.filter((item) => item.category === activeCategory);

  const categories: CategoryType[] = [
    'all',
    'campus',
    'arts',
    'sports',
    'early-years',
    'video',
  ];

  return (
    <section className="py-16 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Photo & Video Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into life at Model College.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="capitalize"
            >
              {category === 'all' ? 'All' : category.replace('-', ' ')}
            </Button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={`/gallery/${item.category}`}
              className={`group relative block overflow-hidden rounded-lg ${item.cols} aspect-square`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/30" />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  {item.type === 'video' ? (
                    <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full transition-transform group-hover:scale-110">
                      <Play className="h-8 w-8 text-white fill-current" />
                    </div>
                  ) : (
                    <h3 className="text-white text-xl font-bold text-center">
                      {item.title}
                    </h3>
                  )}
                </div>

                {/* Bottom Title for non-video items */}
                {item.type !== 'video' && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-white text-base font-bold leading-tight line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Videos Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Featured Videos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoItems.map((video) => (
              <div
                key={video.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer bg-card border"
              >
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full transition-transform group-hover:scale-110">
                      <Play className="h-8 w-8 text-white fill-current" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {video.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/gallery" className="flex items-center gap-2">
              Explore Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
