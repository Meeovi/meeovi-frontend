import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_addressCreateInput } from "../../../inputs/Order_addressCreateInput";
import { Order_addressUpdateInput } from "../../../inputs/Order_addressUpdateInput";
import { Order_addressWhereUniqueInput } from "../../../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOrder_addressArgs {
  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Order_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_addressCreateInput, {
    nullable: false
  })
  create!: Order_addressCreateInput;

  @TypeGraphQL.Field(_type => Order_addressUpdateInput, {
    nullable: false
  })
  update!: Order_addressUpdateInput;
}
