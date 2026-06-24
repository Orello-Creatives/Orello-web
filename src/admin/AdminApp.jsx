import { Routes, Route, Outlet } from "react-router";
import RequireAuth from "./components/RequireAuth";
import AdminLayout from "./components/AdminLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ContentList from "./pages/ContentList";
import SimpleForm from "./pages/SimpleForm";
import BlogForm from "./pages/BlogForm";
import CaseStudyForm from "./pages/CaseStudyForm";
import { CONTENT_TYPES } from "./contentTypes";

function formElement(type, config) {
  if (config.form === "blog") return <BlogForm />;
  if (config.form === "caseStudy") return <CaseStudyForm />;
  return <SimpleForm type={type} />;
}

export default function AdminApp() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route
        element={
          <RequireAuth>
            <AdminLayout>
              <Outlet />
            </AdminLayout>
          </RequireAuth>
        }
      >
        <Route index element={<Dashboard />} />
        {Object.entries(CONTENT_TYPES).map(([type, config]) => (
          <Route key={type} path={type}>
            <Route index element={<ContentList type={type} />} />
            <Route path="new" element={formElement(type, config)} />
            <Route path=":id/edit" element={formElement(type, config)} />
          </Route>
        ))}
      </Route>
    </Routes>
  );
}
