import PokemonDetails from "@/components/PokemonDetails"

export default function Detail({ params }: { params: { id: string} }) {
    return (
        <>
            <PokemonDetails id={params.id} />
        </>
    );
}
