import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_default_folderCreateWithoutMedia_folderInput } from "../inputs/Media_default_folderCreateWithoutMedia_folderInput";
import { Media_default_folderWhereUniqueInput } from "../inputs/Media_default_folderWhereUniqueInput";

@TypeGraphQL.InputType("Media_default_folderCreateOrConnectWithoutMedia_folderInput", {})
export class Media_default_folderCreateOrConnectWithoutMedia_folderInput {
  @TypeGraphQL.Field(_type => Media_default_folderWhereUniqueInput, {
    nullable: false
  })
  where!: Media_default_folderWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_default_folderCreateWithoutMedia_folderInput, {
    nullable: false
  })
  create!: Media_default_folderCreateWithoutMedia_folderInput;
}
