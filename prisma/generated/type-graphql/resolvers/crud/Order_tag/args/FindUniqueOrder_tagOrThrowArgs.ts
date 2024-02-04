import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_tagWhereUniqueInput } from "../../../inputs/Order_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOrder_tagOrThrowArgs {
  @TypeGraphQL.Field(_type => Order_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Order_tagWhereUniqueInput;
}
