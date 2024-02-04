import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_addressWhereUniqueInput } from "../../../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneOrder_addressArgs {
  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Order_addressWhereUniqueInput;
}
