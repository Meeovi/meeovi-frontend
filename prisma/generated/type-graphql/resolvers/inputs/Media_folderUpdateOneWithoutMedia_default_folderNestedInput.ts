import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderCreateOrConnectWithoutMedia_default_folderInput } from "../inputs/Media_folderCreateOrConnectWithoutMedia_default_folderInput";
import { Media_folderCreateWithoutMedia_default_folderInput } from "../inputs/Media_folderCreateWithoutMedia_default_folderInput";
import { Media_folderUpdateToOneWithWhereWithoutMedia_default_folderInput } from "../inputs/Media_folderUpdateToOneWithWhereWithoutMedia_default_folderInput";
import { Media_folderUpsertWithoutMedia_default_folderInput } from "../inputs/Media_folderUpsertWithoutMedia_default_folderInput";
import { Media_folderWhereInput } from "../inputs/Media_folderWhereInput";
import { Media_folderWhereUniqueInput } from "../inputs/Media_folderWhereUniqueInput";

@TypeGraphQL.InputType("Media_folderUpdateOneWithoutMedia_default_folderNestedInput", {})
export class Media_folderUpdateOneWithoutMedia_default_folderNestedInput {
  @TypeGraphQL.Field(_type => Media_folderCreateWithoutMedia_default_folderInput, {
    nullable: true
  })
  create?: Media_folderCreateWithoutMedia_default_folderInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderCreateOrConnectWithoutMedia_default_folderInput, {
    nullable: true
  })
  connectOrCreate?: Media_folderCreateOrConnectWithoutMedia_default_folderInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderUpsertWithoutMedia_default_folderInput, {
    nullable: true
  })
  upsert?: Media_folderUpsertWithoutMedia_default_folderInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  disconnect?: Media_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  delete?: Media_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderWhereUniqueInput, {
    nullable: true
  })
  connect?: Media_folderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderUpdateToOneWithWhereWithoutMedia_default_folderInput, {
    nullable: true
  })
  update?: Media_folderUpdateToOneWithWhereWithoutMedia_default_folderInput | undefined;
}
