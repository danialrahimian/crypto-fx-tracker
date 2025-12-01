import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import type { AssetPlatformsState } from "../Types/assetPlatformsTypes";
import ErorBox from "./ErorBox";
import { Ban, MonitorX } from "lucide-react";
import type { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit";
export default function AssetPlatformsTable({
  assetPlatforms,
  assetPlatformsStatus,
  error,
  fetchAction,
}: AssetPlatformsState & {
  fetchAction?: AsyncThunk<void, void, AsyncThunkConfig>;
}) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>image</TableHead>
            <TableHead>name</TableHead>
            <TableHead>shortname</TableHead>
            <TableHead>chain identifier</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assetPlatformsStatus === "loading" && (
            <TableRow>
              <TableCell>loading ...</TableCell>
              <TableCell>loading ...</TableCell>
              <TableCell>loading ...</TableCell>
              <TableCell>loading ...</TableCell>
            </TableRow>
          )}
          {assetPlatformsStatus === "succeeded" &&
            assetPlatforms.map((assetPlatform) => {
              return (
                <TableRow key={assetPlatform.id}>
                  <TableCell>
                    {assetPlatform.image.small ? (
                      <img
                        className="w-6 h-6"
                        src={assetPlatform.image.small}
                        alt="asset platform"
                      />
                    ) : (
                      <MonitorX color="green" />
                    )}
                  </TableCell>
                  <TableCell>{assetPlatform.name}</TableCell>
                  <TableCell>
                    {assetPlatform.shortname ? (
                      assetPlatform.shortname
                    ) : (
                      <Ban color="red" />
                    )}
                  </TableCell>
                  <TableCell>
                    {assetPlatform.chain_identifier ? (
                      assetPlatform.chain_identifier
                    ) : (
                      <span className="text-destructive">not available</span>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
        {assetPlatformsStatus === "succeeded" && (
          <TableCaption>Asset Platforms</TableCaption>
        )}
      </Table>
      {assetPlatformsStatus === "failed" && (
        <div className="flex pt-5 justify-center">
          <ErorBox
            title="asset platforms"
            error_message={error}
            fetchAction={fetchAction}
          />
        </div>
      )}
    </>
  );
}
