import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_tagWhereInput } from "../../../inputs/Order_tagWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrder_tagArgs {
  @TypeGraphQL.Field(_type => Order_tagWhereInput, {
    nullable: true
  })
  where?: Order_tagWhereInput | undefined;
}
