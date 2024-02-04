import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_thumbnail_sizeInputEnvelope } from "../inputs/Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_thumbnail_sizeInputEnvelope";
import { Media_folder_configuration_media_thumbnail_sizeCreateOrConnectWithoutMedia_thumbnail_sizeInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeCreateOrConnectWithoutMedia_thumbnail_sizeInput";
import { Media_folder_configuration_media_thumbnail_sizeCreateWithoutMedia_thumbnail_sizeInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeCreateWithoutMedia_thumbnail_sizeInput";
import { Media_folder_configuration_media_thumbnail_sizeScalarWhereInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeScalarWhereInput";
import { Media_folder_configuration_media_thumbnail_sizeUpdateManyWithWhereWithoutMedia_thumbnail_sizeInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeUpdateManyWithWhereWithoutMedia_thumbnail_sizeInput";
import { Media_folder_configuration_media_thumbnail_sizeUpdateWithWhereUniqueWithoutMedia_thumbnail_sizeInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeUpdateWithWhereUniqueWithoutMedia_thumbnail_sizeInput";
import { Media_folder_configuration_media_thumbnail_sizeUpsertWithWhereUniqueWithoutMedia_thumbnail_sizeInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeUpsertWithWhereUniqueWithoutMedia_thumbnail_sizeInput";
import { Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput";

@TypeGraphQL.InputType("Media_folder_configuration_media_thumbnail_sizeUpdateManyWithoutMedia_thumbnail_sizeNestedInput", {})
export class Media_folder_configuration_media_thumbnail_sizeUpdateManyWithoutMedia_thumbnail_sizeNestedInput {
  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeCreateWithoutMedia_thumbnail_sizeInput], {
    nullable: true
  })
  create?: Media_folder_configuration_media_thumbnail_sizeCreateWithoutMedia_thumbnail_sizeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeCreateOrConnectWithoutMedia_thumbnail_sizeInput], {
    nullable: true
  })
  connectOrCreate?: Media_folder_configuration_media_thumbnail_sizeCreateOrConnectWithoutMedia_thumbnail_sizeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeUpsertWithWhereUniqueWithoutMedia_thumbnail_sizeInput], {
    nullable: true
  })
  upsert?: Media_folder_configuration_media_thumbnail_sizeUpsertWithWhereUniqueWithoutMedia_thumbnail_sizeInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_thumbnail_sizeInputEnvelope, {
    nullable: true
  })
  createMany?: Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_thumbnail_sizeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput], {
    nullable: true
  })
  set?: Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput], {
    nullable: true
  })
  delete?: Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput], {
    nullable: true
  })
  connect?: Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeUpdateWithWhereUniqueWithoutMedia_thumbnail_sizeInput], {
    nullable: true
  })
  update?: Media_folder_configuration_media_thumbnail_sizeUpdateWithWhereUniqueWithoutMedia_thumbnail_sizeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeUpdateManyWithWhereWithoutMedia_thumbnail_sizeInput], {
    nullable: true
  })
  updateMany?: Media_folder_configuration_media_thumbnail_sizeUpdateManyWithWhereWithoutMedia_thumbnail_sizeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Media_folder_configuration_media_thumbnail_sizeScalarWhereInput[] | undefined;
}
