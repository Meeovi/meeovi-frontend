import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configurationCreateOrConnectWithoutMedia_folder_configuration_media_thumbnail_sizeInput } from "../inputs/Media_folder_configurationCreateOrConnectWithoutMedia_folder_configuration_media_thumbnail_sizeInput";
import { Media_folder_configurationCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput } from "../inputs/Media_folder_configurationCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput";
import { Media_folder_configurationUpdateToOneWithWhereWithoutMedia_folder_configuration_media_thumbnail_sizeInput } from "../inputs/Media_folder_configurationUpdateToOneWithWhereWithoutMedia_folder_configuration_media_thumbnail_sizeInput";
import { Media_folder_configurationUpsertWithoutMedia_folder_configuration_media_thumbnail_sizeInput } from "../inputs/Media_folder_configurationUpsertWithoutMedia_folder_configuration_media_thumbnail_sizeInput";
import { Media_folder_configurationWhereUniqueInput } from "../inputs/Media_folder_configurationWhereUniqueInput";

@TypeGraphQL.InputType("Media_folder_configurationUpdateOneRequiredWithoutMedia_folder_configuration_media_thumbnail_sizeNestedInput", {})
export class Media_folder_configurationUpdateOneRequiredWithoutMedia_folder_configuration_media_thumbnail_sizeNestedInput {
  @TypeGraphQL.Field(_type => Media_folder_configurationCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput, {
    nullable: true
  })
  create?: Media_folder_configurationCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configurationCreateOrConnectWithoutMedia_folder_configuration_media_thumbnail_sizeInput, {
    nullable: true
  })
  connectOrCreate?: Media_folder_configurationCreateOrConnectWithoutMedia_folder_configuration_media_thumbnail_sizeInput | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configurationUpsertWithoutMedia_folder_configuration_media_thumbnail_sizeInput, {
    nullable: true
  })
  upsert?: Media_folder_configurationUpsertWithoutMedia_folder_configuration_media_thumbnail_sizeInput | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configurationWhereUniqueInput, {
    nullable: true
  })
  connect?: Media_folder_configurationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configurationUpdateToOneWithWhereWithoutMedia_folder_configuration_media_thumbnail_sizeInput, {
    nullable: true
  })
  update?: Media_folder_configurationUpdateToOneWithWhereWithoutMedia_folder_configuration_media_thumbnail_sizeInput | undefined;
}
