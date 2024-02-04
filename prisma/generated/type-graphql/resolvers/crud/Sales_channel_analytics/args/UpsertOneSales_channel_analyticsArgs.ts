import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_analyticsCreateInput } from "../../../inputs/Sales_channel_analyticsCreateInput";
import { Sales_channel_analyticsUpdateInput } from "../../../inputs/Sales_channel_analyticsUpdateInput";
import { Sales_channel_analyticsWhereUniqueInput } from "../../../inputs/Sales_channel_analyticsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSales_channel_analyticsArgs {
  @TypeGraphQL.Field(_type => Sales_channel_analyticsWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_analyticsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Sales_channel_analyticsCreateInput, {
    nullable: false
  })
  create!: Sales_channel_analyticsCreateInput;

  @TypeGraphQL.Field(_type => Sales_channel_analyticsUpdateInput, {
    nullable: false
  })
  update!: Sales_channel_analyticsUpdateInput;
}
