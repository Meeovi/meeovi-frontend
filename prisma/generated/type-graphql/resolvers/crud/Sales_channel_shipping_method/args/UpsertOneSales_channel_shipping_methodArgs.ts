import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_shipping_methodCreateInput } from "../../../inputs/Sales_channel_shipping_methodCreateInput";
import { Sales_channel_shipping_methodUpdateInput } from "../../../inputs/Sales_channel_shipping_methodUpdateInput";
import { Sales_channel_shipping_methodWhereUniqueInput } from "../../../inputs/Sales_channel_shipping_methodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSales_channel_shipping_methodArgs {
  @TypeGraphQL.Field(_type => Sales_channel_shipping_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_shipping_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Sales_channel_shipping_methodCreateInput, {
    nullable: false
  })
  create!: Sales_channel_shipping_methodCreateInput;

  @TypeGraphQL.Field(_type => Sales_channel_shipping_methodUpdateInput, {
    nullable: false
  })
  update!: Sales_channel_shipping_methodUpdateInput;
}
