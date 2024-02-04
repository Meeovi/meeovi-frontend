import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_typeOrderByWithAggregationInput } from "../../../inputs/Sales_channel_typeOrderByWithAggregationInput";
import { Sales_channel_typeScalarWhereWithAggregatesInput } from "../../../inputs/Sales_channel_typeScalarWhereWithAggregatesInput";
import { Sales_channel_typeWhereInput } from "../../../inputs/Sales_channel_typeWhereInput";
import { Sales_channel_typeScalarFieldEnum } from "../../../../enums/Sales_channel_typeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySales_channel_typeArgs {
  @TypeGraphQL.Field(_type => Sales_channel_typeWhereInput, {
    nullable: true
  })
  where?: Sales_channel_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_typeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Sales_channel_typeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_typeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "cover_url" | "icon_name" | "screenshot_urls" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Sales_channel_typeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Sales_channel_typeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
