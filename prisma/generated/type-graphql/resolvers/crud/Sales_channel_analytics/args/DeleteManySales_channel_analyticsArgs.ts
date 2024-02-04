import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_analyticsWhereInput } from "../../../inputs/Sales_channel_analyticsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySales_channel_analyticsArgs {
  @TypeGraphQL.Field(_type => Sales_channel_analyticsWhereInput, {
    nullable: true
  })
  where?: Sales_channel_analyticsWhereInput | undefined;
}
