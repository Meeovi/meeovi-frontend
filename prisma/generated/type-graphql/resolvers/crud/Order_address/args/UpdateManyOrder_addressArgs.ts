import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_addressUpdateManyMutationInput } from "../../../inputs/Order_addressUpdateManyMutationInput";
import { Order_addressWhereInput } from "../../../inputs/Order_addressWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrder_addressArgs {
  @TypeGraphQL.Field(_type => Order_addressUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_addressUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Order_addressWhereInput, {
    nullable: true
  })
  where?: Order_addressWhereInput | undefined;
}
