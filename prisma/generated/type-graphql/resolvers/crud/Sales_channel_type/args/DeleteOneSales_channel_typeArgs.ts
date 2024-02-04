import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_typeWhereUniqueInput } from "../../../inputs/Sales_channel_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSales_channel_typeArgs {
  @TypeGraphQL.Field(_type => Sales_channel_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_typeWhereUniqueInput;
}
