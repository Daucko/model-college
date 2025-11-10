import StaffProfile from '@/components/shared/StaffProfile';
import { getStaffMemberById } from '@/data/staff-data';
import { notFound } from 'next/navigation';

interface StaffPageProps {
  params: {
    id: string;
  };
}

export default function StaffPage({ params }: StaffPageProps) {
  const staffMember = getStaffMemberById(params.id);

  if (!staffMember) {
    notFound();
  }

  return <StaffProfile staffMember={staffMember} />;
}

export async function generateStaticParams() {
  const allStaff = Object.keys(await import('@/data/staff-data')).map((id) => ({
    id,
  }));
  return allStaff;
}

export async function generateMetadata({ params }: StaffPageProps) {
  const staffMember = getStaffMemberById(params.id);

  if (!staffMember) {
    return {
      title: 'Staff Member Not Found',
    };
  }

  return {
    title: `${staffMember.name} - ${staffMember.title} | Model College`,
    description: staffMember.shortDescription,
  };
}
