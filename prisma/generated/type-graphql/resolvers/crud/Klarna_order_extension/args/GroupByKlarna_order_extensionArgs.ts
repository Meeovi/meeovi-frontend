import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klarna_order_extensionOrderByWithAggregationInput } from "../../../inputs/Klarna_order_extensionOrderByWithAggregationInput";
import { Klarna_order_extensionScalarWhereWithAggregatesInput } from "../../../inputs/Klarna_order_extensionScalarWhereWithAggregatesInput";
import { Klarna_order_extensionWhereInput } from "../../../inputs/Klarna_order_extensionWhereInput";
import { Klarna_order_extensionScalarFieldEnum } from "../../../../enums/Klarna_order_extensionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByKlarna_order_extensionArgs {
  @TypeGraphQL.Field(_type => Klarna_order_extensionWhereInput, {
    nullable: true
  })
  where?: Klarna_order_extensionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Klarna_order_extensionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "order_id" | "order_version_id" | "order_address_hash" | "order_cart_hash" | "order_cart_hash_version" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Klarna_order_extensionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Klarna_order_extensionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
