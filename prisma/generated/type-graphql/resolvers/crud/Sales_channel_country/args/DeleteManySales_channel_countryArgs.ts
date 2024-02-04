import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_countryWhereInput } from "../../../inputs/Sales_channel_countryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySales_channel_countryArgs {
  @TypeGraphQL.Field(_type => Sales_channel_countryWhereInput, {
    nullable: true
  })
  where?: Sales_channel_countryWhereInput | undefined;
}
