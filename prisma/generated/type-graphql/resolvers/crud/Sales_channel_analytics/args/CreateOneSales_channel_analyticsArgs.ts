import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_analyticsCreateInput } from "../../../inputs/Sales_channel_analyticsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSales_channel_analyticsArgs {
  @TypeGraphQL.Field(_type => Sales_channel_analyticsCreateInput, {
    nullable: false
  })
  data!: Sales_channel_analyticsCreateInput;
}
