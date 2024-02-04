import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_folder_configurationInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_folder_configurationInput";

@TypeGraphQL.InputType("Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_folder_configurationInputEnvelope", {})
export class Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_folder_configurationInputEnvelope {
  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_folder_configurationInput], {
    nullable: false
  })
  data!: Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_folder_configurationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
