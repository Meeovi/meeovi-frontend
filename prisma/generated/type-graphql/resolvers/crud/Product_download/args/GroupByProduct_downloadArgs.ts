import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_downloadOrderByWithAggregationInput } from "../../../inputs/Product_downloadOrderByWithAggregationInput";
import { Product_downloadScalarWhereWithAggregatesInput } from "../../../inputs/Product_downloadScalarWhereWithAggregatesInput";
import { Product_downloadWhereInput } from "../../../inputs/Product_downloadWhereInput";
import { Product_downloadScalarFieldEnum } from "../../../../enums/Product_downloadScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_downloadArgs {
  @TypeGraphQL.Field(_type => Product_downloadWhereInput, {
    nullable: true
  })
  where?: Product_downloadWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_downloadOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "position" | "product_id" | "product_version_id" | "media_id" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_downloadScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_downloadScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
