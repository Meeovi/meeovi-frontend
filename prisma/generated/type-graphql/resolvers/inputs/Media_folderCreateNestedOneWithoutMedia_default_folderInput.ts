import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderCreateOrConnectWithoutMedia_default_folderInput } from "../inputs/Media_folderCreateOrConnectWithoutMedia_default_folderInput";
import { Media_folderCreateWithoutMedia_default_folderInput } from "../inputs/Media_folderCreateWithoutMedia_default_folderInput";
import { Media_folderWhereUniqueInput } from "../inputs/Media_folderWhereUniqueInput";

@TypeGraphQL.InputType("Media_folderCreateNestedOneWithoutMedia_default_folderInput", {})
export class Media_folderCreateNestedOneWithoutMedia_default_folderInput {
  @TypeGraphQL.Field(_type => Media_folderCreateWithoutMedia_default_folderInput, {
    nullable: true
  })
  create?: Media_folderCreateWithoutMedia_default_folderInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderCreateOrConnectWithoutMedia_default_folderInput, {
    nullable: true
  })
  connectOrCreate?: Media_folderCreateOrConnectWithoutMedia_default_folderInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderWhereUniqueInput, {
    nullable: true
  })
  connect?: Media_folderWhereUniqueInput | undefined;
}
