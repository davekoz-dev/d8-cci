import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { d8CCIMembers } from '@/lib/constants/d8-cci-data';

export function MemberChambers() {
  return (
    <section className="bg-[#F7F8F9] py-6">
      <Container size="xl">
        <div className="flex flex-col items-center">
          <p className="text-[#414042]/50 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium mb-4">
            Member Chambers of Commerce &amp; Industry
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {[...d8CCIMembers].sort((a, b) => a.chamberName.localeCompare(b.chamberName)).map((member) => (
              <div
                key={member.acronym}
                className="group flex flex-col items-center gap-1.5"
              >
                <div
                  className="
                    w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden
                    border-2 border-gray-200
                    ring-2 ring-transparent
                    group-hover:ring-[#00B3AA]/50 group-hover:border-gray-300
                    group-hover:scale-110
                    transition-all duration-300
                    shadow-md shadow-black/10
                  "
                >
                  <Image
                    src={member.logo}
                    alt={`${member.country} flag`}
                    width={48}
                    height={48}
                    sizes="48px"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] sm:text-xs text-[#414042]/60 group-hover:text-[#414042]/90 font-medium transition-colors">
                  {member.acronym}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
