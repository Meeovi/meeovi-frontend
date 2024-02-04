import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_addressUpdateManyMutationInput } from "../../../inputs/Customer_addressUpdateManyMutationInput";
import { Customer_addressWhereInput } from "../../../inputs/Customer_addressWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCustomer_addressArgs {
  @TypeGraphQL.Field(_type => Customer_addressUpdateManyMutationInput, {
    nullable: false
  })
  data!: Customer_addressUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Customer_addressWhereInput, {
    nullable: true
  })
  where?: Customer_addressWhereInput | undefined;
}
