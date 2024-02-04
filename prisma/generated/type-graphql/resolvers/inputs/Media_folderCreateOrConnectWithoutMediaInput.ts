import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderCreateWithoutMediaInput } from "../inputs/Media_folderCreateWithoutMediaInput";
import { Media_folderWhereUniqueInput } from "../inputs/Media_folderWhereUniqueInput";

@TypeGraphQL.InputType("Media_folderCreateOrConnectWithoutMediaInput", {})
export class Media_folderCreateOrConnectWithoutMediaInput {
  @TypeGraphQL.Field(_type => Media_folderWhereUniqueInput, {
    nullable: false
  })
  where!: Media_folderWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_folderCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Media_folderCreateWithoutMediaInput;
}
