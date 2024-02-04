import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlistOrderByWithAggregationInput } from "../../../inputs/Customer_wishlistOrderByWithAggregationInput";
import { Customer_wishlistScalarWhereWithAggregatesInput } from "../../../inputs/Customer_wishlistScalarWhereWithAggregatesInput";
import { Customer_wishlistWhereInput } from "../../../inputs/Customer_wishlistWhereInput";
import { Customer_wishlistScalarFieldEnum } from "../../../../enums/Customer_wishlistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomer_wishlistArgs {
  @TypeGraphQL.Field(_type => Customer_wishlistWhereInput, {
    nullable: true
  })
  where?: Customer_wishlistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Customer_wishlistOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "customer_id" | "sales_channel_id" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Customer_wishlistScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Customer_wishlistScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
