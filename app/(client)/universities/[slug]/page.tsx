import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { universityData } from '@/consts';

type tParams = Promise<{ slug: string }>;
export default async function UniversityPage(props: { params: tParams }) {
  const { slug } = await props.params;
  const university = universityData.find(
    (u) => u.slug.toLowerCase() === slug
  );

  if (!university) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-12 space-y-8">
      <div className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src={university.image}
          alt={`${university.name} campus`}
          fill
          className="object-contain rounded-lg"
        />
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">{university.name}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{university.description}</p>
        <Button asChild className='bg-zinc-900 text-zinc-200 hover:bg-zinc-800'>
          <a href={university.website} target="_blank" rel="noopener noreferrer">
            Visit Website
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      <Card className='max-w-4xl mx-auto'>
        <CardHeader>
          <CardTitle>Departments</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {university.departments.map((department, index) => (
              <li key={index} className="flex items-center">
                <span
                  className="w-2 h-2 bg-primary rounded-full mr-2"
                  aria-hidden="true"
                ></span>
                {department}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

