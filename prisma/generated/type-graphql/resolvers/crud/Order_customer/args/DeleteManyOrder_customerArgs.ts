import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_customerWhereInput } from "../../../inputs/Order_customerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrder_customerArgs {
  @TypeGraphQL.Field(_type => Order_customerWhereInput, {
    nullable: true
  })
  where?: Order_customerWhereInput | undefined;
}
