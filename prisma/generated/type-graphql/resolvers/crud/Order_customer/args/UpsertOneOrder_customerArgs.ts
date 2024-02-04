import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_customerCreateInput } from "../../../inputs/Order_customerCreateInput";
import { Order_customerUpdateInput } from "../../../inputs/Order_customerUpdateInput";
import { Order_customerWhereUniqueInput } from "../../../inputs/Order_customerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOrder_customerArgs {
  @TypeGraphQL.Field(_type => Order_customerWhereUniqueInput, {
    nullable: false
  })
  where!: Order_customerWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_customerCreateInput, {
    nullable: false
  })
  create!: Order_customerCreateInput;

  @TypeGraphQL.Field(_type => Order_customerUpdateInput, {
    nullable: false
  })
  update!: Order_customerUpdateInput;
}
