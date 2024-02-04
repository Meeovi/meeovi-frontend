import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_addressUpdateInput } from "../../../inputs/Order_addressUpdateInput";
import { Order_addressWhereUniqueInput } from "../../../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOrder_addressArgs {
  @TypeGraphQL.Field(_type => Order_addressUpdateInput, {
    nullable: false
  })
  data!: Order_addressUpdateInput;

  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Order_addressWhereUniqueInput;
}
