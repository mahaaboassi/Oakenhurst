import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HomeOne } from "./pages/home/HomeOne";
import { useWow } from "./lib/hooks/useWow";
import { HomeTwo } from "./pages/home/HomeTwo";
import { HomeThree } from "./pages/home/HomeThree";
import { HomeFour } from "./pages/home/HomeFour";
import { HomeFive } from "./pages/home/HomeFive";
import { HomeSix } from "./pages/home/HomeSix";
import { HomeSeven } from "./pages/home/HomeSeven";
import { HomeEight } from "./pages/home/HomeEight";
import { CoursesGridView } from "./pages/course/CoursesGridView";
import { CoursesListView } from "./pages/course/CoursesListView";
import { CoursesGridSidebar } from "./pages/course/CoursesGridSidebar";
import { CoursesDetails } from "./pages/course/CoursesDetails";
import { About } from "./pages/about/About";
import { Error } from "./pages/error/Error";
import { Event } from "./pages/event/Event";
import { EventDetails } from "./pages/event/EventDetails";
import { TeamMembers } from "./pages/team/TeamMembers";
import { TeamMemberDetails } from "./pages/team/TeamMemberDetails";
import { StudentRegistrations } from "./pages/auth/StudentRegistrations";
import { InstructorRegistrations } from "./pages/auth/InstructorRegistrations";
import { Signup } from "./pages/auth/Signup";
import { Signin } from "./pages/auth/Signin";
import { Faq } from "./pages/faq/Faq";
import { Cart } from "./pages/cart/Cart";
import { Checkout } from "./pages/checkout/Checkout";
import { Blog } from "./pages/blogs/Blog";
import { BlogWithSidebar } from "./pages/blogs/BlogWithSidebar";
import { BlogDetails } from "./pages/blogs/BlogDetails";
import { Contact } from "./pages/contact/Contact";

function App() {
  useWow();

  // on route change to top of the page
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeOne />} />
      <Route path="/home-v2" element={<HomeTwo />} />
      <Route path="/home-v3" element={<HomeThree />} />
      <Route path="/home-v4" element={<HomeFour />} />
      <Route path="/home-v5" element={<HomeFive />} />
      <Route path="/home-v6" element={<HomeSix />} />
      <Route path="/home-v7" element={<HomeSeven />} />
      <Route path="/home-v8" element={<HomeEight />} />
      <Route path="/courses-grid-view" element={<CoursesGridView />} />
      <Route path="/courses-list-view" element={<CoursesListView />} />
      <Route
        path="/courses-grid-with-sidebar"
        element={<CoursesGridSidebar />}
      />
      <Route path="/course-details" element={<CoursesDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event-details" element={<EventDetails />} />
      <Route path="/team-members" element={<TeamMembers />} />
      <Route path="/team-member-details" element={<TeamMemberDetails />} />
      <Route
        path="/students-registrations"
        element={<StudentRegistrations />}
      />
      <Route
        path="/instructor-registrations"
        element={<InstructorRegistrations />}
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-with-sidebar" element={<BlogWithSidebar />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
