import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_typeWhereInput } from "../../../inputs/Sales_channel_typeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySales_channel_typeArgs {
  @TypeGraphQL.Field(_type => Sales_channel_typeWhereInput, {
    nullable: true
  })
  where?: Sales_channel_typeWhereInput | undefined;
}
