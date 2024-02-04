import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_default_folderCreateOrConnectWithoutMedia_folderInput } from "../inputs/Media_default_folderCreateOrConnectWithoutMedia_folderInput";
import { Media_default_folderCreateWithoutMedia_folderInput } from "../inputs/Media_default_folderCreateWithoutMedia_folderInput";
import { Media_default_folderUpdateToOneWithWhereWithoutMedia_folderInput } from "../inputs/Media_default_folderUpdateToOneWithWhereWithoutMedia_folderInput";
import { Media_default_folderUpsertWithoutMedia_folderInput } from "../inputs/Media_default_folderUpsertWithoutMedia_folderInput";
import { Media_default_folderWhereInput } from "../inputs/Media_default_folderWhereInput";
import { Media_default_folderWhereUniqueInput } from "../inputs/Media_default_folderWhereUniqueInput";

@TypeGraphQL.InputType("Media_default_folderUpdateOneWithoutMedia_folderNestedInput", {})
export class Media_default_folderUpdateOneWithoutMedia_folderNestedInput {
  @TypeGraphQL.Field(_type => Media_default_folderCreateWithoutMedia_folderInput, {
    nullable: true
  })
  create?: Media_default_folderCreateWithoutMedia_folderInput | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderCreateOrConnectWithoutMedia_folderInput, {
    nullable: true
  })
  connectOrCreate?: Media_default_folderCreateOrConnectWithoutMedia_folderInput | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderUpsertWithoutMedia_folderInput, {
    nullable: true
  })
  upsert?: Media_default_folderUpsertWithoutMedia_folderInput | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderWhereInput, {
    nullable: true
  })
  disconnect?: Media_default_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderWhereInput, {
    nullable: true
  })
  delete?: Media_default_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderWhereUniqueInput, {
    nullable: true
  })
  connect?: Media_default_folderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderUpdateToOneWithWhereWithoutMedia_folderInput, {
    nullable: true
  })
  update?: Media_default_folderUpdateToOneWithWhereWithoutMedia_folderInput | undefined;
}
