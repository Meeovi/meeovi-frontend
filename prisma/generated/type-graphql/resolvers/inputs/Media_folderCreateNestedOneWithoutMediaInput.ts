import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderCreateOrConnectWithoutMediaInput } from "../inputs/Media_folderCreateOrConnectWithoutMediaInput";
import { Media_folderCreateWithoutMediaInput } from "../inputs/Media_folderCreateWithoutMediaInput";
import { Media_folderWhereUniqueInput } from "../inputs/Media_folderWhereUniqueInput";

@TypeGraphQL.InputType("Media_folderCreateNestedOneWithoutMediaInput", {})
export class Media_folderCreateNestedOneWithoutMediaInput {
  @TypeGraphQL.Field(_type => Media_folderCreateWithoutMediaInput, {
    nullable: true
  })
  create?: Media_folderCreateWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderCreateOrConnectWithoutMediaInput, {
    nullable: true
  })
  connectOrCreate?: Media_folderCreateOrConnectWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderWhereUniqueInput, {
    nullable: true
  })
  connect?: Media_folderWhereUniqueInput | undefined;
}
