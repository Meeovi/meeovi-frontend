import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_recoveryUpdateInput } from "../../../inputs/Customer_recoveryUpdateInput";
import { Customer_recoveryWhereUniqueInput } from "../../../inputs/Customer_recoveryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCustomer_recoveryArgs {
  @TypeGraphQL.Field(_type => Customer_recoveryUpdateInput, {
    nullable: false
  })
  data!: Customer_recoveryUpdateInput;

  @TypeGraphQL.Field(_type => Customer_recoveryWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_recoveryWhereUniqueInput;
}
