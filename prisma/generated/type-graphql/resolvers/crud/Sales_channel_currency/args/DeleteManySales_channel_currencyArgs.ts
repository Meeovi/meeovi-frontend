import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_currencyWhereInput } from "../../../inputs/Sales_channel_currencyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySales_channel_currencyArgs {
  @TypeGraphQL.Field(_type => Sales_channel_currencyWhereInput, {
    nullable: true
  })
  where?: Sales_channel_currencyWhereInput | undefined;
}
