import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_recoveryUpdateManyMutationInput } from "../../../inputs/Customer_recoveryUpdateManyMutationInput";
import { Customer_recoveryWhereInput } from "../../../inputs/Customer_recoveryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCustomer_recoveryArgs {
  @TypeGraphQL.Field(_type => Customer_recoveryUpdateManyMutationInput, {
    nullable: false
  })
  data!: Customer_recoveryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Customer_recoveryWhereInput, {
    nullable: true
  })
  where?: Customer_recoveryWhereInput | undefined;
}
