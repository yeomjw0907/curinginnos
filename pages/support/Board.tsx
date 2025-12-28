import React from 'react';
import { useLanguage } from '../../components/LanguageContext';
import { Link } from 'react-router-dom';

const BoardPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 min-h-screen bg-dark text-white">
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-white">{t.support.board}</h1>
            <p className="text-gray-300">{t.support.pages.board.subtitle}</p>
        </div>

        <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-12 bg-white/5 p-4 text-sm font-bold text-gray-300 border-b border-white/10">
                <div className="col-span-2 text-center">{t.support.pages.board.date}</div>
                <div className="col-span-8 pl-4">{t.support.pages.board.title}</div>
                <div className="col-span-2 text-center">{t.support.pages.board.author}</div>
            </div>
            {t.support.boardItems.map((item) => (
                <Link 
                    to={`/support/board/${item.id}`} 
                    key={item.id} 
                    className="grid grid-cols-12 p-4 text-sm border-b border-white/5 hover:bg-white/5 transition cursor-pointer group"
                >
                    <div className="col-span-2 text-center text-gray-400 group-hover:text-gray-200">{item.date}</div>
                    <div className="col-span-8 pl-4 font-medium text-white group-hover:text-electric transition-colors">{item.title}</div>
                    <div className="col-span-2 text-center text-gray-400 group-hover:text-gray-200">{item.author}</div>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BoardPage;