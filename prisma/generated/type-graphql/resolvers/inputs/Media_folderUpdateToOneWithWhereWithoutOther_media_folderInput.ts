import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderUpdateWithoutOther_media_folderInput } from "../inputs/Media_folderUpdateWithoutOther_media_folderInput";
import { Media_folderWhereInput } from "../inputs/Media_folderWhereInput";

@TypeGraphQL.InputType("Media_folderUpdateToOneWithWhereWithoutOther_media_folderInput", {})
export class Media_folderUpdateToOneWithWhereWithoutOther_media_folderInput {
  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  where?: Media_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderUpdateWithoutOther_media_folderInput, {
    nullable: false
  })
  data!: Media_folderUpdateWithoutOther_media_folderInput;
}
