import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_recoveryCreateInput } from "../../../inputs/Customer_recoveryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCustomer_recoveryArgs {
  @TypeGraphQL.Field(_type => Customer_recoveryCreateInput, {
    nullable: false
  })
  data!: Customer_recoveryCreateInput;
}
