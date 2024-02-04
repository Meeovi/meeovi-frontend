import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderCreateOrConnectWithoutOther_media_folderInput } from "../inputs/Media_folderCreateOrConnectWithoutOther_media_folderInput";
import { Media_folderCreateWithoutOther_media_folderInput } from "../inputs/Media_folderCreateWithoutOther_media_folderInput";
import { Media_folderUpdateToOneWithWhereWithoutOther_media_folderInput } from "../inputs/Media_folderUpdateToOneWithWhereWithoutOther_media_folderInput";
import { Media_folderUpsertWithoutOther_media_folderInput } from "../inputs/Media_folderUpsertWithoutOther_media_folderInput";
import { Media_folderWhereInput } from "../inputs/Media_folderWhereInput";
import { Media_folderWhereUniqueInput } from "../inputs/Media_folderWhereUniqueInput";

@TypeGraphQL.InputType("Media_folderUpdateOneWithoutOther_media_folderNestedInput", {})
export class Media_folderUpdateOneWithoutOther_media_folderNestedInput {
  @TypeGraphQL.Field(_type => Media_folderCreateWithoutOther_media_folderInput, {
    nullable: true
  })
  create?: Media_folderCreateWithoutOther_media_folderInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderCreateOrConnectWithoutOther_media_folderInput, {
    nullable: true
  })
  connectOrCreate?: Media_folderCreateOrConnectWithoutOther_media_folderInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderUpsertWithoutOther_media_folderInput, {
    nullable: true
  })
  upsert?: Media_folderUpsertWithoutOther_media_folderInput | undefined;

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

  @TypeGraphQL.Field(_type => Media_folderUpdateToOneWithWhereWithoutOther_media_folderInput, {
    nullable: true
  })
  update?: Media_folderUpdateToOneWithWhereWithoutOther_media_folderInput | undefined;
}
