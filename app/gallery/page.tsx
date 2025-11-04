'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ZoomIn, Play, Panorama, School } from 'lucide-react';
import { useState } from 'react';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const photoCategories = [
    { id: 'all', label: 'All' },
    { id: 'events', label: 'Events' },
    { id: 'sports', label: 'Sports' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'classroom', label: 'Classroom' },
    { id: 'facilities', label: 'Facilities' },
  ];

  const photos = [
    {
      id: 1,
      title: 'Annual Sports Meet',
      category: 'sports',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDhJ0_fquF5TFMbcg8NfDFPVtBJwxeTilvDmCAeWHW8dzSSkO8br5QHywFjNk1CQc5xlduR0aFYX8pJT53Bo3JQ5l9TJxUXZUt5O-TtUpSQL9UA-8_EUdF6mubGoUTthKbBN5jCsj560025m3z89AQySy2jDi04hQbXsMXIVzYUgxylFuDYbht3nGrJyMFcLF6jF3FVJ9Rt8SPOOB49j8BVRiX4Ks71BoHZTncsbrPB5kh4nQsSMWRZVPAMOMykMp5lBCyU6iq_gum4',
    },
    {
      id: 2,
      title: 'Science Exhibition',
      category: 'events',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA1nWjd7xD33y-oK8_T1-khXnV116DEukYsvqjmHT57xUmk1CqPcosCO_7CFBQVcGhjr5vBCwaxcyQAZuP--ELcgusT0hkffEbE7t-0OLrU6NvMiWEsIGgOcHJcFc_RNcnsipY6BLdA62IhqhaeY6rzchE8EkG4CgLf-EcOnp8wlMpdD_Yxw8rIbP81Sl66HmA6AtJFGM5oWZxkCx67xef6zXg3bK4XYx2UqUeTEBKdO8piX7415skmgkVqZN5qSNhnv4bUYQCnTGt7',
    },
    {
      id: 3,
      title: 'Cultural Day',
      category: 'cultural',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB096Rr-YbmCW2leV74PUK8BiS-Y3y7yT7g7dactunA8hXsK0n1Eqm7mHk7WUMHABZkTKemOsIGeXT9VLhV28Jc6fZXYK9yrXQP1MY_6h9T6qtPHwUWHVoSTtBPeeLaRIWF7n-wKe-WqBwCzRsIyQQbsNr1MbAbDmHG78h9v-zji48qEZE9ZKpHSYAsuvcavrpdr2bZH_oKr_lyL3G02nAFuAgtymT_tr5NIfj5PqdBDIbg_lmPt_kNRiYQWR5IKlnhdBq3nWqlHuKL',
    },
    {
      id: 4,
      title: 'Classroom Learning',
      category: 'classroom',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDW0aonnKnuq_dvv_DhQpV9xjhhySBFOYysT7OWshDPbeZbxIc4urS8ql8sKPjFNT1ttXUZwgORccIr23c1w-7U2O1iVlshocs5yNFuBvfgSv-jiVhHv79lriVkLULxysEp58SiZzh0ZRyUdRIdk3XAjvnIlvqK9RcEt6LJNayFeUx34e4V2i6SKWz0GK5zxIAEqcIije3QjBsJ6NhpfpXFFU-e2tQIhL78I8hZoZdtu8s9a2e1pF2-XLbV4Nk16sFCIL-0k3Io0fLe',
    },
    {
      id: 5,
      title: 'Library Facilities',
      category: 'facilities',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBDRgqX-8DbVfUPP3MK8qQ51KvhDHq11sQwKGkKSjUJ9_AW56xpKyNEA1HNxtqaiVMujtcXYbzJk3-VzFa8_F98IStN0EA7wZOehWhvfeGecirWAHoZoX_cKFC1Q-_Q7-EVlvyAfmHTOm-bsGGZdVcqo_gVtB6lRhd_2lDAjtWY3D3fyJDJpMDr32yPEQQZwsUe_DX1PKPH5ZSZtf4QEAS3igxIjtdZ8bSodr1v4KoRSMeaEuiX2GjSKYVU3HApuKj4T9S11nLmzXbl',
    },
    {
      id: 6,
      title: 'Computer Lab',
      category: 'facilities',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBlyvGIkVmzqa7OXnBHlZpGU07hjoqJ7zmnPf9VYsgYv7ic4G6r5ARE4wXxgQBYDTjQjhI653-_qSCWeTwMiYc8kK3Xn7q8u0iWZcrfkdiggWyjthiO8g09HkJH4YhYVhl11AeLVbmgdzQrJHlvQ-ceEf3I4b0efNo9XmlmWRDAcBZ_GW5UN9JFtFtcXo5WV94G2K9q-WtkqagibLqRldvKcw2ehjdeCH0wXx1ASY3C1ig8KRpoezRaMaa6E7NRXmLi4slByQpBUjOs',
    },
    {
      id: 7,
      title: 'Graduation Day',
      category: 'events',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAr9RCLvGu_IwabdYYd86piBbWGoc4jLqekf1LFoPYiIX9ZvIdY5Mq62eKzQWxu16G7xp0fKrNW3gkDzPiqrEAFYhmW8olLQZIpyAmML_ZuL7UspzXQ70v-XHCmGNqQFAb2nI7OJdp1sU1cPFgLq-Fc6veIgZ6Ylz3zY_pL1Y8QMz6rbtxd1BVdHg5wYUzYpwf0HwzEPRi3RdkmNUhf8HbWAXZq-ZtqSFjHiStfIYvFrxh4qF4_npmfEMd2CQ8Xu0ElzRmVtNwdpy',
    },
    {
      id: 8,
      title: 'Art & Craft Fair',
      category: 'cultural',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAuZr17qwPvaBP6LzuP1ZZyLHpZObGUdYzqQLrVlBRZO1GDCnYJkzTDd2MCDbL5_y6czIdZX2IWcyRoMGWeOwDiT6WYvqaQIHE6QvU2wqlDBpcNJR9nIXPTQymsujfrGsXJ8EUVX2C1-akVnrLMy7V-aiWMlDY7rqhog3_GI188guA31tr3HLYfTr7j3MzMYrYGQOY-G5PniQoU4mS77f3DOqV4JodvT4-FEGS-l67GdHKuQ5JdWTA_XbB3hpl-d2SkpWCCQ5KUzxWU',
    },
  ];

  const videos = [
    {
      id: 1,
      title: 'Campus Tour Highlights',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCbKna-N6U7zwnxDXefRt1GnyVvhX2gSdhM2-L-PcVAyNe8O23W_MR8uMcY7RcVWi6sxYfnr8ICsWv0gDseCJYLuO9KdXdrGInDbx683lIneMat7OTGauijx4BxNlGBEHOzSFkg5Fffge-6UKtavfW61tfBlXUdnkabIWNMqqlPOVvdtUBLdUw3guPYL3Cez7RgpnSoLUiQGprciAMAzF4-zcW3-QiuiuP1PYlOg9D_-VZy5bUmuijqnObLfSryG5YKnAJ5pkjRmT-C',
    },
    {
      id: 2,
      title: 'Student Testimonials',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA_K3sS5g25SQ70awaN5P21lPd3IVNc_ZdnrLaZ75khxL1-BXWkXHVRXh2TUhqVcuGplt43m3ZugcIkFI8MddNfCvP-o5F4bfo4tjgVszk1XLALNorlVlFPEVZwVvzP5nLmJXh-TmPrRY0B-d6xR8EnqPTNeSGC0kx5cnUsBfS1FNgctmcJD1BF0Vbv72Fq8teq3YcKQnf4b1rzEhagrgaXF6fe3KQHMdp2IubrBu8sShE5QkEwrv1_5cXSiEO0eeKeM6DL2Re3II4n',
    },
    {
      id: 3,
      title: 'Annual Day 2023 Highlights',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBm7717dRf7OWXJIeUuypin8rBM32-Y4pfdo5SPUdRELhE4tr4xCfxvHjGp469sifLu6rmhm0lm66GkPVHffel1-GA8gpusvzjabs4HOm9xLK4w0yqeaIfGoiUxL-xkan27oVAuzBF8xASO678nMrRK8xFqfeGO544BiyDwJdNgqirlayDyNXjlUQUINPQ-7ziRHX3LGViBJZMcxyxsTKCVYTvGt0SKF6kBMd_SyJzuBEAvwNi7a9Hgdhi06WoOJ4LzMZ4AjXvvfmQ2',
    },
  ];

  const filteredPhotos =
    activeFilter === 'all'
      ? photos
      : photos.filter((photo) => photo.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col flex-1">
            {/* Page Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight min-w-72">
                Gallery
              </h1>
            </div>

            {/* Photos Section */}
            <section className="mt-8" id="photos">
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">
                Photos
              </h2>

              {/* Filter Buttons */}
              <div className="flex gap-2 sm:gap-3 p-3 overflow-x-auto">
                {photoCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      activeFilter === category.id ? 'default' : 'outline'
                    }
                    className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 ${
                      activeFilter === category.id
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    <span className="text-sm font-medium">
                      {category.label}
                    </span>
                  </Button>
                ))}
              </div>

              {/* Photos Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {filteredPhotos.map((photo) => (
                  <Card
                    key={photo.id}
                    className="group relative overflow-hidden rounded-lg cursor-pointer border-0 shadow-sm"
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={photo.image}
                          alt={photo.title}
                          className="h-auto w-full object-cover aspect-square transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                          <div className="bg-white/30 backdrop-blur-sm p-3 rounded-full">
                            <ZoomIn className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <p className="absolute bottom-0 left-0 p-4 text-white text-base font-bold leading-tight line-clamp-2 bg-gradient-to-t from-black/60 to-transparent w-full">
                          {photo.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Videos Section */}
            <section className="mt-12" id="videos">
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">
                Videos
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {videos.map((video) => (
                  <Card
                    key={video.id}
                    className="group relative overflow-hidden rounded-lg cursor-pointer border-0 shadow-sm"
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={video.image}
                          alt={video.title}
                          className="h-auto w-full object-cover aspect-video transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full transition-transform group-hover:scale-110">
                            <Play className="h-8 w-8 text-white fill-white" />
                          </div>
                        </div>
                        <p className="absolute bottom-0 left-0 p-4 text-white text-base font-bold leading-tight line-clamp-2 bg-gradient-to-t from-black/60 to-transparent w-full">
                          {video.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Virtual Tour Section */}
            <section className="mt-16 mb-8" id="virtual-tour">
              <div
                className="relative rounded-xl overflow-hidden bg-cover bg-center p-8 md:p-12 text-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBO33FZI6wl0t6GYBylbGAPCqfkK3UW2d-pjbhm8SgCQlQ0oQL0wLqi4x3UfW4fa3sDyYdPIeWUWz4K_A57aH20ta_1qp-2fAnIgydg4OTxlsHlpRq40Ui7MRkEiRPr32ONkRT7k2SYKNCpcvHDCNsHo7mD_Mz_rx2D4CTs-DaJrg_-Ocy6kx0lI5tLV2927c35REdT0cu-JkYQo8r-FRLjmx1AB9VCVTdMsUmgGfiCWzJkWdbCB3bb74b1UeILrRpwscJqrwSzsCBR')`,
                }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                    Explore Our Campus
                  </h2>
                  <p className="text-white/90 mt-2 max-w-2xl text-center">
                    Can&apos;t visit us in person? No problem. Take a stroll
                    through our campus from anywhere in the world with our
                    interactive virtual tour.
                  </p>
                  <Button className="mt-6 h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white text-base font-bold">
                    <Panorama className="h-5 w-5 mr-2" />
                    Take a Virtual Tour
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
