import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderCreateWithoutOther_media_folderInput } from "../inputs/Media_folderCreateWithoutOther_media_folderInput";
import { Media_folderUpdateWithoutOther_media_folderInput } from "../inputs/Media_folderUpdateWithoutOther_media_folderInput";
import { Media_folderWhereInput } from "../inputs/Media_folderWhereInput";

@TypeGraphQL.InputType("Media_folderUpsertWithoutOther_media_folderInput", {})
export class Media_folderUpsertWithoutOther_media_folderInput {
  @TypeGraphQL.Field(_type => Media_folderUpdateWithoutOther_media_folderInput, {
    nullable: false
  })
  update!: Media_folderUpdateWithoutOther_media_folderInput;

  @TypeGraphQL.Field(_type => Media_folderCreateWithoutOther_media_folderInput, {
    nullable: false
  })
  create!: Media_folderCreateWithoutOther_media_folderInput;

  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  where?: Media_folderWhereInput | undefined;
}
