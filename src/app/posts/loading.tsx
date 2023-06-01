import LoadingPostComponent from "@/components/LoadingPostComponent";

export default function Loading() {

    return (
        <section className="p-4 md:px-12 md:py-8">
            <h3 className="text-3xl mb-4">Newest posts</h3>
            {[...Array(10).keys()].map((i) => (
                <LoadingPostComponent key={i} />
            ))}
        </section>
    )
}