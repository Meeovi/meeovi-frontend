import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_default_folderCreateWithoutMedia_folderInput } from "../inputs/Media_default_folderCreateWithoutMedia_folderInput";
import { Media_default_folderUpdateWithoutMedia_folderInput } from "../inputs/Media_default_folderUpdateWithoutMedia_folderInput";
import { Media_default_folderWhereInput } from "../inputs/Media_default_folderWhereInput";

@TypeGraphQL.InputType("Media_default_folderUpsertWithoutMedia_folderInput", {})
export class Media_default_folderUpsertWithoutMedia_folderInput {
  @TypeGraphQL.Field(_type => Media_default_folderUpdateWithoutMedia_folderInput, {
    nullable: false
  })
  update!: Media_default_folderUpdateWithoutMedia_folderInput;

  @TypeGraphQL.Field(_type => Media_default_folderCreateWithoutMedia_folderInput, {
    nullable: false
  })
  create!: Media_default_folderCreateWithoutMedia_folderInput;

  @TypeGraphQL.Field(_type => Media_default_folderWhereInput, {
    nullable: true
  })
  where?: Media_default_folderWhereInput | undefined;
}
