import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_sales_channelOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Number_range_sales_channelOrderByWithRelationAndSearchRelevanceInput";
import { Number_range_sales_channelWhereInput } from "../../../inputs/Number_range_sales_channelWhereInput";
import { Number_range_sales_channelWhereUniqueInput } from "../../../inputs/Number_range_sales_channelWhereUniqueInput";
import { Number_range_sales_channelScalarFieldEnum } from "../../../../enums/Number_range_sales_channelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstNumber_range_sales_channelArgs {
  @TypeGraphQL.Field(_type => Number_range_sales_channelWhereInput, {
    nullable: true
  })
  where?: Number_range_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Number_range_sales_channelOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_sales_channelWhereUniqueInput, {
    nullable: true
  })
  cursor?: Number_range_sales_channelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "number_range_id" | "sales_channel_id" | "number_range_type_id" | "created_at" | "updated_at"> | undefined;
}
