import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_folder_configurationInput", {})
export class Media_folder_configuration_media_thumbnail_sizeCreateManyMedia_folder_configurationInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  media_thumbnail_size_id!: Buffer;
}
