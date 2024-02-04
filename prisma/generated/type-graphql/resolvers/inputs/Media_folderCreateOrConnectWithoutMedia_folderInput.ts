import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderCreateWithoutMedia_folderInput } from "../inputs/Media_folderCreateWithoutMedia_folderInput";
import { Media_folderWhereUniqueInput } from "../inputs/Media_folderWhereUniqueInput";

@TypeGraphQL.InputType("Media_folderCreateOrConnectWithoutMedia_folderInput", {})
export class Media_folderCreateOrConnectWithoutMedia_folderInput {
  @TypeGraphQL.Field(_type => Media_folderWhereUniqueInput, {
    nullable: false
  })
  where!: Media_folderWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_folderCreateWithoutMedia_folderInput, {
    nullable: false
  })
  create!: Media_folderCreateWithoutMedia_folderInput;
}
