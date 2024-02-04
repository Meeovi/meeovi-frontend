import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_typeCreateInput } from "../../../inputs/Sales_channel_typeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSales_channel_typeArgs {
  @TypeGraphQL.Field(_type => Sales_channel_typeCreateInput, {
    nullable: false
  })
  data!: Sales_channel_typeCreateInput;
}
