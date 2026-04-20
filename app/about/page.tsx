import BackButton from '@/app/components/back-button';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center min-h-screen p-6 sm:p-12 bg-sentimental text-white">
      <div className="w-full max-w-5xl mb-8">
        <BackButton />
      </div>

      <div className="w-full max-w-5xl">
        <h1 className="text-large-comic mb-12">Despre noi</h1>

        <div className="space-y-6">
          <p className="text-base-comic leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-base-comic leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-base-comic leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </main>
  );
}
