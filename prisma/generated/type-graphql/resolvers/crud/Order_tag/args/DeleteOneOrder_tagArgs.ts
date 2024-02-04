import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_tagWhereUniqueInput } from "../../../inputs/Order_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneOrder_tagArgs {
  @TypeGraphQL.Field(_type => Order_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Order_tagWhereUniqueInput;
}
