import React from 'react';
import { useLanguage } from '../../components/LanguageContext';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Calendar } from 'lucide-react';

const BoardDetailPage: React.FC = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = t.support.boardItems.find((item) => item.id === Number(id));

  if (!post) {
    return (
        <div className="pt-32 min-h-screen bg-dark flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Post not found</h2>
            <button onClick={() => navigate('/support/board')} className="text-electric hover:underline">
                Back to Board
            </button>
        </div>
    );
  }

  return (
    <div className="pt-32 min-h-screen bg-dark">
      <div className="max-w-4xl mx-auto px-6 pb-24">
        
        <Link to="/support/board" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={18} />
            Back to List
        </Link>

        <article className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <header className="mb-8 border-b border-white/10 pb-8">
                <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Notice</span>
                <h1 className="text-3xl font-bold mb-6 text-white">{post.title}</h1>
                <div className="flex items-center gap-6 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{post.author}</span>
                    </div>
                </div>
            </header>
            
            <div className="prose prose-invert prose-lg max-w-none whitespace-pre-line leading-relaxed">
                <div className="text-white text-base leading-relaxed">
                    {post.content}
                </div>
            </div>
        </article>

        <div className="mt-12 flex justify-between">
            <button 
                onClick={() => navigate('/support/board')}
                className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition font-bold text-white"
            >
                List
            </button>
        </div>

      </div>
    </div>
  );
};

export default BoardDetailPage;