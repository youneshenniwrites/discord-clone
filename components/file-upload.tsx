type FileUploadProps = {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
};
export function FileUpload({ onChange, value, endpoint }: FileUploadProps) {
  return <div>FileUpload</div>;
}
