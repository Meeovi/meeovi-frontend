import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configurationCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput } from "../inputs/Media_folder_configurationCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput";
import { Media_folder_configurationWhereUniqueInput } from "../inputs/Media_folder_configurationWhereUniqueInput";

@TypeGraphQL.InputType("Media_folder_configurationCreateOrConnectWithoutMedia_folder_configuration_media_thumbnail_sizeInput", {})
export class Media_folder_configurationCreateOrConnectWithoutMedia_folder_configuration_media_thumbnail_sizeInput {
  @TypeGraphQL.Field(_type => Media_folder_configurationWhereUniqueInput, {
    nullable: false
  })
  where!: Media_folder_configurationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_folder_configurationCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput, {
    nullable: false
  })
  create!: Media_folder_configurationCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput;
}
