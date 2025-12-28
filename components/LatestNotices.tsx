import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LatestNotices: React.FC = () => {
  const { t } = useLanguage();

  // 최신 공지사항 3개만 가져오기
  const latestNotices = t.support.boardItems.slice(0, 3);

  // 최신 공지인지 확인 (7일 이내)
  const isNew = (dateStr: string) => {
    const noticeDate = new Date(dateStr.replace(/\./g, '-'));
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - noticeDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
            {t.latestNotices.title}
          </h2>
          <Link 
            to="/support/board" 
            className="text-blue-600 text-sm font-normal hover:underline transition-all"
          >
            {t.latestNotices.viewAll}
          </Link>
        </div>

        {/* Notices List */}
        <div className="space-y-3">
          {latestNotices.map((notice, index) => (
            <Link to={`/support/board/${notice.id}`} key={notice.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-gray-50 hover:bg-gray-100 rounded-2xl p-5 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      {isNew(notice.date) && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-600 text-white">
                          {t.latestNotices.new}
                        </span>
                      )}
                      <span className="text-sm text-gray-500 font-normal">{notice.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1 tracking-tight">
                      {notice.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 font-normal">
                      {notice.content}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {latestNotices.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-base font-normal">공지사항이 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestNotices;

