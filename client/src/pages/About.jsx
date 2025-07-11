import React from 'react'

function About() {
  return (
    <div>

      <h1 className='pb-2' style={{ fontSize: '30px' }}>
        <strong>About Pokémon Awesome</strong>
      </h1>

      <p className='pt-5'>
        <b>Pokémon Awesome </b>
        is basically just another random Pokémon-related web-application that appeared in the wild.
      </p>

      <p className='pt-5'>
        The creator of this web application developed it simply for the sake of having fun, while also learning various aspects of software engineering and UI/UX design.
      </p>

      <p style={{ fontSize: '18px' }}>
        <h2 className='pt-7 pb-2'><b>Project:</b></h2>

        <a href="https://github.com/Foco-forca-e-fe/Pokedex_Project">
          <button className="btn btn-outline">

            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 15 15" height="1.3em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg>
            GitHub</button></a>
      </p>

      <hr className='mb-7 mt-8' />

      <h2 style={{ fontSize: '20px' }}>
        <b>Content & Copyright</b>
      </h2>

      <p className='pt-5'>
        This unofficial web application offers certain information about Pokémon series or games. However, arts, visuals, and names featured herein are the properties of Nitendo, Game Freak, & The Pokémon Company.
      </p>

      <p className='pt-5'>
        Please note that this web application is <b>not official</b> and is not linked to the company mentioned above. Some images used in this web application are copyrighted and belong to Nintendo, Game Freak, or The Pokémon Company. They are used in accordance with the laws of <b>Fair Use</b>. No copyright infringement intended.
      </p>

      <p className='pt-5'>The main data sources for the content of this web application are:
      </p>

      <li>
        <b> PokeAPI </b>
        <a class="text-link" href="https://pokeapi.co/">
          (
          <a className='text-blue-500'>
            https://pokeapi.co/
          </a>
          )
        </a>
      </li>

      <li>
        <b> Pokémon TCG API </b>
        <a class="text-link" href="https://pokemontcg.io/">
          (
          <a className='text-blue-500'>
            https://pokemontcg.io/
          </a>
          )
        </a>
      </li>

      <p className='pt-5'>
        Special thanks to <a class="text-link" href="https://x.com/simeydotme">
          Simon Goellner
        </a> for his awesome open-source Pokémon cards animation on <a class="text-link" href="https://poke-holo.simey.me/" className='text-blue-500'>
          https://poke-holo.simey.me/
        </a>.
      </p>

      <hr className='mb-7 mt-8' />

      <h1 style={{ fontSize: '20px' }}>
        <b className='pt-5'>Privacy Policy</b>
      </h1>

      <p className='pt-5'>
        Here's a straightforward summary of how we handle your information:
      </p>

      <li className='pt-5 pl-2'>
        <b>Information Collection:</b> No personal information is required to access this website or view any regular pages.
      </li>

      <li className='pt-5 pl-2'>
        <b>Third-Party Links:</b> Our website may contain links to third-party websites. Please note that we are not responsible for their privacy practices. We encourage you to review their privacy policies.
      </li>

      <li className='pt-5 pl-2'>
        <b>Limitation of Liability:</b> We do not guarantee uninterrupted, secure, or error-free access to the website, and we make no warranties regarding the accuracy of our content. We shall not be liable for any interruptions, delays, errors in the operation of the website, or any damages arising from its use.
      </li>

      <li className='pt-5 pl-2'>
        <b>Consent:</b> By using our website, you consent to our Privacy Policy and agree to its terms.
      </li>

      <p className='pt-5 pl-8 italic text-gray-500'>
        <i>— Last updated at 11 July 2025.</i>
      </p>

      <nav class="my-4 inline-flex items-center rounded-md border bg-B-card py-2 pl-2.5 pr-2.5">

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mr-2 flex-none"><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path><path d="M9.7 17l4.6 0"></path></svg>

        <p>  We may update our Privacy Policy from time to time.</p>

      </nav>

    </div>

  );
}

export default About;