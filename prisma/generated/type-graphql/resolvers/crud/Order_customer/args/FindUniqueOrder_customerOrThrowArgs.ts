import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_customerWhereUniqueInput } from "../../../inputs/Order_customerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOrder_customerOrThrowArgs {
  @TypeGraphQL.Field(_type => Order_customerWhereUniqueInput, {
    nullable: false
  })
  where!: Order_customerWhereUniqueInput;
}
