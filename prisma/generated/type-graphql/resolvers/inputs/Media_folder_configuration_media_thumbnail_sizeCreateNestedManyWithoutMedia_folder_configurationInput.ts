import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_folder_configurationInputEnvelope } from "../inputs/Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_folder_configurationInputEnvelope";
import { Media_folder_configuration_media_thumbnail_sizeCreateOrConnectWithoutMedia_folder_configurationInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeCreateOrConnectWithoutMedia_folder_configurationInput";
import { Media_folder_configuration_media_thumbnail_sizeCreateWithoutMedia_folder_configurationInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeCreateWithoutMedia_folder_configurationInput";
import { Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput";

@TypeGraphQL.InputType("Media_folder_configuration_media_thumbnail_sizeCreateNestedManyWithoutMedia_folder_configurationInput", {})
export class Media_folder_configuration_media_thumbnail_sizeCreateNestedManyWithoutMedia_folder_configurationInput {
  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeCreateWithoutMedia_folder_configurationInput], {
    nullable: true
  })
  create?: Media_folder_configuration_media_thumbnail_sizeCreateWithoutMedia_folder_configurationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeCreateOrConnectWithoutMedia_folder_configurationInput], {
    nullable: true
  })
  connectOrCreate?: Media_folder_configuration_media_thumbnail_sizeCreateOrConnectWithoutMedia_folder_configurationInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_folder_configurationInputEnvelope, {
    nullable: true
  })
  createMany?: Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_folder_configurationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput], {
    nullable: true
  })
  connect?: Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput[] | undefined;
}
