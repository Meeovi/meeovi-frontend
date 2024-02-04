import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configuration_media_thumbnail_sizeScalarWhereInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeScalarWhereInput";
import { Media_folder_configuration_media_thumbnail_sizeUpdateManyMutationInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeUpdateManyMutationInput";

@TypeGraphQL.InputType("Media_folder_configuration_media_thumbnail_sizeUpdateManyWithWhereWithoutMedia_thumbnail_sizeInput", {})
export class Media_folder_configuration_media_thumbnail_sizeUpdateManyWithWhereWithoutMedia_thumbnail_sizeInput {
  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeScalarWhereInput, {
    nullable: false
  })
  where!: Media_folder_configuration_media_thumbnail_sizeScalarWhereInput;

  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeUpdateManyMutationInput, {
    nullable: false
  })
  data!: Media_folder_configuration_media_thumbnail_sizeUpdateManyMutationInput;
}
