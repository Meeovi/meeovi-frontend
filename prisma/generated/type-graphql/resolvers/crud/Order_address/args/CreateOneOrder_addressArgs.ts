import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_addressCreateInput } from "../../../inputs/Order_addressCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrder_addressArgs {
  @TypeGraphQL.Field(_type => Order_addressCreateInput, {
    nullable: false
  })
  data!: Order_addressCreateInput;
}
