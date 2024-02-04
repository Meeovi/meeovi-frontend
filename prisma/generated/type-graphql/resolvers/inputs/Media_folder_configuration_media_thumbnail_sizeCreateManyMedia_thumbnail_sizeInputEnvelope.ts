import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_thumbnail_sizeInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_thumbnail_sizeInput";

@TypeGraphQL.InputType("Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_thumbnail_sizeInputEnvelope", {})
export class Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_thumbnail_sizeInputEnvelope {
  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_thumbnail_sizeInput], {
    nullable: false
  })
  data!: Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_thumbnail_sizeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
