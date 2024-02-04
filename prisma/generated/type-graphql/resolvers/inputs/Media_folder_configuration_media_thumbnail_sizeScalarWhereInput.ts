import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Media_folder_configuration_media_thumbnail_sizeScalarWhereInput", {})
export class Media_folder_configuration_media_thumbnail_sizeScalarWhereInput {
  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeScalarWhereInput], {
    nullable: true
  })
  AND?: Media_folder_configuration_media_thumbnail_sizeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeScalarWhereInput], {
    nullable: true
  })
  OR?: Media_folder_configuration_media_thumbnail_sizeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeScalarWhereInput], {
    nullable: true
  })
  NOT?: Media_folder_configuration_media_thumbnail_sizeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  media_folder_configuration_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  media_thumbnail_size_id?: BytesFilter | undefined;
}
