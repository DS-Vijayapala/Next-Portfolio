import { Projects } from "@/actions/projects";

/**
 * Fetch a project by its ID or slug.
 * @param projectId - The project ID or slug from the URL.
 * @returns The project object if found, otherwise null.
 */

export function getProjectById(projectId: string) {

    if (!projectId) return null;

    const project = Projects.find(

        (p) =>
            p.id?.toString() === projectId ||
            p.title.toLowerCase().replace(/\s+/g, "-") === projectId
    );

    return project || null;

}
