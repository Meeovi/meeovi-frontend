import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_shipping_methodOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Sales_channel_shipping_methodOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channel_shipping_methodWhereInput } from "../../../inputs/Sales_channel_shipping_methodWhereInput";
import { Sales_channel_shipping_methodWhereUniqueInput } from "../../../inputs/Sales_channel_shipping_methodWhereUniqueInput";
import { Sales_channel_shipping_methodScalarFieldEnum } from "../../../../enums/Sales_channel_shipping_methodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Sales_channelSales_channel_shipping_methodArgs {
  @TypeGraphQL.Field(_type => Sales_channel_shipping_methodWhereInput, {
    nullable: true
  })
  where?: Sales_channel_shipping_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_shipping_methodOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Sales_channel_shipping_methodOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_shipping_methodWhereUniqueInput, {
    nullable: true
  })
  cursor?: Sales_channel_shipping_methodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_shipping_methodScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"sales_channel_id" | "shipping_method_id"> | undefined;
}
