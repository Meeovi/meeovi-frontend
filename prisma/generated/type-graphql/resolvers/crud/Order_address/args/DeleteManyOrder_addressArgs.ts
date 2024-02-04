import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_addressWhereInput } from "../../../inputs/Order_addressWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrder_addressArgs {
  @TypeGraphQL.Field(_type => Order_addressWhereInput, {
    nullable: true
  })
  where?: Order_addressWhereInput | undefined;
}
