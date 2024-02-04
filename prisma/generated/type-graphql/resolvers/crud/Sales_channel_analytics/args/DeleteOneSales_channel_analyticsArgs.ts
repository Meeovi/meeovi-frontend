import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_analyticsWhereUniqueInput } from "../../../inputs/Sales_channel_analyticsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSales_channel_analyticsArgs {
  @TypeGraphQL.Field(_type => Sales_channel_analyticsWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_analyticsWhereUniqueInput;
}
