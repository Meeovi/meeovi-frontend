import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderCreateWithoutMedia_default_folderInput } from "../inputs/Media_folderCreateWithoutMedia_default_folderInput";
import { Media_folderUpdateWithoutMedia_default_folderInput } from "../inputs/Media_folderUpdateWithoutMedia_default_folderInput";
import { Media_folderWhereInput } from "../inputs/Media_folderWhereInput";

@TypeGraphQL.InputType("Media_folderUpsertWithoutMedia_default_folderInput", {})
export class Media_folderUpsertWithoutMedia_default_folderInput {
  @TypeGraphQL.Field(_type => Media_folderUpdateWithoutMedia_default_folderInput, {
    nullable: false
  })
  update!: Media_folderUpdateWithoutMedia_default_folderInput;

  @TypeGraphQL.Field(_type => Media_folderCreateWithoutMedia_default_folderInput, {
    nullable: false
  })
  create!: Media_folderCreateWithoutMedia_default_folderInput;

  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  where?: Media_folderWhereInput | undefined;
}
