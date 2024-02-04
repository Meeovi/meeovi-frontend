import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_recoveryCreateInput } from "../../../inputs/Customer_recoveryCreateInput";
import { Customer_recoveryUpdateInput } from "../../../inputs/Customer_recoveryUpdateInput";
import { Customer_recoveryWhereUniqueInput } from "../../../inputs/Customer_recoveryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCustomer_recoveryArgs {
  @TypeGraphQL.Field(_type => Customer_recoveryWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_recoveryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_recoveryCreateInput, {
    nullable: false
  })
  create!: Customer_recoveryCreateInput;

  @TypeGraphQL.Field(_type => Customer_recoveryUpdateInput, {
    nullable: false
  })
  update!: Customer_recoveryUpdateInput;
}
