import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_tagCreateInput } from "../../../inputs/Order_tagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrder_tagArgs {
  @TypeGraphQL.Field(_type => Order_tagCreateInput, {
    nullable: false
  })
  data!: Order_tagCreateInput;
}
