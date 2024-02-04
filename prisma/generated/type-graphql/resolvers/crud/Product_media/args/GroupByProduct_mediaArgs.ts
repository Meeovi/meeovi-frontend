import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_mediaOrderByWithAggregationInput } from "../../../inputs/Product_mediaOrderByWithAggregationInput";
import { Product_mediaScalarWhereWithAggregatesInput } from "../../../inputs/Product_mediaScalarWhereWithAggregatesInput";
import { Product_mediaWhereInput } from "../../../inputs/Product_mediaWhereInput";
import { Product_mediaScalarFieldEnum } from "../../../../enums/Product_mediaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_mediaArgs {
  @TypeGraphQL.Field(_type => Product_mediaWhereInput, {
    nullable: true
  })
  where?: Product_mediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_mediaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "position" | "product_id" | "product_version_id" | "media_id" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_mediaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_mediaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
