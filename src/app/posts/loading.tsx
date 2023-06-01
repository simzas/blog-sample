import LoadingPostComponent from "@/components/LoadingPostComponent";

export default function Loading() {

    return (
        <section className="p-4 md:px-12 md:py-8">
            <h3 className="text-3xl mb-4">Newest posts</h3>
            <LoadingPostComponent key='1' />
            <LoadingPostComponent key='2' />
            <LoadingPostComponent key='3' />
            <LoadingPostComponent key='4' />
            <LoadingPostComponent key='5' />
            <LoadingPostComponent key='6' />
        </section>
    )
}