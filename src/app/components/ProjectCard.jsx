import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <details className='collapse bg-base-200'>
      <summary className='collapse-title text-xl font-medium'>{ project.title }</summary>
      <div className='collapse-content'> 
        <p>About: { project.about }</p>
        <p>Developed since: {project.year}</p>
        <div className='flex gap-3'>
          <p>Tech Stack: </p>
          <ul className='flex items-center'>
            {
              project.stacks.map((stack) => {
                return (
                  <li key={stack.id}>
                    <Image src={ stack.iconUrl} alt={ `${stack.title}-logo` } height={16} width={54} />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </details>
  )
};