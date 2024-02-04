import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_languageOrderByWithAggregationInput } from "../../../inputs/Sales_channel_languageOrderByWithAggregationInput";
import { Sales_channel_languageScalarWhereWithAggregatesInput } from "../../../inputs/Sales_channel_languageScalarWhereWithAggregatesInput";
import { Sales_channel_languageWhereInput } from "../../../inputs/Sales_channel_languageWhereInput";
import { Sales_channel_languageScalarFieldEnum } from "../../../../enums/Sales_channel_languageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySales_channel_languageArgs {
  @TypeGraphQL.Field(_type => Sales_channel_languageWhereInput, {
    nullable: true
  })
  where?: Sales_channel_languageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_languageOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Sales_channel_languageOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_languageScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"sales_channel_id" | "language_id">;

  @TypeGraphQL.Field(_type => Sales_channel_languageScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Sales_channel_languageScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
