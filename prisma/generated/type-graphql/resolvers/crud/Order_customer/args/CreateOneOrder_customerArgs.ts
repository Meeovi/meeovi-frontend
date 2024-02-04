import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_customerCreateInput } from "../../../inputs/Order_customerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrder_customerArgs {
  @TypeGraphQL.Field(_type => Order_customerCreateInput, {
    nullable: false
  })
  data!: Order_customerCreateInput;
}
