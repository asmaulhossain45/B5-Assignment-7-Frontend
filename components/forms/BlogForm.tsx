"use client";

import { createBlog } from "@/actions/blog";
import { PostStatus } from "@/config/enums";
import { TBlog } from "@/types/TBlog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Spinner } from "../ui/spinner";
import { Textarea } from "../ui/textarea";

type Props = {
  initialBlog?: TBlog;
  buttonText?: string;
};

const formSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title must be less than 255 characters"),
  excerpt: z
    .string()
    .min(1, "Excerpt is required")
    .max(255, "Excerpt must be less than 255 characters"),
  content: z.string().min(1, "Content is required"),
  thumb: z.file(),
  category: z
    .string()
    .min(1, "Category is required")
    .max(50, "Category must be less than 50 characters"),
  status: z.enum(Object.values(PostStatus)),
});

const BlogForm = ({ initialBlog, buttonText = "Submit" }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialBlog?.title || "",
      excerpt: initialBlog?.excerpt || "",
      content: initialBlog?.content || "",
      thumb: undefined,
      category: initialBlog?.category || "",
      status: initialBlog?.status || "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    const res = await createBlog(data);

    if (!res?.success) {
      toast.error(res?.message || "Failed to create blog");
      return;
    }

    toast.success(res?.message);
    form.reset();
    router.push("/dashboard/blogs");

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 border rounded-xl p-4 bg-sidebar"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="lg:col-span-3">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. How to build a blog with Next.js"
                  className="dark:bg-background"
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                This is the title field of your blog.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem className="lg:col-span-3">
              <FormLabel>Excerpt</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g. Next.js is a React framework for building user interfaces."
                  className="resize-y min-h-32 dark:bg-background"
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                This is the excerpt field of your blog.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="lg:col-span-3">
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g. Next.js is a React framework for building user interfaces."
                  className="resize-y min-h-64 dark:bg-background"
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                This is the content field of your blog.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="thumb"
          render={({ field: { onChange, ...field } }) => (
            <FormItem>
              <FormLabel>Thumbnail</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  className="dark:bg-background"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      onChange(e.target.files[0]);
                    }
                  }}
                />
              </FormControl>
              <FormDescription className="sr-only">
                This is blog category field of your blog.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. Development"
                  className="dark:bg-background"
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                This is blog category field of your blog.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full dark:bg-background">
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(PostStatus).map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription className="sr-only">
                This is blog status field of your blog.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <Button
            type="button"
            variant={"outline"}
            onClick={() => router.back()}
            className="text-white"
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading} className="text-white">
            {isLoading ? <Spinner /> : buttonText}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BlogForm;
