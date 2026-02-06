const team = [
  {
    id: 1,
    name: 'John Smith',
    position: 'CEO & Founder',
    bio: 'Visionary leader with 20+ years in IT industry',
    avatar: '👨‍💼'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'CTO',
    bio: 'Expert in cloud and AI technologies',
    avatar: '👩‍💻'
  },
  {
    id: 3,
    name: 'Michael Brown',
    position: 'Lead Developer',
    bio: 'Full-stack developer with expertise in modern frameworks',
    avatar: '👨‍💻'
  },
  {
    id: 4,
    name: 'Emily Davis',
    position: 'Product Manager',
    bio: 'Strategic thinker focused on user experience',
    avatar: '👩‍💼'
  },
]

export default function Team() {

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600">
            Talented professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition"
            >
              <div className="text-7xl mb-4">{member.avatar}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-3">
                {member.position}
              </p>
              <p className="text-gray-600">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
