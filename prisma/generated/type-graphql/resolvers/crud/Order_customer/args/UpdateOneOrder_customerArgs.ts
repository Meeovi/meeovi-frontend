import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_customerUpdateInput } from "../../../inputs/Order_customerUpdateInput";
import { Order_customerWhereUniqueInput } from "../../../inputs/Order_customerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOrder_customerArgs {
  @TypeGraphQL.Field(_type => Order_customerUpdateInput, {
    nullable: false
  })
  data!: Order_customerUpdateInput;

  @TypeGraphQL.Field(_type => Order_customerWhereUniqueInput, {
    nullable: false
  })
  where!: Order_customerWhereUniqueInput;
}
