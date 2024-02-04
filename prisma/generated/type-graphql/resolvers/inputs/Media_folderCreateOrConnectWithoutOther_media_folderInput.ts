import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderCreateWithoutOther_media_folderInput } from "../inputs/Media_folderCreateWithoutOther_media_folderInput";
import { Media_folderWhereUniqueInput } from "../inputs/Media_folderWhereUniqueInput";

@TypeGraphQL.InputType("Media_folderCreateOrConnectWithoutOther_media_folderInput", {})
export class Media_folderCreateOrConnectWithoutOther_media_folderInput {
  @TypeGraphQL.Field(_type => Media_folderWhereUniqueInput, {
    nullable: false
  })
  where!: Media_folderWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_folderCreateWithoutOther_media_folderInput, {
    nullable: false
  })
  create!: Media_folderCreateWithoutOther_media_folderInput;
}
