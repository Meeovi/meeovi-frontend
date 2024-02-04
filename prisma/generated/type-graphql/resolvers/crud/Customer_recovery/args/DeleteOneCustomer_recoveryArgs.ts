import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_recoveryWhereUniqueInput } from "../../../inputs/Customer_recoveryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCustomer_recoveryArgs {
  @TypeGraphQL.Field(_type => Customer_recoveryWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_recoveryWhereUniqueInput;
}
