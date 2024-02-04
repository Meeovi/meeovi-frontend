import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderCreateOrConnectWithoutMediaInput } from "../inputs/Media_folderCreateOrConnectWithoutMediaInput";
import { Media_folderCreateWithoutMediaInput } from "../inputs/Media_folderCreateWithoutMediaInput";
import { Media_folderUpdateToOneWithWhereWithoutMediaInput } from "../inputs/Media_folderUpdateToOneWithWhereWithoutMediaInput";
import { Media_folderUpsertWithoutMediaInput } from "../inputs/Media_folderUpsertWithoutMediaInput";
import { Media_folderWhereInput } from "../inputs/Media_folderWhereInput";
import { Media_folderWhereUniqueInput } from "../inputs/Media_folderWhereUniqueInput";

@TypeGraphQL.InputType("Media_folderUpdateOneWithoutMediaNestedInput", {})
export class Media_folderUpdateOneWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => Media_folderCreateWithoutMediaInput, {
    nullable: true
  })
  create?: Media_folderCreateWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderCreateOrConnectWithoutMediaInput, {
    nullable: true
  })
  connectOrCreate?: Media_folderCreateOrConnectWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderUpsertWithoutMediaInput, {
    nullable: true
  })
  upsert?: Media_folderUpsertWithoutMediaInput | undefined;

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

  @TypeGraphQL.Field(_type => Media_folderUpdateToOneWithWhereWithoutMediaInput, {
    nullable: true
  })
  update?: Media_folderUpdateToOneWithWhereWithoutMediaInput | undefined;
}
