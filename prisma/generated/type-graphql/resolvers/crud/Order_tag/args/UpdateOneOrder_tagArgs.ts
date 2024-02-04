import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_tagUpdateInput } from "../../../inputs/Order_tagUpdateInput";
import { Order_tagWhereUniqueInput } from "../../../inputs/Order_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOrder_tagArgs {
  @TypeGraphQL.Field(_type => Order_tagUpdateInput, {
    nullable: false
  })
  data!: Order_tagUpdateInput;

  @TypeGraphQL.Field(_type => Order_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Order_tagWhereUniqueInput;
}
