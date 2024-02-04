import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_tagUpdateManyMutationInput } from "../../../inputs/Order_tagUpdateManyMutationInput";
import { Order_tagWhereInput } from "../../../inputs/Order_tagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrder_tagArgs {
  @TypeGraphQL.Field(_type => Order_tagUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_tagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Order_tagWhereInput, {
    nullable: true
  })
  where?: Order_tagWhereInput | undefined;
}
