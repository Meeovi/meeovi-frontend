import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_tagCreateInput } from "../../../inputs/Order_tagCreateInput";
import { Order_tagUpdateInput } from "../../../inputs/Order_tagUpdateInput";
import { Order_tagWhereUniqueInput } from "../../../inputs/Order_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOrder_tagArgs {
  @TypeGraphQL.Field(_type => Order_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Order_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_tagCreateInput, {
    nullable: false
  })
  create!: Order_tagCreateInput;

  @TypeGraphQL.Field(_type => Order_tagUpdateInput, {
    nullable: false
  })
  update!: Order_tagUpdateInput;
}
