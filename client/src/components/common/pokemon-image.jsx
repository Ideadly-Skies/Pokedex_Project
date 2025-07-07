import React, { useEffect, useState } from 'react';

export default function PokemonImage({
  idPokemon,
  size,
  priority,
  className,
  imgClassName,
  alt = 'pokemon',
  onError,
  ...props
}) {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchImage = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
        const data = await res.json();

        if (!isMounted) return;

        const sprite =
          data?.sprites?.other?.['official-artwork']?.front_default ||
          data?.sprites?.front_default ||
          data?.sprites?.versions?.['generation-iv']?.['heartgold-soulsilver']?.back_default ||
          '';

        setImageUrl(sprite);
      } catch (err) {
        console.error(`Failed to fetch image for Pokémon ID ${idPokemon}`, err);
        setImageUrl('');
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchImage();

    return () => {
      isMounted = false;
    };
  }, [idPokemon]);

  if (loading) {
    return (
      <div
        className={className}
        style={{ width: size, height: size, display: 'inline-block', background: '#eee' }}
      >
        Loading...
      </div>
    );
  }

  if (!imageUrl) {
    return (
      <div
        className={className}
        style={{ width: size, height: size, display: 'inline-block', background: '#eee' }}
      >
        Image not found
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      width={size}
      height={size}
      className={imgClassName || className}
      onError={onError}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
}
