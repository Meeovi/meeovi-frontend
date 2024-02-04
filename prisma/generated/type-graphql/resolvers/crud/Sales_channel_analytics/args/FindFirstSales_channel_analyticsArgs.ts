import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_analyticsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Sales_channel_analyticsOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channel_analyticsWhereInput } from "../../../inputs/Sales_channel_analyticsWhereInput";
import { Sales_channel_analyticsWhereUniqueInput } from "../../../inputs/Sales_channel_analyticsWhereUniqueInput";
import { Sales_channel_analyticsScalarFieldEnum } from "../../../../enums/Sales_channel_analyticsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSales_channel_analyticsArgs {
  @TypeGraphQL.Field(_type => Sales_channel_analyticsWhereInput, {
    nullable: true
  })
  where?: Sales_channel_analyticsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_analyticsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Sales_channel_analyticsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_analyticsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Sales_channel_analyticsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_analyticsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "tracking_id" | "active" | "track_orders" | "created_at" | "updated_at" | "anonymize_ip"> | undefined;
}
