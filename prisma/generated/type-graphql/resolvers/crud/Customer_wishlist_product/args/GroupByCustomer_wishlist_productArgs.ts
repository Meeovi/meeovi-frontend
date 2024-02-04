import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlist_productOrderByWithAggregationInput } from "../../../inputs/Customer_wishlist_productOrderByWithAggregationInput";
import { Customer_wishlist_productScalarWhereWithAggregatesInput } from "../../../inputs/Customer_wishlist_productScalarWhereWithAggregatesInput";
import { Customer_wishlist_productWhereInput } from "../../../inputs/Customer_wishlist_productWhereInput";
import { Customer_wishlist_productScalarFieldEnum } from "../../../../enums/Customer_wishlist_productScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomer_wishlist_productArgs {
  @TypeGraphQL.Field(_type => Customer_wishlist_productWhereInput, {
    nullable: true
  })
  where?: Customer_wishlist_productWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Customer_wishlist_productOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "customer_wishlist_id" | "product_id" | "product_version_id" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Customer_wishlist_productScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Customer_wishlist_productScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
