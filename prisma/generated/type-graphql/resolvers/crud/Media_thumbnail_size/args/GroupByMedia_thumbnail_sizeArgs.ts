import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnail_sizeOrderByWithAggregationInput } from "../../../inputs/Media_thumbnail_sizeOrderByWithAggregationInput";
import { Media_thumbnail_sizeScalarWhereWithAggregatesInput } from "../../../inputs/Media_thumbnail_sizeScalarWhereWithAggregatesInput";
import { Media_thumbnail_sizeWhereInput } from "../../../inputs/Media_thumbnail_sizeWhereInput";
import { Media_thumbnail_sizeScalarFieldEnum } from "../../../../enums/Media_thumbnail_sizeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMedia_thumbnail_sizeArgs {
  @TypeGraphQL.Field(_type => Media_thumbnail_sizeWhereInput, {
    nullable: true
  })
  where?: Media_thumbnail_sizeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnail_sizeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Media_thumbnail_sizeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnail_sizeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "width" | "height" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Media_thumbnail_sizeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
