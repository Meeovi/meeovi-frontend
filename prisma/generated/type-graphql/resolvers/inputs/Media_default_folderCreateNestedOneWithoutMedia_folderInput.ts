import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_default_folderCreateOrConnectWithoutMedia_folderInput } from "../inputs/Media_default_folderCreateOrConnectWithoutMedia_folderInput";
import { Media_default_folderCreateWithoutMedia_folderInput } from "../inputs/Media_default_folderCreateWithoutMedia_folderInput";
import { Media_default_folderWhereUniqueInput } from "../inputs/Media_default_folderWhereUniqueInput";

@TypeGraphQL.InputType("Media_default_folderCreateNestedOneWithoutMedia_folderInput", {})
export class Media_default_folderCreateNestedOneWithoutMedia_folderInput {
  @TypeGraphQL.Field(_type => Media_default_folderCreateWithoutMedia_folderInput, {
    nullable: true
  })
  create?: Media_default_folderCreateWithoutMedia_folderInput | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderCreateOrConnectWithoutMedia_folderInput, {
    nullable: true
  })
  connectOrCreate?: Media_default_folderCreateOrConnectWithoutMedia_folderInput | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderWhereUniqueInput, {
    nullable: true
  })
  connect?: Media_default_folderWhereUniqueInput | undefined;
}
