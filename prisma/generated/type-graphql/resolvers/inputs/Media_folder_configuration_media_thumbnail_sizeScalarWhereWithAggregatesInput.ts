import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Media_folder_configuration_media_thumbnail_sizeScalarWhereWithAggregatesInput", {})
export class Media_folder_configuration_media_thumbnail_sizeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Media_folder_configuration_media_thumbnail_sizeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Media_folder_configuration_media_thumbnail_sizeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Media_folder_configuration_media_thumbnail_sizeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  media_folder_configuration_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  media_thumbnail_size_id?: BytesWithAggregatesFilter | undefined;
}
