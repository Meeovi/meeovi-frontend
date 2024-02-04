import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_sales_channelOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Promotion_sales_channelOrderByWithRelationAndSearchRelevanceInput";
import { Promotion_sales_channelWhereInput } from "../../../inputs/Promotion_sales_channelWhereInput";
import { Promotion_sales_channelWhereUniqueInput } from "../../../inputs/Promotion_sales_channelWhereUniqueInput";
import { Promotion_sales_channelScalarFieldEnum } from "../../../../enums/Promotion_sales_channelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Sales_channelPromotion_sales_channelArgs {
  @TypeGraphQL.Field(_type => Promotion_sales_channelWhereInput, {
    nullable: true
  })
  where?: Promotion_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_sales_channelOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Promotion_sales_channelOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_sales_channelWhereUniqueInput, {
    nullable: true
  })
  cursor?: Promotion_sales_channelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Promotion_sales_channelScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "promotion_id" | "sales_channel_id" | "priority" | "created_at" | "updated_at"> | undefined;
}
